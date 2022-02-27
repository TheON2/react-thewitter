const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Post = require("../models/post");
const Comment = require("../models/comment");
const Image = require('../models/image');
const User = require("../models/user");
const Hashtag = require("../models/hashtag");

const {isLoggedIn} = require('./middlewares');

const router = express.Router();

try{
  fs.accessSync('uploads'); // 업로드할 폴더 엑세스 시도
}catch (err){
  console.error('디폴트 폴더가 없으므로 생성');
  fs.mkdirSync('uploads'); // 에러날시 업로드 폴더 생성
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,done){
      done(null, 'uploads');
    },
    filename(reg,file,done){ //
      const ext = path.extname(file.originalname); // 확장자 추출(.jpeg)
      const basename = path.basename(file.originalname , ext); // 파일이름 추출
      done(null, basename + '_' + new Date().getTime() + ext); // 파일이름 파일생성시간 파일확장자\
    },
  }),
  limits: { fileSize: 20*20 *1024*1024} , // 20MB 파일용량제한
})

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if(hashtags){
      const result = await Promise.all(hashtags.map((tag)=> Hashtag.findOrCreate({
        where:{name: tag.slice(1).toLowerCase()},
        }))); // [[노드 , true] , [리액트 , true]]
      await post.addHashtags(result.map((v) => v[0]));
    } // #이 붙은 게시물을 판별해 해시태그로 지정하고 게시물의 모든 해시태그를 조회하여 db 해시태그 모델에 #을떼고 소문자로 만들어 등록한다.
    if(req.body.image){
      if (Array.isArray(req.body.image)){ // 이미지가 복수일 시 배열로 올라온다. [a.png , b.png ...]
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src : image})));
        // req에 담아온 이미지들의 경로를 map을 통해 Image모델로 src에 경로를 담아 Promise객체로 반환하고 이를 다시한번 Promise.all로 데이터로 만들어 images 객체에 담는다.
        await post.addImages(images);// db에 경로들을 저장
      } else { // 이미지가 한장일때
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image); // db에 경로를 저장
      }
    }

    const fullPost = await Post.findOne({
      where: {id: post.id},
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User, // 댓글 작성자
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User, // 대상 게시물 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User, //좋아요 누른사람
        as: 'Likers',
        attributes: ['id'],
      }]
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
      include: [{ // 여기서 굳이 include를 통해 Retweet요소를 뽑아내는 이유는 필터링 중 Retweet객체가 필요하기 때문이다.
        model: Post,
        as: 'Retweet',
      }],
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }

    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
      // 자기 게시글을 스스로 리트윗 하는 것과 내 게시글을 리트윗한 글에 리트윗 거는것을 막는다.
      return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
    }

    const retweetTargetId = post.RetweetId || post.id;
    // 리트윗이 이어진 게시글의 모체의 게시글넘버를 기억하기 위함
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });

    if (exPost) {
      return res.status(403).send('이미 리트윗 했습니다.');
    }

    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    });

    const retweetWithPrevPost = await Post.findOne({
      // 이런식으로 가져오는 쿼리문이 길어질수록 db 처리 속도가 매우 느려짐
      // 프론트에서 분할해서 요청하게 만들거나 라우터를 여기서 더 쪼개서 db의 부담을 줄여야함
      where: { id : retweet.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id','nickname']
        },{
          model: Image,
        }]
      },{
        model: User,
        attributes: ['id','nickname'],
      },{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id','nickname'],
        }]
      },{
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }]

    })

    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10), // params로 넘어오는 데이터는 강제로 string으로 변환되지만 내가 정의한 액션에서는 해당값을 number로 대조하도록 해놓았으므로 형변환
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: {id: comment.id},
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    })
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.post('/images',isLoggedIn, upload.array('image'), async (req,res,next) => {
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

router.patch('/:postId', isLoggedIn, async (req, res, next) => { //PATCH /post/1/like
  const hashtags = req.body.content.match(/#[^\s#]+/g);
  try {
    await Post.update({
      content: req.body.content
    },{
      where:{
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    const post = await Post.findOne({ where: { id: req.params.postId }} );
    if(hashtags){
      const result = await Promise.all(hashtags.map((tag)=> Hashtag.findOrCreate({
        where:{name: tag.slice(1).toLowerCase()},
      }))); // [[노드 , true] , [리액트 , true]]
      await post.setHashtags(result.map((v) => v[0])); // get과 다르게 set은 기존 데이터를 지우고 덮어쓴다
    } // #이 붙은 게시물을 판별해 해시태그로 지정하고 게시물의 모든 해시태그를 조회하여 db 해시태그 모델에 #을떼고 소문자로 만들어 등록한다.

    res.status(200).json({ PostId: parseInt(req.params.postId, 10), content: req.body.content})
  } catch (error) {
    console.error(error);
    next(error);
  }
}); // 이미지 수정 추가

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { //PATCH /post/1/like
  try {
    const post = await Post.findOne({where: {id: req.params.postId}});
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.addLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { //DELETE /post/1/like
  try {
    const post = await Post.findOne({where: {id: req.params.postId}});
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.removeLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/10
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id, // 내가 쓴 게시글만 삭제 할 수 있다
      },
    });
    res.status(200).json({PostId: parseInt(req.params.postId,10)});
  } catch (err) {
    console.error(err);
    next(err);
  }
})
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
      include: [{ // 여기서 굳이 include를 통해 Retweet요소를 뽑아내는 이유는 필터링 중 Retweet객체가 필요하기 때문이다.
        model: Post,
        as: 'Retweet',
      }],
    })
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글입니다.');
    }

    const fullPost = await Post.findOne({
      // 이런식으로 가져오는 쿼리문이 길어질수록 db 처리 속도가 매우 느려짐
      // 프론트에서 분할해서 요청하게 만들거나 라우터를 여기서 더 쪼개서 db의 부담을 줄여야함
      where: { id : post.id },
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id','nickname']
        },{
          model: Image,
        }]
      },{
        model: User,
        attributes: ['id','nickname'],
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id','nickname'],
      },{
        model: Image,
      },{
        model: Comment,
        include: [{
          model: User,
          attributes: ['id','nickname'],
        }]
      }]

    })

    res.status(200).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
