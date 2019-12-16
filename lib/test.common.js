module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"test\",\"version\":\"0.1.1\",\"description\":\"A Component Library for Vue.js.\",\"main\":\"./src/index.js\",\"files\":[\"lib\",\"src\",\"packages\"],\"scripts\":{\"build\":\"webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Airubby/el-test-package.git\"},\"keywords\":[\"Element UI\",\"UI\",\"Vue\",\"form\",\"table\",\"pagination\"],\"author\":\"Airubby <ai_rubby@qq.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/Airubby/el-test-package/issues\"},\"homepage\":\"https://github.com/Airubby/el-test-package#readme\",\"dependencies\":{\"async-validator\":\"~1.8.1\",\"babel-helper-vue-jsx-merge-props\":\"^2.0.0\",\"deepmerge\":\"^1.2.0\",\"normalize-wheel\":\"^1.0.1\",\"resize-observer-polyfill\":\"^1.5.0\",\"throttle-debounce\":\"^1.0.1\"},\"peerDependencies\":{\"vue\":\"^2.5.17\"},\"devDependencies\":{\"@vue/component-compiler-utils\":\"^2.6.0\",\"algoliasearch\":\"^3.24.5\",\"babel-cli\":\"^6.26.0\",\"babel-core\":\"^6.26.3\",\"babel-loader\":\"^7.1.5\",\"babel-plugin-add-module-exports\":\"^0.2.1\",\"babel-plugin-istanbul\":\"^4.1.1\",\"babel-plugin-module-resolver\":\"^2.2.0\",\"babel-plugin-syntax-jsx\":\"^6.18.0\",\"babel-plugin-transform-vue-jsx\":\"^3.7.0\",\"babel-preset-env\":\"^1.7.0\",\"babel-preset-stage-2\":\"^6.24.1\",\"babel-regenerator-runtime\":\"^6.5.0\",\"chai\":\"^4.2.0\",\"chokidar\":\"^1.7.0\",\"copy-webpack-plugin\":\"^5.0.0\",\"coveralls\":\"^3.0.3\",\"cp-cli\":\"^1.0.2\",\"cross-env\":\"^3.1.3\",\"css-loader\":\"^2.1.0\",\"es6-promise\":\"^4.0.5\",\"eslint\":\"4.18.2\",\"eslint-config-elemefe\":\"0.1.1\",\"eslint-loader\":\"^2.0.0\",\"eslint-plugin-html\":\"^4.0.1\",\"eslint-plugin-json\":\"^1.2.0\",\"file-loader\":\"^1.1.11\",\"file-save\":\"^0.2.0\",\"gulp\":\"^4.0.0\",\"gulp-autoprefixer\":\"^6.0.0\",\"gulp-cssmin\":\"^0.2.0\",\"gulp-sass\":\"^4.0.2\",\"highlight.js\":\"^9.3.0\",\"html-webpack-plugin\":\"^3.2.0\",\"json-loader\":\"^0.5.7\",\"json-templater\":\"^1.0.4\",\"karma\":\"^4.0.1\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.2\",\"karma-mocha\":\"^1.3.0\",\"karma-sinon-chai\":\"^2.0.2\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-spec-reporter\":\"^0.0.32\",\"karma-webpack\":\"^3.0.5\",\"markdown-it\":\"^8.4.1\",\"markdown-it-anchor\":\"^5.0.2\",\"markdown-it-chain\":\"^1.3.0\",\"markdown-it-container\":\"^2.0.0\",\"mini-css-extract-plugin\":\"^0.4.1\",\"mocha\":\"^6.0.2\",\"node-sass\":\"^4.11.0\",\"optimize-css-assets-webpack-plugin\":\"^5.0.1\",\"postcss\":\"^7.0.14\",\"progress-bar-webpack-plugin\":\"^1.11.0\",\"rimraf\":\"^2.5.4\",\"sass-loader\":\"^7.1.0\",\"select-version-cli\":\"^0.0.2\",\"sinon\":\"^7.2.7\",\"sinon-chai\":\"^3.3.0\",\"style-loader\":\"^0.23.1\",\"transliteration\":\"^1.1.11\",\"uglifyjs-webpack-plugin\":\"^2.1.1\",\"uppercamelcase\":\"^1.1.0\",\"url-loader\":\"^1.0.1\",\"vue\":\"2.5.21\",\"vue-loader\":\"^15.7.0\",\"vue-router\":\"^3.0.1\",\"vue-template-compiler\":\"2.5.21\",\"vue-template-es2015-compiler\":\"^1.6.0\",\"webpack\":\"^4.14.0\",\"webpack-cli\":\"^3.0.8\",\"webpack-dev-server\":\"^3.1.11\",\"webpack-node-externals\":\"^1.7.2\"}}");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/src/main.vue?vue&type=template&id=9837357e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._l(_vm.testdata, function(item) {
      return _c("li", [_vm._v(_vm._s(item.title))])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/list/src/main.vue?vue&type=template&id=9837357e&

// CONCATENATED MODULE: ./packages/list/src/props.js

const Props = {

  data: {
    type: Array,
    required: true
  },
  color: {
    type: Array,
    required: false
  }

};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'elTablePagination',
  props: Props,
  data() {
    const { color, data } = this.$props;
    return {
      testdata: data
    };
  },
  computed: {},
  methods: {},
  watch: {}

});
// CONCATENATED MODULE: ./packages/list/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/list/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/list/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/list/index.js



main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var list = (main);
// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */




const components = [list];

const install = function (Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$axios = opts.axios;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: package_0.version,
  install
});

/***/ })
/******/ ])["default"];