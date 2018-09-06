webpackJsonp([1],{

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _counter = __webpack_require__(106);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        Counter: _counter2.default
    },
    data: function data() {
        return {
            increment_step: 5,
            decrease_step: 3,
            number: 0
        };
    },

    computed: {
        count: function count() {
            return this.$store.state.a.count;
        },
        list: function list() {
            return this.$store.getters.filteredList;
        },
        listCount: function listCount() {
            return this.$store.getters.listCount;
        },
        sumCount: function sumCount() {
            return this.$store.getters.sumCount;
        }
    },
    methods: {
        handleClick: function handleClick(type) {
            var _this = this;
            if (type === 'increment') {
                this.$store.commit({
                    type: 'increment',
                    count: _this.increment_step
                });
            } else if (type === 'decrease') {
                this.$store.commit({
                    type: 'decrease',
                    count: _this.decrease_step
                });
            }
        },
        handleAsyncIncrement: function handleAsyncIncrement() {
            var _this2 = this;

            this.$store.dispatch('asyncIncrement').then(function () {
                console.log(_this2.$store.state.a.count);
            });
        },
        handleAddRandom: function handleAddRandom(num) {
            this.number += num;
        }
    },
    created: function created() {
        this.$bus.on('add', this.handleAddRandom);
    },
    beforeDestroy: function beforeDestroy() {
        this.$bus.off('add', this.handleAddRandom);
    }
};

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(107)

var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  "data-v-eae4175c",
  /* cssModules */
  null
)
Component.options.__file = "/home/yjchen/Documents/study/vue-learn/webpack-learn/views/counter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] counter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eae4175c", Component.options)
  } else {
    hotAPI.reload("data-v-eae4175c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        number: {
            type: Number
        }
    },
    methods: {
        handleAddRandom: function handleAddRandom() {
            var num = Math.floor(Math.random() * 100 + 1);
            this.$bus.emit('add', num);
        }
    }
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    " + _vm._s(_vm.number) + "\n    "), _c('button', {
    on: {
      "click": _vm.handleAddRandom
    }
  }, [_vm._v("随机增加")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eae4175c", module.exports)
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("首页")]), _vm._v(" "), _c('div', [_c('div', [_vm._v("Vuex计数器：" + _vm._s(_vm.count))]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.handleClick('increment')
      }
    }
  }, [_vm._v("+" + _vm._s(_vm.increment_step))]), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        _vm.handleClick('decrease')
      }
    }
  }, [_vm._v("-" + _vm._s(_vm.decrease_step))])]), _vm._v(" "), _c('div', [_c('div', [_vm._v("list: " + _vm._s(_vm.list))]), _vm._v(" "), _c('div', [_vm._v("listCount: " + _vm._s(_vm.listCount))]), _vm._v(" "), _c('div', [_vm._v("sumCount: " + _vm._s(_vm.sumCount))]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.handleAsyncIncrement
    }
  }, [_vm._v("async + 1")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/about",
      "tag": "div",
      "active-class": ""
    }
  }, [_vm._v("关于我们")]), _vm._v(" "), _c('div', [_vm._v("\n        随机增加：\n        "), _c('Counter', {
    attrs: {
      "number": _vm.number
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f7b878b0", module.exports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  "data-v-f7b878b0",
  /* cssModules */
  null
)
Component.options.__file = "/home/yjchen/Documents/study/vue-learn/webpack-learn/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7b878b0", Component.options)
  } else {
    hotAPI.reload("data-v-f7b878b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});