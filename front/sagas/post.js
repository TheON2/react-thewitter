import { all, call, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_SPOST_FAILURE,
  LOAD_SPOST_REQUEST,
  LOAD_SPOST_SUCCESS, LOAD_USER_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  RETWEET_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function addPostAPI(data) {
  return axios.post('/post', data); // formdata 전송
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.lastId);
    yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function loadSPostAPI(data) {
  return axios.get(`/post/${data}`);
}

function* loadSPost(action) {
  try {
    const result = yield call(loadSPostAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: LOAD_SPOST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_SPOST_FAILURE,
      error: err.response.data,
    });
  }
}

function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: LIKE_POST_SUCCESS,
      data: result.data, // PostId,UserId
    });
  } catch (err) {
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: UNLIKE_POST_SUCCESS,
      data: result.data, // PostId,UserId
    });
  } catch (err) {
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({

      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function uploadImagesAPI(data) {
  return axios.post('/post/images', data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function reTweetAPI(data) {
  return axios.post(`/post/${data}/retweet`); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* reTweet(action) {
  try {
    const result = yield call(reTweetAPI, action.data);
    yield put({ // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: RETWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RETWEET_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data , action.lastId);
    yield put({ // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data , action.lastId);
    yield put({ // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchLoadPost() {
  yield throttle(2000, LOAD_POST_REQUEST, loadPost);
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, reTweet);
}

function* watchLoadSPost() {
  yield takeLatest(LOAD_SPOST_REQUEST, loadSPost);
}

function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadSPost),
    fork(watchLoadPost),
    fork(watchLoadHashtagPosts),
    fork(watchLoadUserPosts),
    fork(watchLikePost),
    fork(watchUnLikePost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchUploadImages),
    fork(watchRetweet),
  ]);
}
