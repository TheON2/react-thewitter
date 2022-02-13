const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./models');
const passportConfig = require('./passport');
const morgan  = require('morgan');
const path = require('path');

const postsRouter = require('./routes/posts');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');

dotenv.config();
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
app.use('/',express.static(path.join(__dirname, 'uploads'))); // localhost3065 = 백서버의 도메인을 위해 '/' 을 붙여주고 각OS에 경로를 최적화 하기 위해 join으로 주소를 합친다.
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

// app.get('/', (req, res) => {
//   res.send('hello express');
// });
//
// app.get('/', (req, res) => {
//   res.send('hello api');
// });

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/hashtag' , hashtagRouter);


app.listen(3065, () => {
  console.log('서버 실행중');
});