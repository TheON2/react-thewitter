const express = require('express');
const {Post, User} = require("../models");
const Comment = require("../models/comment");
const Image = require("../models/image");
const router = express.Router();

router.get('/', async (req, res, next) => {
  // GET /hashtag/노드
  try {
    const where = {};
    // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where, // 1차 조건문
      limit: 10,
      order: [
        ['createdAt', 'DESC']],
      include: [{
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        where: { id: req.user.id} // 2차 조건문 매개변수로받은 hashtag를 db Hashtag에서 찾아낸다.
      },{
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

module.exports = router;