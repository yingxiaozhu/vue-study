webpackJsonp([2],{

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    mounted: function mounted() {
        console.log(this.$route.params.id);
    }
};

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v(_vm._s(_vm.$route.params.id))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14440036", module.exports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(114)

var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  "data-v-14440036",
  /* cssModules */
  null
)
Component.options.__file = "/home/yjchen/Documents/study/vue-learn/webpack-learn/views/user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14440036", Component.options)
  } else {
    hotAPI.reload("data-v-14440036", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});