module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // eslint-disable-next-line react/prop-types

function Thewitter({
  Component
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("meate", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Thewitter")), __jsx(Component, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

Thewitter.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(Thewitter));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 // (이전상태,액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_REQUEST", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_SUCCESS", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_FAILURE", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_REQUEST", function() { return LOAD_RELATED_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_SUCCESS", function() { return LOAD_RELATED_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_FAILURE", function() { return LOAD_RELATED_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_REQUEST", function() { return LOAD_LIKED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_SUCCESS", function() { return LOAD_LIKED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_FAILURE", function() { return LOAD_LIKED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_REQUEST", function() { return LOAD_SPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_SUCCESS", function() { return LOAD_SPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_FAILURE", function() { return LOAD_SPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  hasMorePost: true,
  reTweetLoading: false,
  reTweetDone: false,
  reTweetError: null,
  upLoadImagesLoading: false,
  upLoadImagesDone: false,
  upLoadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadSPostLoading: false,
  loadSPostDone: false,
  loadSPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
const LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
const LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
const LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
const LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
const LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
const LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
const LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case RETWEET_REQUEST:
      draft.reTweetLoading = true;
      draft.reTweetDone = false;
      draft.reTweetError = null;
      break;

    case RETWEET_SUCCESS:
      {
        draft.reTweetLoading = false;
        draft.reTweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      draft.reTweetError = action.error;
      draft.reTweetLoading = false;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.upLoadImagesLoading = true;
      draft.upLoadImagesDone = false;
      draft.upLoadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.upLoadImagesLoading = false;
        draft.upLoadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.upLoadImagesError = action.error;
      draft.upLoadImagesLoading = false;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostError = action.error;
      draft.likePostLoading = false;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostError = action.error;
      draft.unlikePostLoading = false;
      break;

    case LOAD_SPOST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case LOAD_SPOST_SUCCESS:
      // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts];
      draft.singlePost = action.data;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = true;
      break;

    case LOAD_SPOST_FAILURE:
      draft.loadSPostError = action.error;
      draft.loadSPostLoading = false;
      break;

    case LOAD_LIKED_POSTS_REQUEST:
    case LOAD_RELATED_POST_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_LIKED_POSTS_SUCCESS:
    case LOAD_RELATED_POST_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POST_SUCCESS:
      // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts];
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_LIKED_POSTS_FAILURE:
    case LOAD_RELATED_POST_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POST_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts];
      draft.mainPosts.unshift(action.data);
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostError = action.error;
      draft.addPostLoading = false;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostError = action.error;
      draft.removePostLoading = false;
      break;

    case MODIFY_POST_REQUEST:
      draft.modifyPostLoading = true;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      break;

    case MODIFY_POST_SUCCESS:
      draft.mainPosts.find(v => v.id === action.data.PostId).content = action.data.content;
      draft.modifyPostLoading = false;
      draft.modifyPostDone = true;
      break;

    case MODIFY_POST_FAILURE:
      draft.modifyPostError = action.error;
      draft.modifyPostLoading = false;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_REQUEST", function() { return LOAD_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_SUCCESS", function() { return LOAD_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_FAILURE", function() { return LOAD_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  removeFollowerLoading: false,
  // 팔로워 차단 시도중
  removeFollowerDone: false,
  removeFollowerError: null,
  loadUserLoading: false,
  // 다른 이용자 정보 로딩
  loadUserDone: false,
  loadUserError: null,
  loadUsersLoading: false,
  // 전체 이용자 리스트 로딩
  loadUsersDone: false,
  loadUsersError: null,
  loadFollowersLoading: false,
  // 팔로워 목록 로딩
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로우 목록 로딩
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadMyInfoLoading: false,
  // 내정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  userInfo: null,
  me: null,
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case LOAD_USERS_REQUEST:
      draft.loadUsersLoading = true;
      draft.loadUsersError = null;
      draft.loadUsersDone = false;
      break;

    case LOAD_USERS_SUCCESS:
      draft.loadUsersLoading = false;
      draft.usersInfo = action.data;
      draft.loadUsersDone = true;
      break;

    case LOAD_USERS_FAILURE:
      draft.loadUsersLoading = false;
      draft.loadUsersError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data); // formdata 전송
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadSPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}

function* loadSPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function reTweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* reTweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(reTweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function RelatedPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/related?lastId=${lastId || 0}`);
}

function* RelatedPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(RelatedPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadLikedPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/liked?lastId=${lastId || 0}`);
}

function* loadLikedPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadLikedPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function modifyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data.PostId}`, data);
}

function* modifyPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(modifyPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], reTweet);
}

function* watchLoadSPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_REQUEST"], loadSPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchModifyPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_REQUEST"], modifyPost);
}

function* watchLoadRelatedPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_REQUEST"], RelatedPost);
}

function* watchLoadLikedtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_REQUEST"], loadLikedPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRelatedPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadLikedtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchModifyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUsersAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/all');
}

function* loadUsers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUsersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout', data);
}

function* logOut(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function SignUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(SignUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function FollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(FollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function UnFollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(UnFollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function ChangeNickNameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickName(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(ChangeNickNameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/follower/${data}`);
}

function* removeFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangenickName() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickName);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchLoadUserInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadUsersInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_REQUEST"], loadUsers);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUsersInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangenickName), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJUaGV3aXR0ZXIiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJzaW5nbGVQb3N0IiwiaGFzTW9yZVBvc3QiLCJyZVR3ZWV0TG9hZGluZyIsInJlVHdlZXREb25lIiwicmVUd2VldEVycm9yIiwidXBMb2FkSW1hZ2VzTG9hZGluZyIsInVwTG9hZEltYWdlc0RvbmUiLCJ1cExvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFNQb3N0TG9hZGluZyIsImxvYWRTUG9zdERvbmUiLCJsb2FkU1Bvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkVXNlclBvc3RzTG9hZGluZyIsImxvYWRVc2VyUG9zdHNEb25lIiwibG9hZFVzZXJQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJtb2RpZnlQb3N0TG9hZGluZyIsIm1vZGlmeVBvc3REb25lIiwibW9kaWZ5UG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIk1PRElGWV9QT1NUX1JFUVVFU1QiLCJNT0RJRllfUE9TVF9TVUNDRVNTIiwiTU9ESUZZX1BPU1RfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTIiwiTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfTElLRURfUE9TVFNfUkVRVUVTVCIsIkxPQURfTElLRURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfTElLRURfUE9TVFNfRkFJTFVSRSIsIkxPQURfU1BPU1RfUkVRVUVTVCIsIkxPQURfU1BPU1RfU1VDQ0VTUyIsIkxPQURfU1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJjb250ZW50IiwiQ29tbWVudHMiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2Vyc0xvYWRpbmciLCJsb2FkVXNlcnNEb25lIiwibG9hZFVzZXJzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJ1c2VySW5mbyIsIm1lIiwidXNlcnNJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiRm9sbG93ZXJzIiwiRm9sbG93aW5ncyIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJsb2FkUG9zdEFQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0IiwibG9hZFNQb3N0QVBJIiwibG9hZFNQb3N0IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmVUd2VldEFQSSIsInJlVHdlZXQiLCJsb2FkVXNlclBvc3RzQVBJIiwibG9hZFVzZXJQb3N0cyIsIlJlbGF0ZWRQb3N0QVBJIiwiUmVsYXRlZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRMaWtlZFBvc3RzQVBJIiwibG9hZExpa2VkUG9zdHMiLCJtb2RpZnlQb3N0QVBJIiwibW9kaWZ5UG9zdCIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0IiwidGhyb3R0bGUiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaExvYWRTUG9zdCIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoTW9kaWZ5UG9zdCIsIndhdGNoTG9hZFJlbGF0ZWRQb3N0Iiwid2F0Y2hMb2FkTGlrZWR0YWdQb3N0cyIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvYWRVc2Vyc0FQSSIsImxvYWRVc2VycyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJTaWduVXBBUEkiLCJzaWduVXAiLCJGb2xsb3dBUEkiLCJmb2xsb3ciLCJVbkZvbGxvd0FQSSIsInVuZm9sbG93IiwiQ2hhbmdlTmlja05hbWVBUEkiLCJjaGFuZ2VOaWNrTmFtZSIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsInJlbW92ZUZvbGxvd2Vyc0FQSSIsInJlbW92ZUZvbGxvd2VycyIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hDaGFuZ2VuaWNrTmFtZSIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hMb2FkVXNlckluZm8iLCJ3YXRjaExvYWRVc2Vyc0luZm8iLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ3ROLGlEQUFELEVBQVVpTixRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CN0csOENBQW5CLENBQWpCO0FBQ0EsU0FBTzBHLEtBQVA7QUFDRCxDQVREOztBQVdBLE1BQU12VCxPQUFPLEdBQUcyVCx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzVDYSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWU1VCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuZnVuY3Rpb24gVGhld2l0dGVyKHsgQ29tcG9uZW50IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1lYXRlIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPlRoZXdpdHRlcjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGhld2l0dGVyLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoVGhld2l0dGVyKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgcmVUd2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlVHdlZXREb25lOiBmYWxzZSxcclxuICByZVR3ZWV0RXJyb3I6IG51bGwsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfUkVRVUVTVCA9ICdNT0RJRllfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1NVQ0NFU1MgPSAnTU9ESUZZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9GQUlMVVJFID0gJ01PRElGWV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfTElLRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfUkVRVUVTVCA9ICdMT0FEX1NQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gJ0xPQURfU1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX0ZBSUxVUkUgPSAnTE9BRF9TUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVUd2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZVR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZVR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LnJlVHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlVHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZVR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnJlVHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfU1VDQ0VTUzpcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAvLyBkcmFmdC5tYWluUG9zdHMgPSBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKS5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDssKjri6gg7Iuc64+E7KSRXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOuLpOuluCDsnbTsmqnsnpAg7KCV67O0IOuhnOuUqVxyXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7KCE7LK0IOydtOyaqeyekCDrpqzsiqTtirgg66Gc65SpXHJcbiAgbG9hZFVzZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg66qp66GdIOuhnOuUqVxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuqqeuhnSDroZzrlKlcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrTsoJXrs7Qg66Gc65SpIOyLnOuPhOykkVxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJzSW5mbzoge30sXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfUkVRVUVTVCA9ICdMT0FEX1VTRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19TVUNDRVNTID0gJ0xPQURfVVNFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2Vyc0luZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgLy8gcmV0dXJuIHtcclxuICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgIG1lOiB7XHJcbiAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAvLyByZXR1cm4ge1xyXG4gICAgLy8gICAuLi5zdGF0ZSxcclxuICAgIC8vICAgbWU6IHtcclxuICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgZm9yayh1c2VyU2FnYSksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1NQT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9TUE9TVF9SRVFVRVNULFxyXG4gIExPQURfU1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBNT0RJRllfUE9TVF9GQUlMVVJFLFxyXG4gIE1PRElGWV9QT1NUX1JFUVVFU1QsXHJcbiAgTU9ESUZZX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTsgLy8gZm9ybWRhdGEg7KCE7IahXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7IC8vIGRlbGV0ZeuKlCDrjbDsnbTthLDrpbwg6rCA7KC46rCIIOyImCDsl4bri6QgZGF0YeuKlCBwb3N0SWRcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU1Bvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRTUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkU1Bvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vIGZvcm1kYXRh64qUIHsgbmFtZTogZGF0YSB9IOqwmeydgCDsi53snLzroZwg6rCQ7Iu467KE66as66m0IGpzb27snLzroZwg7J6Q64+ZIOuzgO2ZmOuQmOuyhOumsOuLpC5cclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlVHdlZXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTsgLy8gZm9ybWRhdGHripQgeyBuYW1lOiBkYXRhIH0g6rCZ7J2AIOyLneycvOuhnCDqsJDsi7jrsoTrpqzrqbQganNvbuycvOuhnCDsnpDrj5kg67OA7ZmY65CY67KE66aw64ukLlxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVUd2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZVR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbGF0ZWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9yZWxhdGVkP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogUmVsYXRlZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoUmVsYXRlZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTGlrZWRQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvbGlrZWQ/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTGlrZWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTGlrZWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEuUG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbW9kaWZ5UG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChtb2RpZnlQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmVUd2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRTUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfU1BPU1RfUkVRVUVTVCwgbG9hZFNQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTW9kaWZ5UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KE1PRElGWV9QT1NUX1JFUVVFU1QsIG1vZGlmeVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVsYXRlZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNULCBSZWxhdGVkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNULCBsb2FkTGlrZWRQb3N0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRTUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZWxhdGVkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZExpa2VkdGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hNb2RpZnlQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSU19SRVFVRVNULFxyXG4gIExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcclxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2Vyc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9hbGwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VycyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoU2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVuRm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoVW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhbmdlTmlja05hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQ2hhbmdlTmlja05hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZW5pY2tOYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VySW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2Vyc0luZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJTX1JFUVVFU1QsIGxvYWRVc2Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlcnNJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VuaWNrTmFtZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==