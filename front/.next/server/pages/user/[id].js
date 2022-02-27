module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _public_favicon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/favicon.png */ "./public/favicon.png");
/* harmony import */ var _public_favicon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_favicon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_home2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/home2.png */ "./public/home2.png");
/* harmony import */ var _public_home2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_home2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/search.png */ "./public/search.png");
/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_search_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_bookmark_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/bookmark.png */ "./public/bookmark.png");
/* harmony import */ var _public_bookmark_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_bookmark_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_clipboard_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/clipboard.png */ "./public/clipboard.png");
/* harmony import */ var _public_clipboard_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_clipboard_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_user_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/user.png */ "./public/user.png");
/* harmony import */ var _public_user_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_user_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_bell_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/bell.png */ "./public/bell.png");
/* harmony import */ var _public_bell_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_bell_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_email_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/email.png */ "./public/email.png");
/* harmony import */ var _public_email_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_email_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_more_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/more.png */ "./public/more.png");
/* harmony import */ var _public_more_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_more_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_logout_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/logout.png */ "./public/logout.png");
/* harmony import */ var _public_logout_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_logout_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




















const SidebarImg = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.img.withConfig({
  displayName: "AppLayout__SidebarImg",
  componentId: "sc-1x6xxdo-0"
})(["width:40px;role:presantation;"]);
const SidebarUl = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul.withConfig({
  displayName: "AppLayout__SidebarUl",
  componentId: "sc-1x6xxdo-1"
})(["list-style-type:none;line-height:1;color:black;"]);
const SidebarLi = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.li.withConfig({
  displayName: "AppLayout__SidebarLi",
  componentId: "sc-1x6xxdo-2"
})(["cursor:pointer;transition:all 0.25s ease;line-height:70px;:hover{transform:scale(1.3,1.3);}color:black;"]);
const SidebarDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "AppLayout__SidebarDiv",
  componentId: "sc-1x6xxdo-3"
})(["left:0px;border-radius:2rem;color:black;width:300px;height:1500px;font-weight:bold;line-height:250%;"]);
const LeftSidebar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "AppLayout__LeftSidebar",
  componentId: "sc-1x6xxdo-4"
})(["  position:fixed;float:left;top:0px;left:10%;width:200px;height:1000px;background:#f3f5fa15;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]);
const Navbar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "AppLayout__Navbar",
  componentId: "sc-1x6xxdo-5"
})(["  position:fixed;float:left;top:0px;left:29%;width:1800px;background:#f3f5fa15;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]);
const RightSidebar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "AppLayout__RightSidebar",
  componentId: "sc-1x6xxdo-6"
})(["  position:fixed;float:left;top:10px;right:200px;background:#f3f5fa15;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]);
const SearchInput = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search).withConfig({
  displayName: "AppLayout__SearchInput",
  componentId: "sc-1x6xxdo-7"
})(["vertical-align:middle;"]);

function AppLayout({
  children
}) {
  const [searchInput, onChangeSearchInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])('');
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_19__["logoutRequestAction"])());
  }, []); // const const {isLoggedIn} = useSelector((state)=>state.user);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      position: 'relative'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(Navbar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 20
    }
  }, "\uD648")))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(LeftSidebar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(SidebarDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx(SidebarUl, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_favicon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_home2_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 47
    }
  }, " \uD648"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/related",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_search_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 47
    }
  }, " \uD0D0\uC0C9\uD558\uAE30"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_clipboard_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 47
    }
  }, " \uB9AC\uC2A4\uD2B8"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_user_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 47
    }
  }, " \uD504\uB85C\uD544"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_bell_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 47
    }
  }, " \uC54C\uB9BC"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_email_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 47
    }
  }, " \uCABD\uC9C0"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_more_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 47
    }
  }, " \uB354\uBCF4\uAE30"))), __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 22
    }
  }))), __jsx("div", {
    onClick: onLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx(SidebarLi, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }, __jsx(SidebarImg, {
    src: _public_logout_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 48
    }
  }, " \uB85C\uADF8\uC544\uC6C3"))))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, __jsx(RightSidebar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, __jsx(SearchInput, {
    enterButton: true,
    value: searchInput,
    onChange: onChangeSearchInput,
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  })))), __jsx("div", {
    style: {
      marginTop: 100,
      zIndex: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }))));
}

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\CommentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function CommentForm({
  post
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      position: 'relative',
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      position: 'absolute',
      right: 0,
      bottom: -40,
      zIndex: 1
    },
    type: "primary",
    htmlType: "submit",
    loading: addCommentLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\uC090\uC57D")));
}

CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\FollowButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function FollowButton({
  post
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    followLoading,
    unfollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    return null;
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, isFollowing ? '언팔로우' : '팔로우');
}

FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/ImagesZoom/styles.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\ImagesZoom\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ImagesZoom({
  images,
  onClose
}) {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
    onClick: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "X")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlide: 0,
    beforeChange: slide => setCurrentSlide(slide),
    infinite: true,
    arrow: false,
    slidesToShow: 1,
    slideToScroll: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, images.map(v => __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
    key: v.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v.src}`,
    alt: v.src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, currentSlide + 1, ' ', "/", images.length)))));
}

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/styles.js":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/styles.js ***!
  \*****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, ImgWrapper, Indicator, Global, CloseBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);


const Overlay = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-r2o2ee-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-r2o2ee-1"
})(["header:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}& button{position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;}"]);
const SlickWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "sc-r2o2ee-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-r2o2ee-3"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
const Indicator = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Indicator",
  componentId: "sc-r2o2ee-4"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;"]);
const Global = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])([".slick-slide{display:inline-block;}"]);
const CloseBtn = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"]).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-r2o2ee-5"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale('ko');

function PostCard({
  post
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const liked = post.Likers.find(v => v.id === id);
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, [id]);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  });
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onChangePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(editText => () => dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["MODIFY_POST_REQUEST"],
    data: {
      PostId: post.id,
      content: editText
    }
  }), [post]);
  const onClickUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setEditMode(true);
  }, []);
  const onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setEditMode(false);
  }, []);
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: post.Images,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onUnlike,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !post.RetweetId && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onClickUpdate,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 43
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 23
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }
      }, "\uC2E0\uACE0")),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }))],
    title: post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      post: post,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 22
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: post.Retweet.Images,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 48
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      float: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).format('YYYY.MM.DD')), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/user/${post.Retweet.User.id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 24
      }
    }, post.Retweet.User.nickname[0]))),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      postData: post.Retweet.content,
      onCancelUpdate: onCancelUpdate,
      onChangePost: onChangePost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      float: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).format('YYYY.MM.DD')), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/user/${post.User.id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 24
      }
    }, post.User.nickname[0]))),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onCancelUpdate: onCancelUpdate,
      editMode: editMode,
      postData: post.content,
      onChangePost: onChangePost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 30
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }))), commentFormOpened && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: `${post.Comments.length}개의 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: item => __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: `/user/${item.User.id}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 24
        }
      }, item.User.nickname[0]))),
      content: item.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  })));
}

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].object,
    UserId: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5__["PropTypes"].any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\PostCardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_2__["Input"];

function PostCardContent({
  postData,
  editMode,
  onChangePost,
  onCancelUpdate
}) {
  const {
    modifyPostLoading,
    modifyPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const {
    0: editText,
    1: setEditText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(postData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (modifyPostDone) {
      onCancelUpdate();
    }
  }, [modifyPostDone]);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setEditText(e.target.value);
  });
  return (// 첫 번째 게시글 #해시태그 #해시태그
    __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, editMode ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(TextArea, {
      value: editText,
      onChange: onChangeText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      loading: modifyPostLoading,
      onClick: onChangePost(editText),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "danger",
      onClick: onCancelUpdate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, "\uCDE8\uC18C"))) : postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: `/hashtag/${v.slice(1)}`,
          prefetch: false,
          key: i,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 20
          }
        }, __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 83
          }
        }, v));
      }

      return v;
    }))
  );
}

PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onChangePost: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onCancelUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
PostCardContent.defaultProps = {
  editMode: false
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\components\\PostImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PostImages({
  images
}) {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presantation",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 28
      }
    }));
  }

  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presantation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }), __jsx("img", {
      role: "presantation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: `http://localhost:3065/${images[1].src}`,
      alt: images[1].src,
      onClick: onZoom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 28
      }
    }));
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("img", {
    role: "presantation",
    style: {
      width: '50%',
      display: 'inline-block'
    },
    src: `http://localhost:3065/${images[0].src}`,
    alt: images[0].src,
    onClick: onZoom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 26
    }
  }), __jsx("div", {
    role: "presentation",
    style: {
      display: 'inline-block',
      width: '50%',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    onClick: onZoom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"));
}

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = (initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
var _jsxFileName = "C:\\study\\react-Thewitter\\prepare\\front\\pages\\user\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function User() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    mainPosts,
    hasMorePost,
    loadPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const {
    userInfo,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_POSTS_REQUEST"],
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length, hasMorePost, id, loadPostLoading]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, userInfo && __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, userInfo.nickname, "\uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: `${userInfo.nickname}님의 게시글`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:title",
    content: `${userInfo.nickname}님의 게시글`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: `${userInfo.nickname}님의 게시글`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://nodebird.com/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:url",
    content: `https://nodebird.com/user/${id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  })), userInfo && userInfo.id !== (me === null || me === void 0 ? void 0 : me.id) ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      marginBottom: 30
    },
    actions: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: `/user/${userInfo.id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("div", {
      key: "twit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "\uB354\uC717", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }), userInfo.Posts)), __jsx("div", {
      key: "following",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }), userInfo.Followings), __jsx("div", {
      key: "follower",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }), userInfo.Followers)],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: `/user/${userInfo.id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 59
      }
    }, userInfo.nickname[0])),
    title: userInfo.nickname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })) : null, mainPosts.map(c => __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: c.id,
    post: c,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })));
}

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_11__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_POSTS_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOAD_USER_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./public/bell.png":
/*!*************************!*\
  !*** ./public/bell.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bell-e70e9208640fb931ec4fde209ac7e66d.png";

/***/ }),

/***/ "./public/bookmark.png":
/*!*****************************!*\
  !*** ./public/bookmark.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/clipboard.png":
/*!******************************!*\
  !*** ./public/clipboard.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/clipboard-63bf270ce06c27f992c1224596a9cb4c.png";

/***/ }),

/***/ "./public/email.png":
/*!**************************!*\
  !*** ./public/email.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/email-7d36597b268782ff557faa2cc552a704.png";

/***/ }),

/***/ "./public/favicon.png":
/*!****************************!*\
  !*** ./public/favicon.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-907209d8c0a2dee2c01bfa92eb092920.png";

/***/ }),

/***/ "./public/home2.png":
/*!**************************!*\
  !*** ./public/home2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home2-64e45eddc4c21aac01b6d1bc0a3f648c.png";

/***/ }),

/***/ "./public/logout.png":
/*!***************************!*\
  !*** ./public/logout.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/more.png":
/*!*************************!*\
  !*** ./public/more.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/more-1f7307cacfeff80a4da237029f54abf4.png";

/***/ }),

/***/ "./public/search.png":
/*!***************************!*\
  !*** ./public/search.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/search-ed97a9c568ae77c909b40552bf5b5181.png";

/***/ }),

/***/ "./public/user.png":
/*!*************************!*\
  !*** ./public/user.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/user-61637315e740810e35de504c08f63127.png";

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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2JlbGwucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9ib29rbWFyay5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NsaXBib2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VtYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZmF2aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2hvbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbG9nb3V0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9yZS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3VzZXIucG5nIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTaWRlYmFySW1nIiwic3R5bGVkIiwiaW1nIiwiU2lkZWJhclVsIiwidWwiLCJTaWRlYmFyTGkiLCJsaSIsIlNpZGViYXJEaXYiLCJkaXYiLCJMZWZ0U2lkZWJhciIsIk5hdmJhciIsIlJpZ2h0U2lkZWJhciIsIlNlYXJjaElucHV0IiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInNlYXJjaElucHV0Iiwib25DaGFuZ2VTZWFyY2hJbnB1dCIsInVzZUlucHV0IiwibWUiLCJsb2dPdXRMb2FkaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJwb3NpdGlvbiIsImljb24xIiwiaWNvbjIiLCJpY29uMyIsImljb241IiwiaWNvbjYiLCJpY29uNyIsImljb244IiwiaWNvbjkiLCJpY29uMTAiLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImlkIiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRMb2FkaW5nIiwidXNlRWZmZWN0Iiwib25TdWJtaXRDb21tZW50IiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIiwib2JqZWN0IiwiRm9sbG93QnV0dG9uIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwic2xpZGUiLCJtYXAiLCJzcmMiLCJsZW5ndGgiLCJhcnJheU9mIiwiZnVuYyIsIk92ZXJsYXkiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDbG9zZUJ0biIsIkNsb3NlT3V0bGluZWQiLCJtb21lbnQiLCJsb2NhbGUiLCJQb3N0Q2FyZCIsInJlbW92ZVBvc3RMb2FkaW5nIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJsaWtlZCIsIkxpa2VycyIsIm9uTGlrZSIsImFsZXJ0IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIm9uQ2hhbmdlUG9zdCIsImVkaXRUZXh0IiwiTU9ESUZZX1BPU1RfUkVRVUVTVCIsIlBvc3RJZCIsIm9uQ2xpY2tVcGRhdGUiLCJvbkNhbmNlbFVwZGF0ZSIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlJldHdlZXRJZCIsIm5pY2tuYW1lIiwiUmV0d2VldCIsImZsb2F0IiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiQ29tbWVudHMiLCJpdGVtIiwic2hhcGUiLCJudW1iZXIiLCJVc2VySWQiLCJzdHJpbmciLCJvYmplY3RPZiIsImFueSIsIlRleHRBcmVhIiwiUG9zdENhcmRDb250ZW50IiwicG9zdERhdGEiLCJtb2RpZnlQb3N0TG9hZGluZyIsIm1vZGlmeVBvc3REb25lIiwic2V0RWRpdFRleHQiLCJvbkNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpdCIsImkiLCJtYXRjaCIsInNsaWNlIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIlBvc3RJbWFnZXMiLCJzaG93SW1hZ2VzWm9vbSIsInNldFNob3dJbWFnZXNab29tIiwib25ab29tIiwid2lkdGgiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwidXNlUm91dGVyIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJ1c2VySW5mbyIsIm9uU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsImxhc3RJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9zdHMiLCJGb2xsb3dlcnMiLCJjIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInN0b3JlIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwicm9vdFJlZHVjZXIiLCJhY3Rpb24iLCJIWURSQVRFIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImltYWdlUGF0aHMiLCJzaW5nbGVQb3N0IiwicmVUd2VldExvYWRpbmciLCJyZVR3ZWV0RG9uZSIsInJlVHdlZXRFcnJvciIsInVwTG9hZEltYWdlc0xvYWRpbmciLCJ1cExvYWRJbWFnZXNEb25lIiwidXBMb2FkSW1hZ2VzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRTUG9zdExvYWRpbmciLCJsb2FkU1Bvc3REb25lIiwibG9hZFNQb3N0RXJyb3IiLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFVzZXJQb3N0c0xvYWRpbmciLCJsb2FkVXNlclBvc3RzRG9uZSIsImxvYWRVc2VyUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIm1vZGlmeVBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsIk1PRElGWV9QT1NUX1NVQ0NFU1MiLCJNT0RJRllfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCIsIkxPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfTElLRURfUE9TVFNfUkVRVUVTVCIsIkxPQURfTElLRURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfTElLRURfUE9TVFNfRkFJTFVSRSIsIkxPQURfU1BPU1RfUkVRVUVTVCIsIkxPQURfU1BPU1RfU1VDQ0VTUyIsIkxPQURfU1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJhZGRQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwiY29uY2F0IiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkVXNlcnNMb2FkaW5nIiwibG9hZFVzZXJzRG9uZSIsImxvYWRVc2Vyc0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInVzZXJzSW5mbyIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJjYWxsIiwicHV0IiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJsb2FkU1Bvc3RBUEkiLCJsb2FkU1Bvc3QiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJyZVR3ZWV0QVBJIiwicmVUd2VldCIsImxvYWRVc2VyUG9zdHNBUEkiLCJsb2FkVXNlclBvc3RzIiwiUmVsYXRlZFBvc3RBUEkiLCJSZWxhdGVkUG9zdCIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZExpa2VkUG9zdHNBUEkiLCJsb2FkTGlrZWRQb3N0cyIsIm1vZGlmeVBvc3RBUEkiLCJtb2RpZnlQb3N0Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3QiLCJ0aHJvdHRsZSIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoUmV0d2VldCIsIndhdGNoTG9hZFNQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hNb2RpZnlQb3N0Iiwid2F0Y2hMb2FkUmVsYXRlZFBvc3QiLCJ3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9hZFVzZXJzQVBJIiwibG9hZFVzZXJzIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsIlNpZ25VcEFQSSIsInNpZ25VcCIsIkZvbGxvd0FQSSIsImZvbGxvdyIsIlVuRm9sbG93QVBJIiwidW5mb2xsb3ciLCJDaGFuZ2VOaWNrTmFtZUFQSSIsImNoYW5nZU5pY2tOYW1lIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwicmVtb3ZlRm9sbG93ZXJzQVBJIiwicmVtb3ZlRm9sbG93ZXJzIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaENoYW5nZW5pY2tOYW1lIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaExvYWRVc2VySW5mbyIsIndhdGNoTG9hZFVzZXJzSW5mbyIsImxvZ2dlck1pZGRsZXdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FB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LE9BQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJZTdRLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3VzZXIvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlci9baWRdLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgaWNvbjEgZnJvbSAnLi4vcHVibGljL2Zhdmljb24ucG5nJztcclxuaW1wb3J0IGljb24yIGZyb20gJy4uL3B1YmxpYy9ob21lMi5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi4vcHVibGljL3NlYXJjaC5wbmcnO1xyXG5pbXBvcnQgaWNvbjQgZnJvbSAnLi4vcHVibGljL2Jvb2ttYXJrLnBuZyc7XHJcbmltcG9ydCBpY29uNSBmcm9tICcuLi9wdWJsaWMvY2xpcGJvYXJkLnBuZyc7XHJcbmltcG9ydCBpY29uNiBmcm9tICcuLi9wdWJsaWMvdXNlci5wbmcnO1xyXG5pbXBvcnQgaWNvbjcgZnJvbSAnLi4vcHVibGljL2JlbGwucG5nJztcclxuaW1wb3J0IGljb244IGZyb20gJy4uL3B1YmxpYy9lbWFpbC5wbmcnO1xyXG5pbXBvcnQgaWNvbjkgZnJvbSAnLi4vcHVibGljL21vcmUucG5nJztcclxuaW1wb3J0IGljb24xMCBmcm9tICcuLi9wdWJsaWMvbG9nb3V0LnBuZyc7XHJcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IFNpZGViYXJJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHJvbGU6IHByZXNhbnRhdGlvbjtcclxuYDtcclxuXHJcbmNvbnN0IFNpZGViYXJVbCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6YmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlYmFyTGkgPSBzdHlsZWQubGlgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICB9XHJcbiAgY29sb3I6YmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlYmFyRGl2ID0gc3R5bGVkLmRpdmBcclxuICBsZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTUwMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgTGVmdFNpZGViYXIgPSBzdHlsZWQuZGl2YCBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjNmNWZhMTU7XHJcbiAgcGFkZGluZzogMHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2YmFyID0gc3R5bGVkLmRpdmAgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDI5JTtcclxuICB3aWR0aDogMTgwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmM2Y1ZmExNTtcclxuICBwYWRkaW5nOiAwcHggMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbmA7XHJcblxyXG5jb25zdCBSaWdodFNpZGViYXIgPSBzdHlsZWQuZGl2YCBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjNmNWZhMTU7XHJcbiAgcGFkZGluZzogMHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQXBwTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgeyBtZSwgbG9nT3V0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBjb25zdCBjb25zdCB7aXNMb2dnZWRJbn0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICA8TmF2YmFyPlxyXG4gICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+PGgyPu2ZiDwvaDI+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICB7LyogPE1lbnUuSXRlbT4gKi99XHJcbiAgICAgICAgICAgIHsvKiAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj4gKi99XHJcbiAgICAgICAgICAgIHsvKiAgICA8YT7tmozsm5DqsIDsnoU8L2E+ICovfVxyXG4gICAgICAgICAgICB7LyogIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8L01lbnUuSXRlbT4gKi99XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMZWZ0U2lkZWJhcj5cclxuICAgICAgICAgICAgPFNpZGViYXJEaXY+XHJcbiAgICAgICAgICAgICAgPFNpZGViYXJVbD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJJbWcgc3JjPXtpY29uMX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyTGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFySW1nIHNyYz17aWNvbjJ9IC8+PGE+IO2ZiDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyTGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlbGF0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckltZyBzcmM9e2ljb24zfSAvPjxhPiDtg5Dsg4ntlZjquLA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvbGlrZWQvJHttZS5pZH1gfT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFNpZGViYXJMaT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogICA8U2lkZWJhckltZyBzcmM9e2ljb240fSAvPjxhPiDrtoHrp4jtgaw8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDwvU2lkZWJhckxpPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIOydtOu2gOu2hOydtCDrsoTqt7jqsIAg7IOd6riw6rOgIOyeiOyWtCDtmozsm5DqsIDsnoXsnbQg7YSw7KC47IScIOydvOuLqCDruYTtmZzshLHtmZQg7ZaI7Iq164uI64ukLiAqL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFySW1nIHNyYz17aWNvbjV9IC8+PGE+IOumrOyKpO2KuDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyTGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckltZyBzcmM9e2ljb242fSAvPjxhPiDtlITroZztlYQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckltZyBzcmM9e2ljb243fSAvPjxhPiDslYzrprw8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckltZyBzcmM9e2ljb244fSAvPjxhPiDsqr3sp4A8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckltZyBzcmM9e2ljb245fSAvPjxhPiDrjZTrs7TquLA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2lkZWJhckxpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgPHA+PGJyIC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlYmFyTGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uTG9nT3V0fT5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckltZyBzcmM9e2ljb24xMH0gLz48YT4g66Gc6re47JWE7JuDPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L1NpZGViYXJMaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU2lkZWJhclVsPlxyXG4gICAgICAgICAgICA8L1NpZGViYXJEaXY+XHJcbiAgICAgICAgICA8L0xlZnRTaWRlYmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UmlnaHRTaWRlYmFyPlxyXG4gICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICBlbnRlckJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1JpZ2h0U2lkZWJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAsIHpJbmRleDogNSB9fT5cclxuICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezd9IC8+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezExfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9IC8+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudEZvcm0oeyBwb3N0IH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCB7IGFkZENvbW1lbnREb25lLCBhZGRDb21tZW50TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xyXG4gICAgICBzZXRDb21tZW50VGV4dCgnJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FkZENvbW1lbnREb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH0sXHJcbiAgICB9KTtcclxuICB9LCBbY29tbWVudFRleHQsIGlkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSByb3dzPXs0fSAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMSB9fVxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgbG9hZGluZz17YWRkQ29tbWVudExvYWRpbmd9XHJcbiAgICAgICAgPuyCkOyVvVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gRm9sbG93QnV0dG9uKHsgcG9zdCB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gIGlmIChwb3N0LlVzZXIuaWQgPT09IG1lLmlkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJyB9XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgeyBDbG9zZUJ0biwgR2xvYmFsLCBIZWFkZXIsIEltZ1dyYXBwZXIsIEluZGljYXRvciwgT3ZlcmxheSwgU2xpY2tXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VzWm9vbSh7IGltYWdlcywgb25DbG9zZSB9KSB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3ZlcmxheT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdG4+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cclxuICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgYXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIHNsaWRlVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Yuc3JjfWB9IGFsdD17di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICA8SW5kaWNhdG9yPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50U2xpZGUgKyAxfVxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgIDwvT3ZlcmxheT5cclxuICApO1xyXG59XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHotaW5kZXg6NTAwMDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIGJvdHRvbTowO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgICBoZWFkZXI6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICYgaDF7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gICAgY29sb3I6IzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICByaWdodDowO1xyXG4gICAgICB0b3A6MDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xyXG4gICAgYmFja2dyb3VuZDogIzA5MDkwOTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICYgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3NTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAmID4gZGl2IHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0IDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDojMzEzMTMxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZUJ0biA9IHN0eWxlZChDbG9zZU91dGxpbmVkKWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgUG9wb3ZlciwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgTWVzc2FnZU91dGxpbmVkLCBSZXR3ZWV0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IHsgTElLRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCwgTU9ESUZZX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuXHJcbm1vbWVudC5sb2NhbGUoJ2tvJyk7XHJcblxyXG5mdW5jdGlvbiBQb3N0Q2FyZCh7IHBvc3QgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XHJcblxyXG4gIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUG9zdCA9IHVzZUNhbGxiYWNrKChlZGl0VGV4dCkgPT4gKCkgPT4gZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTU9ESUZZX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgUG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICBjb250ZW50OiBlZGl0VGV4dCxcclxuICAgIH0sXHJcbiAgfSksIFtwb3N0XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kZSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2FuY2VsVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgPENhcmRcclxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcblxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIG9uQ2xpY2s9e29uUmV0d2VldH0gLz4sXHJcbiAgICAgICAgICBsaWtlZFxyXG4gICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbmxpa2V9IC8+XHJcbiAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkXHJcbiAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IXBvc3QuUmV0d2VldElkICYmIDxCdXR0b24gb25DbGljaz17b25DbGlja1VwZGF0ZX0+7IiY7KCVPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXRJZCA/IGAke3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyXIO2VmOyFqOyKteuLiOuLpC5gIDogbnVsbH1cclxuICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgPlxyXG5cclxuICAgICAgICB7cG9zdC5SZXR3ZWV0SWQgJiYgcG9zdC5SZXR3ZWV0XHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5SZXR3ZWV0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuUmV0d2VldC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVkuTU0uREQnKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5SZXR3ZWV0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fSBvbkNhbmNlbFVwZGF0ZT17b25DYW5jZWxVcGRhdGV9IG9uQ2hhbmdlUG9zdD17b25DaGFuZ2VQb3N0fSAvPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19Pnttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZvcm1hdCgnWVlZWS5NTS5ERCcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgb25DYW5jZWxVcGRhdGU9e29uQ2FuY2VsVXBkYXRlfSBlZGl0TW9kZT17ZWRpdE1vZGV9IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IG9uQ2hhbmdlUG9zdD17b25DaGFuZ2VQb3N0fSAvPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtpdGVtLlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxDb21tZW50Rm9ybS8+ICovfVxyXG4gICAgICB7LyogPENvbW1lbnRzLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIFVzZXJJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5mdW5jdGlvbiBQb3N0Q2FyZENvbnRlbnQoeyBwb3N0RGF0YSwgZWRpdE1vZGUsIG9uQ2hhbmdlUG9zdCwgb25DYW5jZWxVcGRhdGUgfSkge1xyXG4gIGNvbnN0IHsgbW9kaWZ5UG9zdExvYWRpbmcsIG1vZGlmeVBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtlZGl0VGV4dCwgc2V0RWRpdFRleHRdID0gdXNlU3RhdGUocG9zdERhdGEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1vZGlmeVBvc3REb25lKSB7XHJcbiAgICAgIG9uQ2FuY2VsVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfSwgW21vZGlmeVBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRFZGl0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoIC8vIOyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+2VtOyLnO2DnOq3uFxyXG4gICAgPGRpdj5cclxuICAgICAge2VkaXRNb2RlXHJcbiAgICAgICAgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgdmFsdWU9e2VkaXRUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bW9kaWZ5UG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uQ2hhbmdlUG9zdChlZGl0VGV4dCl9PuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9e29uQ2FuY2VsVXBkYXRlfT7st6jshow8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgICAgOiBwb3N0RGF0YS5zcGxpdCgvKCNbXlxccyNdKykvZykubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICBpZiAodi5tYXRjaCgvKCNbXlxccyNdKykvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfSBwcmVmZXRjaD17ZmFsc2V9IGtleT17aX0+PGE+e3Z9PC9hPjwvTGluaz47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdERhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlZGl0TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25DaGFuZ2VQb3N0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2FuY2VsVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuUG9zdENhcmRDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuICBlZGl0TW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gJy4vSW1hZ2VzWm9vbSc7XHJcblxyXG5mdW5jdGlvbiBQb3N0SW1hZ2VzKHsgaW1hZ2VzIH0pIHtcclxuICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dJbWFnZXNab29tKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNhbnRhdGlvblwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzYW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgPGltZyByb2xlPVwicHJlc2FudGF0aW9uXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nIHJvbGU9XCJwcmVzYW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICc1MCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgPlxyXG4gICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAg6rCc7J2YIOyCrOynhCDrjZTrs7TquLBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xyXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gVXNlcigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlckluZm8sIG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBsYXN0SWQ6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0gJiYgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0LCBpZCwgbG9hZFBvc3RMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7dXNlckluZm8gJiYgKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICB7dXNlckluZm8ubmlja25hbWV9XHJcbiAgICAgICAgICAgIOuLmOydmCDquIBcclxuICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vdXNlci8ke2lkfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlckluZm8gJiYgKHVzZXJJbmZvLmlkICE9PSBtZT8uaWQpXHJcbiAgICAgICAgPyAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHt1c2VySW5mby5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPlxyXG4gICAgICAgICAgICAgICAgICDrjZTsnJdcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VySW5mby5Qb3N0c31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz4sXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdcIj5cclxuICAgICAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlckluZm8uRm9sbG93aW5nc31cclxuICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlclwiPlxyXG4gICAgICAgICAgICAgICAg7YyU66Gc7JuMXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHt1c2VySW5mby5Gb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgYXZhdGFyPXs8TGluayBocmVmPXtgL3VzZXIvJHt1c2VySW5mby5pZH1gfT48QXZhdGFyPnt1c2VySW5mby5uaWNrbmFtZVswXX08L0F2YXRhcj48L0xpbms+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e2MuaWR9IHBvc3Q9e2N9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmVsbC1lNzBlOTIwODY0MGZiOTMxZWM0ZmRlMjA5YWM3ZTY2ZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQ0FZQUFBRDBlTlQ2QUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFPeEFBQURzUUJsU3NPR3dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFCSS9TVVJCVkhpYzdkeExxRzduUWNieEo1ZHFxN1RHUVdOYlZFVFJRYlV0RWtGMEltblRWT25BNHNUTG9BNms2RlNVZ0ZBS3FTTUZSWnlJNHR5aEZyeGdoSXdFeGFacW01YW1uYWtnbHFLazJ0S1dsTWJCUGgrNW5jdStmR3U5NjMyZjN3OFdnY05oNTExbmI3N24vNjE5OXJrdlBkNlo1R2VUdkR2SkR5WDV6aVJ2R0hvaUFFYjdhcEwvU2ZMNUpFOG4rVmlTWjRlZWFDZjNqVDdBeHU1UDhrdEpQcExrQndlZkJZQTVmRDdKUjVQOFdaSnZEajdMWmxZT2dCOVA4c2RKM2pYNklBQk02VitTL0dxU2o0OCt5QlllR0gyQWpmeENrajlQOHQyakR3TEF0TjZhNUlOSi9pUEpKd2VmNWV4V0RJRGZTdkpIU1Y0MytpQUFUTy9CSkI5STh2VWtmei80TEdlMVdnRDhYQzRlKzYvOHJRMEE5dmVlSk04bCtjem9nNXpMU2tQNWppVC9tT1RiUmg4RWdDVjlKUmQvdjJ5SkNMaC85QUhPNlBkai9BSFl6cmNuK2IzUmh6aVhWUUxnOFNTUGpUNEVBTXQ3WHhiWm0xVUM0RGRISHdDQUdrdHN6Z3AvQitDaEpGOUk4aTJqRHdKQWhSZVNQSnprK2RFSHVZa1ZuZ0M4UDhZZmdQMjhMc2xQano3RVRhMFFBRDg1K2dBQTFKbCtlMVlJZ084ZmZRQUE2dnpBNkFQYzFBb0I4QjJqRHdCQW5ZZEdIK0NtVmdnQTMvOEhZRy9mT3ZvQU43VkNBQUFBVnlRQUFLQ1FBQUNBUWdJQUFBb0pBQUFvSkFBQW9KQUFBSUJDQWdBQUNna0FBQ2drQUFDZ2tBQUFnRUlDQUFBS0NRQUFLQ1FBQUtEUWc2TVBNTEVmUy9LSjBZY0FLUGRJa21kR0gySkduZ0FBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVUVBQUFVRWdBQVVFZ0FBRUFoQVFBQWhRUUFBQlFTQUFCUVNBQUFRQ0VCQUFDRkJBQUFGQklBQUZCSUFBQkFJUUVBQUlVRUFBQVVFZ0FBVUVnQUFFQWhBUUFBaFFRQUFCUVNBQUJRU0FBQVFDRUJBQUNGQkFBQUZCSUFBRkJJQUFCQUlRRUFBSVVFQUFBVUVnQUFVRWdBQUVBaEFRQUFoUVFBQUJRU0FBQlFTQUFBUUNFQkFBQ0ZCQUFBRkJJQUFGQklBQUJBSVFFQUFJVWVISDBBWURjUEpYbGZrcDlJOGwxSjNuYnIxLzh6eVJlUy9FT1N2MDN5L0pEVEFWelJNMGxlSEhBOXNzZk53Ums4bXVUdmtyeVFlMzlkdjNEcjl6NDY1S1J3ZFk5a3pBWThzOGZOYmNtM0FHQmQ3MGp5VkpLbmt6eVd5ejN4ZS9EVzczMDZGMDhEZm1TejB3RkRDUUJZMDRlUy9GT1M5OTdnWXp5ZTVPTkpmdVVzSndJT1JRREFlajZTNUUrU3ZQNE1IK3YxU2Y3MDFzY0VGaUlBWUMxUDNycTIrTGkvczhISEJRWVJBTENPSjdQdE8vVW5JZ0pnR1FJQTFyRDErSitJQUZpRUFJRDU3VFgrSnlJQUZpQUFZRzU3ai8rSkNJREpDUUNZMTZqeFB4RUJNREVCQUhNYVBmNG5JZ0FtSlFCZ1BrY1oveE1SQUJNU0FEQ1hvNDMvaVFpQXlRZ0FtTWRSeC85RUJNQkVCQURNNGVqamZ5SUNZQklDQUk1dmx2RS9FUUV3QVFFQXh6YmIrSitJQURnNEFRREhOZXY0bjRnQU9EQUJBTWMwKy9pZmlBQTRLQUVBeDdQSytKK0lBRGdnQVFESHN0cjRuNGdBT0JnQkFNZXg2dmlmaUFBNEVBRUF4N0Q2K0orSUFEZ0lBUURqdFl6L2lRaUFBeEFBTUZiYitKK0lBQmhNQU1BNHJlTi9JZ0pnSUFFQVk3U1AvNGtJZ0VFRUFPelArTCtTQ0lBQkJBRHN5L2pmbmdpQW5Ra0EySS94dnpzUkFEc1NBTEFQNDM4NUlnQjJJZ0JnZThiL2FrUUE3RUFBd0xhTS8vV0lBTmlZQUlEdEdQK2JFUUd3SVFFQTJ6RCs1eUVDWUNNQ0FNN3Z0elBIK0gvNjFuVjBUK1RpenhRNEl3RUE1L1Zra2crUFBzUWxQSmZrdlVuZW5lVFp3V2U1akEvSGt3RGdWWjVKOHVLQTY1RTlibzZwUEpreFg0dFh2VDZiNUMwdk8vZWJrM3pxQU9lNnpDVUNlTFZITXVacjhaazlibzY3RXdBY3dhempmeUlDbUpVQUtDWUFHRzMyOFQ4UkFjeElBQlFUQUl5MHl2aWZpQUJtSXdDS0NRQkdXVzM4VDBRQU14RUF4UVFBSTZ3Ni9pY2lnRmtJZ0dJQ2dMMnRQdjRuSW9BWkNJQmlBb0E5dFl6L2lRamc2QVJBTVFIQVh0ckcvMFFFY0dRQ29KZ0FZQSt0NDM4aUFqZ3FBVkJNQUxDMTl2RS9FUUVja1FBb0pnRFlrdkYvSlJIQTBRaUFZZ0tBclJqLzJ4TUJISWtBS0NZQTJJTHh2enNSd0ZFSWdHSUNnSE16L3BjakFqZ0NBVkJNQUhCT3h2OXFSQUNqQ1lCaUFvQnpNZjdYSXdJWVNRQVVFd0NjZy9HL0dSSEFLQUtnbUFEZ3Bvei9lWWdBUmhBQXhRUUFOMkg4ejBzRXNEY0JVRXdBY0YzR2Z4c2lnRDBKZ0dJQ2dPc3cvdHNTQWV4RkFCUVRBRnlWOGQrSENHQVBBcUNZQU9BcWpQKytSQUJiRXdERkJBQ1haZnpIRUFGc1NRQVVFd0JjaHZFZlN3U3dGUUZRVEFCd0w4Yi9HRVFBV3hBQXhRUUFkMlA4ajBVRWNHNENvSmdBNEU2TS96R0pBTTVKQUJRVEFOeU84VDgyRWNDNUNJQmlBb0JYTS81ekVBR2Nnd0FvSmdCNE9lTS9GeEhBVFFtQVlnS0FFK00vSnhIQVRRaUFZZ0tBeFBqUFRnUndYUUtnbUFEQStLOUJCSEFkQXFDWUFPaG0vTmNpQXJncUFWQk1BUFF5L21zU0FWeUZBQ2dtQURvWi83V0pBQzVMQUJRVEFIMk1md2NSd0dVSWdHSUNvSXZ4N3lJQ3VCY0JVRXdBOUREK25VUUFkeU1BaWdtQURzYS9td2pnVGdSQU1RR3dQdU5QSWdLNFBRRlFUQUNzemZqemNpS0FWeE1BeFFUQXVvdy90eU1DZURrQlVFd0FyTW40Y3pjaWdCTUJVRXdBck1mNGN4a2lnRVFBVkJNQWF6SCtYSVVJUUFBVUV3RHJNUDVjaHdqb0pnQ0tDWUExR0g5dVFnVDBFZ0RGQk1EOGpEL25JQUk2Q1lCaUFtQnVIODM0RitQTFhNWi9Eak5Gd085dTlHZlFSZ0FVRXdEek12NXNRUVIwRVFERkJNQ2NqRDliRWdFOUJFQXhBVEFmNDg4ZVJFQUhBVkJNQU16RitMTW5FYkErQVZCTUFNekQrRE9DQ0ZpYkFDZ21BT1pnL0JsSkJLeExBQlFUQU1kbi9Ea0NFYkFtQVZCTUFCeWI4ZWRJUk1CNkJFQXhBWEJjeHA4akVnRnJFUURGQk1BeEdYK09UQVNzUXdBVUV3REhZL3laZ1FoWWd3QW9KZ0NPeGZnekV4RXdQd0ZRVEFBY2gvRm5SaUpnYmdLZ21BQTRCdVBQekVUQXZBUkFNUUV3bnZGbkJTSmdUZ0tnbUFBWXkvaXpFaEV3SHdGUVRBQ01ZL3haa1FpWWl3QW9KZ0RHTVA2c1RBVE1Rd0FVRXdEN00vNDBFQUZ6RUFERkJNQytqRDlOUk1EeENZQmlBbUEveHA5R0l1RFlCRUF4QWJBUDQwOHpFWEJjQXFDWUFOaWU4UWNSY0ZRQ29KZ0EySmJ4aDVlSWdPTVJBTVVFd0hhTVA3eVdDRGdXQVZCTUFHekQrTU9kaVlEakVBREZCTUQ1R1grNE54RndEQUtnbUFBNEwrTVBseWNDeGhNQXhRVEErUmgvdURvUk1KWUFLQ1lBenNQNHcvV0pnSEVFUURFQmNIUEdIMjVPQkl3aEFJb0pnSnN4L25BK0ltQi9BcUNZQUxnKzR3L25Kd0wySlFDS0NZRHJNZjZ3SFJHd0h3RlFUQUJjbmZHSDdZbUFmUWlBWWdMZ2Fvdy83RWNFYkU4QUZCTUFsMmY4WVg4aVlGc0NvSmdBdUJ6akQrT0lnTzBJZ0dJQzRONk1QNHduQXJZaEFJb0pnTHN6L25BY0l1RDhCRUF4QVhCbnhoK09Sd1NjbHdBb0pnQnV6L2pEY1ltQTh4RUF4UVRBYXhsL09ENFJjQjRDb0pnQWVDWGpEL01RQVRjbkFJb0pnSmNZZjVpUENMZ1pBVkJNQUZ3dy9qQXZFWEI5QXFDWUFERCtzQUlSY0QwQ29GaDdBQmgvV0ljSXVEb0JVS3c1QUl3L3JFY0VYSTBBS05ZYUFNWWYxaVVDTGs4QUZHc01BT01QNnhNQmx5TUFpclVGZ1BHSEhpTGczZ1JBc2FZQU1QN1FSd1RjblFBbzFoSUF4aDk2aVlBN0V3REZHZ0xBK0FNaTRQWUVRTEhWQThENEF5Y2k0TFVFUUxHVkE4RDRBNjhtQWw1SkFCUmJOUUNNUDNBbkl1QWxBcURZaWdGZy9JRjdFUUVYQkVDeDFRTEErQU9YSlFJRVFMV1ZBc0Q0QTFmVkhnRUNvTmdxQVdEOGdldHFqZ0FCVUd5RkFERCt3RTIxUm9BQUtEWjdBQmgvNEZ3YUkwQUFGSnM1QUl3L2NHNXRFU0FBaXMwYUFNWWYyRXBUQkFpQVlqTUdnUEVIdHRZU0FRS2cyR3dCWVB5QnZUUkVnQUFvTmxNQUdIOWdiNnRIZ0FBb05rc0FHSDlnbEpValFBQVVteUVBakQ4dzJxb1JJQUNLSFQwQWpEOXdGQ3RHZ0FBb2R1UUFNUDdBMGF3V0FRS2cyRkVEd1BnRFI3VlNCQWlBWWtjTUFPTVBITjBxRVNBQWloMHRBSXcvTUlzVklrQUFGRHRTQUJoL1lEYXpSNEFBS0hhVUFERCt3S3htamdBQlVPd0lBV0Q4Z2RuTkdnRUNvTmpvQUREK3dDcG1qQUFCVUd4a0FCaC9ZRFd6UllBQUtEWXFBRDQyNlA5NzFldlpKQTlmKzA4WGFQUndMbDQ3UnI5K0hmbTFXQUFjd0tnQW1PSHl6aCs0cnBtZUJJeTRwZytBKzBjZmdNMDhsK1RSSlA4MStpREFsTDZZNUQyNWVCTEFnZ1RBbW93L2NBNGlZR0VDWUQzR0h6Z25FYkFvQWJBVzR3OXNRUVFzU0FDc3cvZ0RXeElCaXhFQWF6RCt3QjVFd0VJRXdQeU1QN0FuRWJBSUFUQTM0dytNSUFJV0lBRG1aZnlCa1VUQTVBVEFuSXcvY0FRaVlHSUNZRDdHSHpnU0VUQXBBVEFYNHc4Y2tRaVlrQUNZaC9FSGprd0VURVlBek1INEF6TVFBUk1SQU1kbi9JR1ppSUJKQ0lCak0vN0FqRVRBQkFUQWNSbC9ZR1lpNE9BRXdERVpmMkFGSXVEQUJNRHhHSDlnSlNMZ29BVEFzUmgvWUVVaTRJQUV3SEVZZjJCbEl1QmdCTUF4R0grZ2dRZzRFQUV3bnZFSG1vaUFneEFBWXhsL29KRUlPQUFCTUk3eEI1cUpnTUVFd0JqR0gwQUVEQ1VBOW1mOEFWNGlBZ1lSQVBzeS9nQ3ZKUUlHRUFEN01mNEFkeVlDZGlZQTltSDhBZTVOQk94SUFHelArQU5jbmdqWWlRRFlsdkVIdURvUnNBTUJzQjNqRDNCOUltQmpBbUFieGgvZzVrVEFoZ1RBK1JsL2dQTVJBUnRaSVFDK092b0FMMlA4QWM3dmlCSHdsZEVIdUtrVkF1Qy9SeC9nRnVNUHNKMmpSY0JSdHVmYVZnaUFmeDk5Z0NTZlR2SlRNZjRBVy9waWtzZHk4Wm83MmhHMnA5NHZKbmx4NFBYWkpHL1ovQzRCT0hsemtrOWw3R3YvejI5K2w5elQyNUo4STJPK0FKNU44dkQydHdqQXF6eWNpOWZnRWEvOTMwankxdTF2a2N2NDYzam5EOUJtMUpPQXY5emo1cmljOThjN2Y0QkdJNTRFL013dWQ4YWxQUlh2L0FFYTdma2s0T21kN29rcitPRmMvRnltZC80QWZmWjRFdkRsSkcvZjY0YTRtaTEvSXNBN2Y0QmoyL3BKd0FmM3V4V3U0NG1jLzVQK3IvSE9IMkFHRCtmaU5mdWNHL0ROSkwreDUwMXdmYitXNU9zNXp5ZityNUs4Y2QvakEzQURiMHp5TnpuUEJud3R5WWYyUFQ0MzlhTzUrTmVpcnZ0Si83OGt2NTdrZ2IwUERzQ05QWkNMZCsxZnp2VjM0TmtrNzlyNzRKekhnMGwrT2NubmN2bFArSmVTL0VHUzd4bHdYZ0RPNjN1VC9HR1MvODNsZCtCenVmaCsvOUp2QU84YmZZQWRQWkxrQTdmKysvWWtiMHJ5aGlUUEovbTNKSi9NeFk4U1BwV0xkLzhBck9OTlNSNi9kYjB6eWZmZCtyV3Y1U0lPUHBQa0UwbitJc2svanpuaXZ2NGZ2Z3VicityaHMvNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2xpcGJvYXJkLTYzYmYyNzBjZTA2YzI3Zjk5MmMxMjI0NTk2YTljYjRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9lbWFpbC03ZDM2NTk3YjI2ODc4MmZmNTU3ZmFhMmNjNTUyYTcwNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmF2aWNvbi05MDcyMDlkOGMwYTJkZWUyYzAxYmZhOTJlYjA5MjkyMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaG9tZTItNjRlNDVlZGRjNGMyMWFhYzAxYjZkMWJjMGEzZjY0OGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFJQUNBWUFBQUQwZU5UNkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQnp6U1VSQlZIaWM3ZDE3c0c1NVhkLzU5em1udStrR2JCdFJhRUJoUUxBUk1Ba0Nwc1dBSThZeEdZaE9DZ2xqcVNGbzRxQldtNUlwbVNwVDBZbE1xVE15QlFoQkI4cG9TSXpSYU9HTkVoMEVTa2VpMEVSU0lBUlFVR3p1OTdheEwzUWY1bytuTzlYVjZjdlplLy8yL2oxcnJkZXI2bHMwcHkvMVhaLzExSGsrWnoxclArdFVBT3YxcU9wSjFlWFZaZFdEcW50VUY4NWNDZzdwTTlVMTFmdXJkMVJYVnErdDNsQ2RQZWgvN05UUTFRRG11NlQ2enVvZlZWODZkeFU0RVZkVi83YjZsemYvTmNDbVhGVDlVUFdwNnJQR2JIQ3VyMTVTM1R1QWpYaEM5YWZOL3czWW1IMllqMVpQN3k2Y3VhdC9BR0RQUGFkNmVmN1VBN2U0ZS9WTjFhWFZiM1VIOXdlNEJ3QllxbFBWQzZzclppOENlK3lWMVQrby91cTJmME1CQUpicWVkWC9PbnNKV0lCWFZ2OVRkZU90ZjlGSEFNQVNYVkU5ZC9ZU3NCQmZVbjFCdXlMd1h5a0F3Tkk4cHZxRi9QNEZCL0c0NnUzVkg5L3lDejRDQUpia1RMc3ZQL2tic3hlQkJmcFk5ZkIyUHlYUTZibTdBQnpJcy9MbUQ0ZDE3K3AvditYL3VBSUFMTVg1MWJ2YWZaMHZjRGpYVjE5Y3ZjOFZBR0FwbnBZM2Z6aXF1MVhmVXo0Q0FKYmpHYk1YZ0pYNGg5VVpId0VBUzNCeHV4dVl6cHU5Q0t6RTMzUUZBRmlDSitiTkgwWjZrZ0lBTE1Galp5OEFLL01ZQlFCWWdzdG1Md0FyYzVrQ0FDekJwYk1YZ0pXNW53SUFMTUU5Wnk4QUsvTTVDZ0FBYk0vZEZBQmdDYTZadlFDc2pRSUFMTUVIWmk4QWE2TUFBRXZ3enRrTHdOb29BTUFTWERsN0FWZ2JYd1VNTElHdkFvYkJYQUVBbHVEcTZuZG1Md0ZyY21iMkFnRG42S2JxcWJPWGdMWHdFUUN3Rk9kWDc2b2VOSHNSV0FOWEFJQ2xPRnRkWHoxNTlpS3dCcTRBQUV0eXBucGo5ZWpaaThEU3VRa1FXSkticW4vYzdrb0FjQVErQWdDVzVnUFZ4L05SQUJ5SkFnQXMwUnZiUFNIdzhiTVhnYVZTQUlDbGVuVjFTWFg1N0VWZ2lSUUFZTWxlVmYxbDliVzVwd2tPeEU4QkFHdncrT3BucTRkTjNnTVd3eFVBWUEzK29ucFp1NThPK1BMcXdybnJ3UDVUQUlDMXVMSDYzZW9ucTA5VTk2L3VNM1VqMkdNK0FnRFc3RXZiM1I5d2VmWHc2b0h0Zm5yZ29wbEx3VDVRQUFCZ3ZGUHR2cjU2YjdsckZnQTJTQUVBZ0ExU0FBQmdneFFBQU5nZ0JRQUFOa2dCQUlBTlVnQUFZSU1VQUFEWUlBVUFBRFpJQVFDQURWSUFBR0NERkFBQTJDQUZBQUEyU0FFQWdBMVNBQUJnZ3hRQUFOZ2dCUUFBTmtnQkFJQU5VZ0FBWUlNVUFBRFlJQVVBQURaSUFRQ0FEVklBQUdDREZBQUEyQ0FGQUFBMlNBRUFnQTFTQUFCZ2d4UUFBTmdnQlFBQU5rZ0JBSUFOVWdBQVlJTVVBQURZSUFVQUFEWklBUUNBRFZJQUFHQ0RGQUFBMkNBRkFBQTJTQUVBZ0ExU0FBQmdneFFBQU5nZ0JRQUFOa2dCQUlBTlVnQUFZSU1VQUFEWUlBVUFBRFpJQVFDQURWSUFBR0NERkFBQTJDQUZBQUEyU0FFQWdBMVNBQUJnZ3hRQUFOZ2dCUUFBTmtnQkFJQU5VZ0FBWUlNVUFBRFlJQVVBQURaSUFRQ0FEVklBQUdDREZBQUEyQ0FGQUFBMlNBRUFnQTFTQUFCZ2d4UUFBTmdnQlFBQU5rZ0JBSUFOVWdBQVlJTVVBQURZSUFVQUFEWklBUUNBRFZJQUFHQ0RGQUFBMkNBRkFBQTJTQUVBZ0ExU0FBQmdneFFBQU5nZ0JRQUFOdWk4MlFzd3hPbnE4dXEvcng1WFBiUzZmM1h4elgvdms5VUhxbmRVYjZwK3AzcGpkWGJDcmdEQUVUMncrdkhxL2RWbkR6anZyWDZrZXNDSmJ3MndmcWM2K08vTEp6MHMwSDJyLzZmNlRFZC9BVnhYdmFpNjE0a2VBY0M2S1FBTTk2M3RMdW1QZmlGOHFQcW1FendPZ0RWVEFCam1ndXBmZGZ3dmlCZm0zaENBbzFJQUdPSWUxYXM3dVJmRnIxUVhuc2lSQWF5VEFzQ1JYVkM5cXBOL1lmeDZkZVlFamc5Z2pSUUFqdVJVOVcrYTkrSjQwZkVmSXNBcUtRQWN5VDl2L2d2a2FjZCtsQURyb3dCd2FFOXY5MFU5czE4Z0g4bVBDQUljbEFMQW9UeTIrblR6WHh5M3pQT1A5M0FCVmtjQjRNQWVWSDJ3K1MrTVc4OTExYVhIZWRBQUs3UDNCY0REZ1BiTHhkVnZ0UHVtdjMxeXQrcFpzNWNBZ0RVNlUvMWFlOUFLNzJEZTNhN1JBbkRYOXY0S3dQRWRPZ2YxRTgxL01kelZQUHJZamg1Z1hmYStBUGdJWUQvOGsrcUsyVXVjZzYrZXZRQUFZeWdBOC8yZDZpV3psemhIZjNQMkFnQ01vUURNOVlqcTUxdk93M2NlT25zQkFNWlFBT2E1Yi9YSzZwTFppeHpBRjgxZUFJQXhGSUE1THF4ZVVmMTNrL2M0cUl0bUx3REFHQXJBeVR0Vi9VejFsYk1YT1FTdkY0Q1Y4QnY2eWZzWDFmODhlNGxEK3RUc0JRQmdpYjZsL1hqQXoySG5UZU1qQVZnbDN3UEFmL1ZWMVUrMzdHL1RlL3ZzQlFBWVF3RTRHUTlwZDlQZjNXWXZja1N1QUFDc2hBSncvQzZ1ZnJYNmd0bUxEUERhMlFzQXdCS2NhZmQwdittZjlReVk5N1Rzank4QVRwSjdBRGJ1eGRXVFp5OHh5TDl1OTZJQkFPN0U5N1VIRFcvUVhGdmRiMnc4QUt1MjkxY0FqdS9RdCswcDFZM05QN21qNXZsajR3RllQUVZnZ3g1WmZiTDVKM2JVZkxCbFBhOEFZQjhvQUJ0enYrcTl6VCtwbytaczlmZUhKZ1N3RFFyQWh0eTlla1B6VCtqSWVjSFFoQUMyUXdIWWlGUFZ2MnYreVJ3NXI2c3VHSmdSd0pZb0FCdnhJODAva1NQbjdkVzloaVlFc0MwS3dBWThvL2tuY2VSOHRIclkwSVFBdGtjQldMbS9WVjNYL0pNNGFtNm92bVpvUWdEYnBBQ3MySU9yRHpmL0JJNmFzOVczRFUwSVlMc1VnSlc2dUhwcjgwL2V5SG51MElRQXRrMEJXS0h6cTFjMy84U05uRi9La3lFQlJsSUFWdWdubTMvU1JzNlY3YjdEQUlCeEZJQ1YrZjdtbjdDUmMxWDFnS0VKQVZBS3dLbzh1WFU5NE9mcTZxOFBUUWlBV3lnQUsvSG82cHJtbjZ4UmMxUDFEVU1UQXVEV0ZJQVZXTnNEZmo1YmZlL1FoQUM0TFFWZzRTNnEvckQ1SjJua3ZHeG9RZ0RjSGdWZ3dVNVhyMmorQ1JvNXYxV2ROeklrQUc2WEFyQmdQOTc4a3pOeTNsWmRNalFoQU82SUFyQlF6MnoraVJrNUg2a2VPalFoQU82TUFyQkFUNnl1Yi82SkdUWFhWbzhmbWhBQWQwVUJXSmpMcW84My82U01tclBWdHc1TkNJQnpvUUFzeU9kVjcyeitDUms1UHpRMElRRE9sUUt3RU9kWHIybit5Umc1djlqdUJRakF5Vk1BRnVLbHpUOFJJK2NOZWNBUHdFd0t3QUw4UVBOUHdzaDVUM1hmb1FrQmNGQUt3SjU3YXJ2dnhaOTlFa2JOMWRXWERVMElnTU5RQVBiWVkxclhBMzV1cko0eU5DRUFEa3NCMkZQM3I2NXFmdmdqNTN1R0pnVEFVU2dBZStpZTFadWJIL3pJZWNIUWhBQTRLZ1ZnejV5dWZxWDVvWStjMzh3RGZnRDJqUUt3WjU3Zi9NQkh6aDlYbnpzMElRQkdVQUQyeUhjMFAreVI4NEhxZ1VNVEFtQVVCV0JQZkYzMW1lYUhQV3F1clM0Zm1oQUFJeWtBZStEaDFTZWFIL1NvT1Z0OTg5Q0VBQmhOQVpqczN0VzdtaC95eVBtQm9Ra0JjQndVZ0lrdXFGN2IvSUJIenIvUEEzNEFsa0FCbU9SVTlmTG1oenR5ZnErNjI4aVFBRGcyQ3NBa1A5ajhZRWZPdTZ2N0RFMElnT09rQUV6d3RIWTN5czBPZHRSOHFuclUwSVFBT0c0S3dBbDdiUFhwNW9jNmFtNm8vdmJRaEFBNENRckFDWHBROWNIbUJ6cHl2bXRvUWdDY0ZBWGdoSHhPOVorYkgrYkllZDdRaEFBNFNRckFDVGhUL1hyemd4dzVyN3o1dUFCWUpnWGdCTHlvK1NHT25EOXE5OGhpQUpaTEFUaG1WelEvd0pIei91cUxoaVlFd0F3S3dESDYrdGIxZ0orL3FyNWlhRUlBektJQUhKTkhWSjlzZm5pajVtejE5S0VKQVRDVEFuQU1Qci82aytZSE4zS2VNelFoQUdaVEFBYTdzSHA5ODBNYk9UOHpOQ0VBOW9FQ01OQ3A2dWVhSDlqSStkMDg0QWRnalJTQWdaN2IvTEJHenArMit6Z0RnUFZSQUFaNWV1dDZ3TS9IcWk4Wm1oQUErMFFCR09DcnF1dWFIOVNvdWFGNjB0Q0VBTmczQ3NBUlBiajZVUE5ER2puZk9UUWhBUGFSQW5BRUYxZHZhWDVBSStkSGh5WUV3TDVTQUE3cHZPcTNteC9PeVBubDZ2VElrQURZV3dyQUliMmsrY0dNbkRkVjl4aWFFQUQ3VEFFNGhHYzNQNVNSODc3cUM0Y21CTUMrVXdBTzZPOVdOelkvbEZIejZlcHhReE1DWUFrVWdBTjRaT3Q2d005TjFUY09UUWlBcFZBQXp0R2wxWjgzUDR5UjgzMURFd0pnU1JTQWMzQlI5UWZORDJMay9QVFFoQUJZR2dYZ0xweXFmcjc1SVl5YzExVVhETXdJZ09WUkFPN0NqelkvZ0pIejl1cGVReE1DWUlrVWdEdnhqRHRaYW9uejBlcGhReE1DWUtrVWdEdndoTmIzZ0ordkdab1FBRXVtQU55T2gxUWZQdVN5K3pobnEyOGJtaEFBUzZjQTNNYm5WZjlsME9MN01zOGRtaEFBYTZBQTNNcjUxYXVQNlNCbXpYL0lBMzRBK0c4cEFMZnlVOGQ0RURQbXl1cnVReE1DWUMwVWdKczk1d1FQNkNUbXF1b0JReE1DWUUwVWdPckpyZXNCUDFkWGYyMW9RZ0NzemVZTHdLT3JhL2JnSUVmTmpkWGZHNW9RQUd1MDZRSncvK292OXVBQVI4NFZReE1DWUswMld3QXVxdDZ3QndjM2NsNDJOQ0VBMW15VEJlQjA5WW85T0xDUjg2cnF2SkVoQWJCcW15d0F6OXVEZ3hvNWI2c3VHWm9RQUd1M3VRTHc3WHR3UUNQbkk5VVhEMDBJZ0MzWVZBRjRZblg5SGh6UXFMbTIrc3FSQVFHd0dac3BBSmRWSDkrRGd4azFaNnR2R1JVT0FKdXppUUp3NytxZGUzQWdJK2NIUndRRHdHYXR2Z0NjWDcxbUR3NWk1UHhDdXhNSEFJZTErZ0x3MGowNGdKSHorOVdGUncwRmdNMWJkUUg0WjN1dy9NaDVUM1dmb3dRQ0FEZGJiUUY0YW5YVEhpdy9hajVWZmRsaHd3Q0EyMWhsQVhoTTllazlXSHpVM05qdWlZVUFNTXJxQ3NBRHFxdjJZT21SODkwSERRRUE3c0txQ3NBOXF6ZnZ3Y0lqNS9rSENRQUF6dEhlRjRCei9YRzNNOVd2NWxJNUFPT2RiWGN2MXNmYWZhL01IMVd2cS82LzZycDVheDNKcVhiSHRiZk90UUM4b1Bxbng3a0lBTnpHSjZ0ZnJGNWN2V1h5TGdlMWlnTHdYZFZMam5zUkFMZ0RuNjErcmZyKzZsMlRkemxYaXk4QS8wUDF5dXE4RTlnRkFPN01kZFZ6cXg5cno5OWNXM2dCZUVUMSt1cHpUMmdYQURnWC8yLzE5T29Uc3hlNUU0c3RBUGVwL3FCNjhBbnVBZ0RuNnEzVjExZnZuNzNJSGRqN0FuRDZkbjd0Z25ZM1hYanpCMkJmUGFyZFR3cjRDdmREdXIwQzhGUFZWNS8wSWdCd1FBK3JmaW4zcVIzS2JRdkFNMjhlQUZpQ0oxUS9QSHVKSmJyMVBRRDNxOTVXWFRKcEZ3QTRqSnVxeDdYN0FxRjlzYWg3QUg0NGIvNEFMTStaNmtXemwxaWFXNjRBUEtSNlJ6NUhBV0M1dnE1Njlld2xicmFZS3dEUHlwcy9BTXYyN05rTExNa3RWd0N1YXZlb1h3QllxaHVyTDZvK09IdVJGbklGNEJGNTh3ZGcrYzZydm1IMkVrdHh1dDFuSmdDd0JrK2F2Y0JTbks2ZU9Ic0pBQmprTWJNWFdJclR1ZndQd0hvOHVMcmI3Q1dXNEhSMTZld2xBR0NRTTlYbnoxNWlDVTduUVFvQXJNdkZzeGRZZ3RQVitiT1hBQUJPMXVucTA3T1hBSUNCL25MMkFrdHd1bnJmN0NVQVlKQWJxdy9QWG1JSlRsZnZtcjBFQUF6eVo5VU5zNWRZZ3RQVmxiT1hBSUJCM2poN2dhVTRYYjEyOWhJQU1JajN0SE4wcXQzUFRMNnZ1dS9rWFFEZ0tEd002QUJPVnpkVkw1KzlDQUFjMFcrM0gyLytpM0RMNDRBZlVyMmozWk9VQUdDSnZyWjZ6ZXdsYnJhSUt3QlY3NjUrZHVJZUFIQVV2OWYrdlBrdndxbGIvZldsMWR1cWUwM2FCUUFPNDZicXNkV2JaeTl5SzR1NUFsQzd6MDJlUFdzUkFEaWtIMnUvM3Z3WDRkVHQvTnEvcXA1NTBvc0F3Q0c4cnZxNmRqOEJzRS8yL2dyQTdSV0FDOXJkU2ZuVko3d0xBQnpFMjZvblZCK2Z2Y2p0V0dRQnFOMGpnditnZXZBSjdnSUE1K290MWQrcDNqOTdrVHV3OXdYZzlCMzgrb2VycDFTZk9zRmRBT0JjdktwNll2djc1cjhJZDFRQWFuZHA1UiswZjUrckFMQk4xMWIvVy9VL1ZwK2N2TXZpM1ZrQnFOMjlBTjk3RW9zQXdCMDRXLzF5OWFqcS82bytPM2VkZGJpamV3QnU2d1hWUHozT1JRRGdOajVSL1dMMTR1cXRrM2M1cUwyL0IrQmNDOENaNmxlckp4L2pMZ0JzMDAzVjFkVkgybjB0L1p2YlBkWHY5ZFgxRS9jNmlyMHZBQWR4ejNZbjViTXJtdWNQVFFnQWRrNDEvejN1cnVaQUhsQmR0UWRMajV6dlBtZ0lBSEFYVmxjQXFoNVRmWG9QRmg4MU4rYWpEUURHV21VQnFIcHF1ODlzWmk4L2FqNVZmZGxod3dDQTIxaHRBYWo2WjN1dy9NaDVUN3R2UUFTQW8xcDFBYWg2NlI0Y3dNajUvZXJDbzRZQ3dPYXR2Z0NjWDcxbUR3NWk1UHhDNS83amtRQndlMVpmQUtydVhiMXpEdzVrNVB6Z2lHQUEyS3hORklDcXk5bzlqbkgyd1l5YXM5VzNqQW9IZ00zWlRBR28zWk9acnQrREF4bzExMVpmT1RJZ0FEWmpVd1dnNnR2MzRJQkd6a2VxTHg2YUVBQmJzTGtDVVBXOFBUaW9rZk8yNnBLaENRR3dkcHNzQUtlclYrekJnWTJjVjFYbmpRd0pnRlhiWkFHb3VxaDZ3eDRjM01oNTJkQ0VBRml6elJhQXF2dFhmN0VIQnpoeXJoaWFFQUJydGVrQ1VQWG82cG85T01oUmMyUDE5NFltQk1BYWJiNEExTzVKZXpkT09yamptS3VydnpZMElRRFdSZ0c0MlhOTzhJQk9ZcTZxSGpBMElRRFdSQUc0bFo4NnhvT1lNVmRXZHgrYUVBQnJvUURjeXZuVnE0L3BJR2JOZjJqM1k0OEFjR3NLd0cxOFh2VmZCaTIrTC9QY29Ra0JzQVlLd08xNFNQWGhReTY3ajNPMityYWhDUUd3ZEFyQUhYaENkZDA1THJpRXVhSDZtcUVKQWJCa0NzQ2RlTWFkTExYRStXajFzS0VKQWJCVUNzQmQrTkhtQnpCeTNsN2RhMmhDQUN5UkFuQVhUbFUvMy93UVJzN3JxZ3NHWmdUQThpZ0E1K0NpNmcrYUg4VEkrZW1oQ1FHd05BckFPYnEwK3ZQbWh6Rnl2bTlvUWdBc2lRSndBSStzUHRuOFFFYk5UZFUzRGswSWdLVlFBQTdvNzdhdUJ3ZDl1bnJjMElRQVdBSUY0QkNlM2Z4UVJzNzdxaThjbWhBQSswNEJPS1NYTkQrWWtmT202aDVERXdKZ255a0FoM1JlOWR2TkQyZmsvSEllSEFTd0ZRckFFVnhjdmFYNUFZMmNIeDJhRUFEN1NnRTRvZ2RYSDJwK1NDUG5PNGNtQk1BK1VnQUcrS3JXOStDZ0p3MU5DSUI5b3dBTTh2UjJqOTJkSGRhbytWajFKVU1UQW1DZktBQURQYmY1WVkyY1A2MCtmMmhDQU93TEJXQ2dVOVhQTlQrd2tmTzcxZDFHaGdUQVhsQUFCcnV3ZW4zelF4czVQek0wSVFEMmdRSndERDYvK3BQbUJ6ZHluak0wSVFCbVV3Q095U05hMTRPRHpyYTcwUkdBZFZBQWp0SFhWNTlwZm9DajVxK3FyeGlhRUFDektBREg3SXJtQnpoeTNsOTkwZENFQUpoQkFUZ0JMMnAraUNQbmo2cDdEazBJZ0pPbUFKeUFNOVd2TnovSWtmUEttNDhMZ0dWU0FFN0k1MVQvdWZsaGpwem5EVTBJZ0pPa0FKeWdCMVVmYkg2Z0krZTdoaVlFd0VsUkFFN1lZNnRQTnovVVVYTkQ5YmVISmdUQVNWQUFKbmhhNjNwdzBLZXFSdzFOQ0lEanBnQk04b1BORDNia3ZMdTZ6OUNFQURoT0NzQWtwNnFYTnovY2tmTjdlWEFRd0ZJb0FCTmRVTDIyK1FHUG5IL2Y3a1VGd0g1VEFDYTdkL1d1NW9jOGNuNWdhRUlBSEFjRllBODh2UHBFODRNZU5XZXJieDZhRUFDaktRQjc0dXRhMTRPRHJxMHVINW9RQUNNcEFIdmtPNW9mOXNqNVFQWEFvUWtCTUlvQ3NHZWUzL3pBUjg0ZlY1ODdOQ0VBUmxBQTlzenA2bGVhSC9ySStjM3F2SkVoQVhCa0NzQWV1bWYxNXVZSFAzSmVNRFFoQUk1S0FkaFQ5Nit1YW43NEkrZDdoaVlFd0ZFb0FIdnNNZFUxelQ4Qm8rYkc2aWxERXdMZ3NCU0FQZmZVNnFibW40UlJjM1gxWlVNVEF1QXdGSUFGK0lIbW40U1I4NTdxdmtNVEF1Q2dGSUNGZUduelQ4VEllVU4xOTZFSkFYQVFDc0JDbkYrOXB2a25ZK1Q4WWg0Y0JEQ0xBckFnbjFlOXMva25aT1Q4ME5DRUFEaFhDc0RDWEZaOXZQa25aZFNjcmI1MWFFSUFuQXNGWUlHZVdGM2YvQk16YXE2dEhqODBJUUR1aWdLd1VNOXMvb2taT1IrcEhqbzBJUUR1akFLd1lEL2UvSk16Y3Q1V1hUSTBJUUR1aUFLd1lLZXJWelQvQkkyYzM4cURnd0JPZ2dLd2NCZFZmOWo4a3pSeVhqWTBJUUJ1andLd0F2ZXIzdHY4RXpWeXZuZG9RZ0RjbGdLd0VvOXVYUThPdXFuNmhxRUpBWEJyQ3NDS1BMbmRFL2RtbjdCUmMzWDExNGNtQk1BdEZJQ1YrZjdtbjdDUmMxWDFnS0VKQVZBS3dDcjlaUE5QMnNpNU1nOE9BaGhOQVZpaDg2dFhOLy9Falp4ZmF2ZGpqd0NNb1FDczFNWFZXNXQvOGtiT2M0Y21CTEJ0Q3NDS1BiajZjUE5QNEtnNVczM2IwSVFBdGtzQldMbS9WVjNYL0pNNGFtNm92bVpvUWdEYnBBQnN3RE9hZnhKSHprZXJodzFOQ0dCN0ZJQ04rSkhtbjhpUjgvYnFYa01UQXRnV0JXQWpUbFgvcnZrbmMrUzhycnBnWUVZQVc2SUFiTWpkcXpjMC80U09uQmNNVFFoZ094U0FqVm5qZzRPZU9qUWhnRzFRQURib2tkVW5tMzlpUjgwSGN6OEF3RUVwQUJ2MWxOYjE0S0FYam8wSFlQVVVnQTM3dnVhZjNGRnpiWFgvc2ZFQXJKb0NzSEZyZW5EUXZ4aWNEY0NhS1FBYmQ2YjZqZWFmNUJIelozbGdFTUM1VWdEbzR1b3R6VC9SSStiUmc3TUJXS3U5THdEK1JIZjhycTYrc2ZySTdFVUdlTkxzQlFBWVF3RTRHZSt1L241MS9leEZqdWpMWnk4QXdCZ0t3TW41L2VvN1d2Ym5MZytmdlFBQVl5Z0FKK3ZucXY5ajloSkhjT25zQlFCZ3FVNVZQOThlM0FCeWlMbm1HUElBV0NNM0FmTGYrR3oxek9vL3psN2tFRzZhdlFBQVl5Z0FjMXpYN3FiQVA1dTh4MEZkTzNzQkFNWlFBT2I1VVBYa2RnOE9Xb3Izemw0QWdERVVnTG5lVm4xenV3Y0hMY0dmekY0QWdERVVnUGxlVlgzMzdDWE8wUi9PWGdBQTF1WW4yb083UXU5aWZCVXd3TG5aKzU4Q09MNUQ1NkRPVkwvVy9CZkVIYzJmSHQraEE2ek8zaGNBSHdIc2o1dXFiNjNlT251Uk8vRHkyUXNBd0pvOXFQcGdlOUFPYnpYWDVWc0FBUTdDRlFBTzdNK3JwMVIvTlh1UlczbHh1MUlDQUJ5enAxZG5tOThTUDFSZGNzekhDckEyZTM4RjRQZ09uUkgrZWZOZklOOTA3RWNKc0Q0S0FFZHlxdm8zelh0eHZQRDREeEZnbFJRQWp1eUM2amM3K1JmR3I3VDcwVVFBRGs0QllJaTdWNy9WeWIwb1hsSGQ3VVNPREdDZEZBQ0dPYjk2V2NmL2duaGhkZDRKSFJQQVdpa0FEUGZOMVNjYS8wTDRZUFhVRXp3T2dEVlRBRGdXWDFEOVpIVkRSMzhCWE52dVQvMzNPdEVqQUZnM0JZQmo5WVhWajFYdjdlQW4vcytxSDg0My9BRWNoNzB2QUtlTzc5ZzVRYWVxcjZpKyt1Yi9mV2k3Y25EM2RuZnlmNnA2Zi9XTzZzcnF0ZFYvYXZkRlF3Q01kNm85L3oxV0FRQ0E4ZmErQUhnV0FBQnNrQUlBQUJ1a0FBREFCaWtBQUxCQkNnQUFiSkFDQUFBYnBBQUF3QVlwQUFDd1FRb0FBR3lRQWdBQUc2UUFBTUFHS1FBQXNFRUtBQUJza0FJQUFCdWtBQURBQmlrQUFMQkJDZ0FBYkpBQ0FBQWJwQUFBd0FZcEFBQ3dRUW9BQUd5UUFnQUFHNlFBQU1BR0tRQUFzRUVLQUFCc2tBSUFBQnVrQUFEQUJpa0FBTEJCQ2dBQWJKQUNBQUFicEFBQXdBWXBBQUN3UVFvQUFHeVFBZ0FBRzZRQUFNQUdLUUFBc0VFS0FBQnNrQUlBQUJ1a0FBREFCaWtBQUxCQkNnQUFiSkFDQUFBYnBBQUF3QVlwQUFDd1FRb0FBR3lRQWdBQUc2UUFBTUFHS1FBQXNFRUtBQUJza0FJQUFCdWtBQURBQmlrQUFMQkJDZ0FBYkpBQ0FBQWJwQUFBd0FZcEFBQ3dRUW9BQUd5UUFnQUFHNlFBQU1BR0tRQUFzRUVLQUFCc2tBSUFBQnVrQUFEQUJpa0FBTEJCQ2dBQWJKQUNBQUFicEFBQXdBWXBBQUN3UVFvQUFHeVFBZ0FBRzZRQUFNQUdLUUFBc0VFS0FBQnNrQUlBQUJ1a0FBREFCaWtBQUxCQkNnQUFiTkNwMlFzQUhLTkhWVStxTHE4dXF4NVUzYU82Y09aU3NBOFVBR0J0THFtK3MvcEgxWmZPWFFYMmx3SUFyTVZGMVhPcVoxY1hUOTRGOXA0Q0FLekJFNnFmclI0eWVROVlERGNCQWt2M25PbzFlZk9IQTNFRkFGaXFVOVVMcXl0bUx3Skw1QW9Bc0ZRL25qZC9PRFJYQUlBbHVxTDZpZGxMd0pJcEFNRFNQS1o2ZlhYQjdFVmd5UlFBWUVuT1ZGZFdmMlAySXJCMDdnRUFsdVJaZWZPSElWd0JBSmJpL09wZDdiN09GemdpVndDQXBYaGEzdnhoR0FVQVdJcG56RjRBMXNSSEFNQVNYRng5ckRwdjlpS3dGcTRBQUV2d3hMejV3MUFLQUxBRWo1MjlBS3lOQWdBc3dXV3pGNEMxVVFDQUpiaDA5Z0t3TmdvQXNBVDNuTDBBckkwQ0FBRGJjNzBDQUN6Qk5iTVhnSlg1U3dVQVdJSVB6RjRBVnVZRENnQ3dCTytjdlFDc3pEc1VBR0FKcnB5OUFLek1sYjRLR0ZnQ1h3VU1ZMzJGS3dEQUVseGQvYzdzSldBbDNsdTlTUUVBbHVKZnoxNEFWdUxmVm1kOUJBQXN4Zm5WdTZvSHpWNEVGdXo2Nm91cjk3a0NBQ3pGWjZyL2MvWVNzSEF2cmQ1WDVRb0FzQ1JucWpkV2o1NjlDQ3pReDlvOVdPdGo1YXVBZ1dXNXFmckg3UzVqQWdmenJHNSs4NjlkbXdaWWtnOVVINitlUEhzUldKQVhWLy8zclg5QkFRQ1c2STN0bmhENCtObUx3QUw4UnZYTTZ1eXRmMUVCQUpicTFkVWwxZVd6RjRFOTl1dlYwNnNiYnZzM0ZBQmd5VjVWL1dYMXRibW5DVzdyeGRXM2R6dHYvZ0JyOGZoMkR3ejZyREdtRDFkUDZ5NjRBZ0Nzd1Y5VUwydjMwd0ZmWGwwNGR4Mlk0dnJxcDZwdnF0NTBWLyt3N3dFQTF1Ymk2bitwbmxFOWN2SXVjQkxlMis3cmZmOWw5ZjV6L1pjVUFHRE52clRkL1FHWFZ3K3ZIdGp1cHdjdW1ya1VITklOMVRYVlZlMCs4cnF5ZWsyN1ArMmZ2Wk4vNzNiOS83RXBMRnM3QS91bkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb3JlLTFmNzMwN2NhY2ZlZmY4MGE0ZGEyMzcwMjlmNTRhYmY0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zZWFyY2gtZWQ5N2E5YzU2OGFlNzdjOTA5YjQwNTUyYmY1YjUxODEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3VzZXItNjE2MzczMTVlNzQwODEwZTM1ZGU1MDRjMDhmNjMxMjcucG5nXCI7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgcmVUd2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlVHdlZXREb25lOiBmYWxzZSxcclxuICByZVR3ZWV0RXJyb3I6IG51bGwsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfUkVRVUVTVCA9ICdNT0RJRllfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1NVQ0NFU1MgPSAnTU9ESUZZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9GQUlMVVJFID0gJ01PRElGWV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfTElLRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfUkVRVUVTVCA9ICdMT0FEX1NQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gJ0xPQURfU1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX0ZBSUxVUkUgPSAnTE9BRF9TUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVUd2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZVR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZVR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LnJlVHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlVHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZVR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnJlVHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfU1VDQ0VTUzpcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAvLyBkcmFmdC5tYWluUG9zdHMgPSBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKS5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDssKjri6gg7Iuc64+E7KSRXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOuLpOuluCDsnbTsmqnsnpAg7KCV67O0IOuhnOuUqVxyXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7KCE7LK0IOydtOyaqeyekCDrpqzsiqTtirgg66Gc65SpXHJcbiAgbG9hZFVzZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg66qp66GdIOuhnOuUqVxyXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuqqeuhnSDroZzrlKlcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrTsoJXrs7Qg66Gc65SpIOyLnOuPhOykkVxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJzSW5mbzoge30sXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfUkVRVUVTVCA9ICdMT0FEX1VTRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19TVUNDRVNTID0gJ0xPQURfVVNFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2Vyc0luZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgLy8gcmV0dXJuIHtcclxuICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgIG1lOiB7XHJcbiAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAvLyByZXR1cm4ge1xyXG4gICAgLy8gICAuLi5zdGF0ZSxcclxuICAgIC8vICAgbWU6IHtcclxuICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgZm9yayh1c2VyU2FnYSksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1NQT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9TUE9TVF9SRVFVRVNULFxyXG4gIExPQURfU1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICBNT0RJRllfUE9TVF9GQUlMVVJFLFxyXG4gIE1PRElGWV9QT1NUX1JFUVVFU1QsXHJcbiAgTU9ESUZZX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTsgLy8gZm9ybWRhdGEg7KCE7IahXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7IC8vIGRlbGV0ZeuKlCDrjbDsnbTthLDrpbwg6rCA7KC46rCIIOyImCDsl4bri6QgZGF0YeuKlCBwb3N0SWRcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU1Bvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRTUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkU1Bvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vIGZvcm1kYXRh64qUIHsgbmFtZTogZGF0YSB9IOqwmeydgCDsi53snLzroZwg6rCQ7Iu467KE66as66m0IGpzb27snLzroZwg7J6Q64+ZIOuzgO2ZmOuQmOuyhOumsOuLpC5cclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlVHdlZXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTsgLy8gZm9ybWRhdGHripQgeyBuYW1lOiBkYXRhIH0g6rCZ7J2AIOyLneycvOuhnCDqsJDsi7jrsoTrpqzrqbQganNvbuycvOuhnCDsnpDrj5kg67OA7ZmY65CY67KE66aw64ukLlxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVUd2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZVR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbGF0ZWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9yZWxhdGVkP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogUmVsYXRlZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoUmVsYXRlZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTGlrZWRQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvbGlrZWQ/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTGlrZWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTGlrZWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEuUG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbW9kaWZ5UG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChtb2RpZnlQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmVUd2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRTUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfU1BPU1RfUkVRVUVTVCwgbG9hZFNQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTW9kaWZ5UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KE1PRElGWV9QT1NUX1JFUVVFU1QsIG1vZGlmeVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVsYXRlZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNULCBSZWxhdGVkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNULCBsb2FkTGlrZWRQb3N0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRTUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZWxhdGVkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZExpa2VkdGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hNb2RpZnlQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSU19SRVFVRVNULFxyXG4gIExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcclxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2Vyc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9hbGwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VycyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoU2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVuRm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoVW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhbmdlTmlja05hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQ2hhbmdlTmlja05hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZW5pY2tOYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VySW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2Vyc0luZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJTX1JFUVVFU1QsIGxvYWRVc2Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlcnNJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VuaWNrTmFtZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==