webpackJsonp([3],{

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        login: function login() {
            window.localStorage.setItem('token', 'login-test');
            console.log(window.localStorage.getItem('token'));
        }
    }
};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dcb66bf", module.exports)
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)

var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  "data-v-4dcb66bf",
  /* cssModules */
  null
)
Component.options.__file = "/home/yjchen/Documents/study/vue-learn/webpack-learn/views/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dcb66bf", Component.options)
  } else {
    hotAPI.reload("data-v-4dcb66bf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});