(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{358:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(76),_dec,_class,enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(e[r]=_[r])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var Photo=function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DynamicImport,{load:function(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(1)]).then(__webpack_require__.bind(null,360))}},function(t){return null===t?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Loading"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(t,e)})},Comments=function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DynamicImport,{load:function(){return __webpack_require__.e(5).then(__webpack_require__.bind(null,373))}},function(t){return null===t?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Loading"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(t,e)})},Single=(_dec=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function(e){return{posts:e.postsReducer,comments:e.commentsReducer}}),Object(react_router__WEBPACK_IMPORTED_MODULE_1__.a)(_class=_dec(_class=function(_React$Component){function Single(){return _classCallCheck(this,Single),_possibleConstructorReturn(this,_getPrototypeOf(Single).apply(this,arguments))}return _inherits(Single,_React$Component),_createClass(Single,[{key:"render",value:function(){var e=this.props.match.params.postId,t=this.props.posts.findIndex(function(t){return t.code===e}),_=this.props.posts[t],r=this.props.comments[e]||[];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"single-photo"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Photo,_extends({index:t,post:_},this.props)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comments,_extends({postComments:r},this.props))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Single}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component))||_class)||_class),_default=Single,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(Photo,"Photo","C:\\Users\\186866380\\Documents\\Source\\Repos\\learn-redux\\client\\components\\Single.js"),reactHotLoader.register(Comments,"Comments","C:\\Users\\186866380\\Documents\\Source\\Repos\\learn-redux\\client\\components\\Single.js"),reactHotLoader.register(Single,"Single","C:\\Users\\186866380\\Documents\\Source\\Repos\\learn-redux\\client\\components\\Single.js"),reactHotLoader.register(_default,"default","C:\\Users\\186866380\\Documents\\Source\\Repos\\learn-redux\\client\\components\\Single.js"),leaveModule(module))}.call(this,__webpack_require__(17)(module))}}]);
//# sourceMappingURL=7.bundle.js.map