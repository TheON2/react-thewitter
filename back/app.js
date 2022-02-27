const express = require('express');
const db = require('./models');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan  = require('morgan');
const passportConfig = require('./passport');

const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');

const postsRouter = require('./routes/posts');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const likedRouter = require('./routes/likers');

dotenv.config(); // dotenv를 활성화 시키며 dotenv에 들어간 상수들이 import 된다.

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }
));

app.use('/',express.static(path.join(__dirname, 'uploads')));
// localhost3065 = 백서버의 도메인을 위해 '/' 을 붙여주고 각OS에 경로를 최적화 하기 위해
// join으로 주소를 결합한다.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/hashtag' , hashtagRouter);
app.use('/liked',likedRouter);

app.listen(3065, () => {
  console.log('서버 실행중');
});