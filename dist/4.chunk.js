webpackJsonp([4],{

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        handleRouter: function handleRouter() {
            this.$router.push('/user/1');
        }
    }
};

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("介绍页")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.handleRouter
    }
  }, [_vm._v("跳转到 user")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-646be8e3", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(111)

var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  "data-v-646be8e3",
  /* cssModules */
  null
)
Component.options.__file = "/home/yjchen/Documents/study/vue-learn/webpack-learn/views/about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-646be8e3", Component.options)
  } else {
    hotAPI.reload("data-v-646be8e3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});