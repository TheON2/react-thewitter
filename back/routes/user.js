const express = require('express');
const passport = require('passport');
const router = express.Router();
const bcrypt = require('bcrypt');

const {User, Post} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {Op} = require("sequelize");
const Comment = require("../models/comment");
const Image = require("../models/image");

router.get('/', async (req, res, next) => { // GET /user
  console.log(req.headers);
  try {
    if(req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: {id: req.user.id},
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'], // 매개변수의 length만 가져와서 불필요한 메모리 낭비를 줄인다.
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }]
      });
      res.status(200).json(fullUserWithoutPassword);
    }else{
      res.status(200).json(null);
    }
  } catch (error) {
  console.error(error);
  next(error);
  }
});

router.get('/all', async (req, res, next) => { // GET /user
  try {
    if(req.user) {
      const users = await User.findAll({
        attributes:['id','email','nickname']
      });
      res.status(200).json(users);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if (!user) {
      res.status(403).send('유저가 존재하지 않습니다.');
    }
    const followers = await user.getFollowers({
      limit :parseInt(req.query.limit,10),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if (!user) {
      res.status(403).send('유저가 존재하지 않습니다.');
    }
    const followings = await user.getFollowings({
      limit :parseInt(req.query.limit,10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:userId/posts', async (req, res, next) => {
  // GET /user/1/posts
  try {
    const where = { UserId: req.params.userId }; // db에서 프론트가 전송한 아이디를 기반으로 유저id를 찾아낸다
    if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: {id: user.id},
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id']
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id']
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id']
        }]
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => { //POST/user/
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.'); // 리턴없으면 아래까지 다 읽어서 로직문제
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);//해쉬화를 통한 암호화 10-13사이의 숫자로 성능조절
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    //res.setHeader('Access-Control-Allow-Origin','http://localhost:3060','*');
    res.status(200).send('ok');//동기로 맞춰주는 이유는 json구현부와 순서를 맞추기위해
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

router.patch('/nickname' , isLoggedIn , async (req,res,next)=>{
  try{
    User.update({
      nickname: req.body.nickname, // 프론트에서 새로 명명한 닉네임으로 수정한다
    },{
      where: { id: req.user.id}, //내 아이디의 닉네임을
    });
    res.status(200).json({ nickname: req.body.nickname }); // 닉변 성공시 성공적으로 닉변된 닉네임을 보낸다
  }catch (err){
    console.error(err);
    next(err);
  }
});

router.patch('/:userId/follow' , isLoggedIn , async (req,res,next)=>{
  try{ // PATCH /user/1/follow
    const user = await User.findOne({where: { id: req.params.userId}});
    if (!user){
      res.status(403).send('팔로우 대상이 없습니다.');
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) }); // 팔로우 대상의 아이디
  }catch (err){
    console.error(err);
    next(err);
  }
});

router.delete('/:userId/follow' , isLoggedIn , async (req,res,next)=>{
  try{ // DELETE /user/1/follow
    const user = await User.findOne({where: { id: req.params.userId}});
    if (!user){
      res.status(403).send('언팔로우 대상이 없습니다.');
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId,10) }); // 언팔로우 대상의 아이디
  }catch (err){
    console.error(err);
    next(err);
  }
});

// router.delete('/follower/:userId' , isLoggedIn , async (req,res,next)=>{
//   try{ // DELETE /user/follower/2
//     const user = await User.findOne({where: { id: req.user.id}}); // 자신의 아이디
//     if (!user){
//       res.status(403).send('대상을 찾을 수 없습니다.');
//     }
//     await user.removeFollowers(req.params.userId); // 파라미터로 받은 차단 대상의 아이디
//     res.status(200).json({ UserId: parseInt(req.params.userId,10) }); // 파라미터로 받은 차단 대상의 아이디
//   }catch (err){
//     console.error(err);
//     next(err);
//   }
// });

router.delete('/follower/:userId' , isLoggedIn , async (req,res,next)=>{
  try{ // DELETE /user/follower/2
    const user = await User.findOne({where: { id: req.params.userId}}); // 파라미터로 받은 차단 대상의 아이디
    if (!user){
      res.status(403).send('대상을 찾을 수 없습니다.');
    }
    await user.removeFollowings(req.user.id); // req에 저장된 요청자 아이디
    res.status(200).json({ UserId: parseInt(req.params.userId,10) }); // 파라미터로 받은 차단 대상의 아이디
  }catch (err){
    console.error(err);
    next(err);
  }
});


router.get('/:userId', async (req, res, next) => { // GET /user
  try {
      const fullUserWithoutPassword = await User.findOne({
        where: {id: req.params.userId},
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'], // 매개변수의 length만 가져와서 불필요한 메모리 낭비를 줄인다.
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }]
      });
      if(fullUserWithoutPassword){
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length;
        data.Followers = data.Followers.length;
        data.Followings = data.Followings.length;
        // 자신의 정보를 주고 받을 경우 보안과 통신최적화를 위해 렌더링 될 페이지에서 요구하는 각 요소의 길이만 담아 보낸다
      res.status(200).json(data);
      }
    else{
      res.status(404).json('존재하지 않는 사용자입니다!');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
