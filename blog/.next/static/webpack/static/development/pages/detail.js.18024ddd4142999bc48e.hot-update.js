webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/_antd@3.26.7@antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/_antd@3.26.7@antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/_antd@3.26.7@antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/_antd@3.26.7@antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/_next@9.1.7@next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Author */ "./components/Author.js");
/* harmony import */ var _components_Ad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/Ad */ "./components/Ad.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-markdown */ "./node_modules/_react-markdown@4.3.1@react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! markdown-navbar */ "./node_modules/_markdown-navbar@1.4.0@markdown-navbar/dist/index.js");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/_markdown-navbar@1.4.0@markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../static/style/pages/detail.css */ "./static/style/pages/detail.css");
/* harmony import */ var _static_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = "C:\\Users\\91583\\Desktop\\jspang-blog\\blog\\pages\\detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// 详情页










var markdown = '# P01:课程介绍和环境搭建\n' + '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' + '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' + '**这是加粗的文字**\n\n' + '*这是倾斜的文字*`\n\n' + '***这是斜体加粗的文字***\n\n' + '~~这是加删除线的文字~~ \n\n' + '\`console.log(111)\` \n\n' + '# p02:来个Hello World 初始Vue3.0\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n' + '***\n\n\n' + '# p03:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p04:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '#5 p05:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p06:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p07:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '``` var a=11; ```';

var Detail = function Detail() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u64AD\u5BA2\u8BE6\u60C5\u9875")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "flex",
    justify: "center",
    className: "comm-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 24,
    sm: 24,
    md: 10,
    lg: 15,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u89C6\u9891\u5217\u8868"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "detailed-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "React\u5B9E\u6218\u89C6\u9891\u6559\u7A0B-\u6280\u672F\u80D6Blog\u5F00\u53D1(\u66F4\u65B008\u96C6)"), __jsx("div", {
    className: "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), "2020\u5E741\u670818\u65E5"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "folder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), "\u89C6\u9891\u6559\u7A0B"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "fire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), "5498\u4EBA")), __jsx("div", {
    className: "detailed-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "detail-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_10___default.a, {
    source: markdown,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    className: "comm-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_components_Ad__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("div", {
    className: "detailed_nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u6587\u7AE0\u76EE\u5F55")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.18024ddd4142999bc48e.hot-update.js.map