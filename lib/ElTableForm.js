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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/el-table-form/src/main.vue?vue&type=template&id=2e695364&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "form",
      attrs: {
        model: _vm.params,
        inline: _vm.inline,
        "label-width": _vm.labelWidth ? _vm.labelWidth + "px" : ""
      },
      nativeOn: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.searchHandler()
        }
      }
    },
    [
      _vm._l(_vm.forms, function(form, index) {
        return _c(
          "el-form-item",
          {
            key: index,
            attrs: {
              prop:
                form.itemType != "datetimerange"
                  ? form.itemType != "daterange"
                    ? form.prop
                    : _vm.datePrefix + index
                  : _vm.dateTimePrefix + index,
              label: form.label,
              rules: form.rules || [],
              "label-width": form.labelWidth ? form.labelWidth + "px" : ""
            }
          },
          [
            form.itemType === "input" || form.itemType === undefined
              ? _c("el-input", {
                  style:
                    _vm.itemStyle +
                    (form.itemWidth ? "width: " + form.itemWidth + "px;" : ""),
                  attrs: {
                    size: form.size ? form.size : _vm.size,
                    readonly: form.readonly,
                    disabled: form.disabled,
                    placeholder: form.placeholder
                  },
                  model: {
                    value: _vm.params[form.modelValue],
                    callback: function($$v) {
                      _vm.$set(_vm.params, form.modelValue, $$v)
                    },
                    expression: "params[form.modelValue]"
                  }
                })
              : form.itemType === "select"
              ? _c(
                  "el-select",
                  {
                    style:
                      _vm.itemStyle +
                      (form.itemWidth
                        ? "width: " + form.itemWidth + "px;"
                        : ""),
                    attrs: {
                      size: form.size ? form.size : _vm.size,
                      disabled: form.disabled,
                      placeholder: form.placeholder
                    },
                    model: {
                      value: _vm.params[form.modelValue],
                      callback: function($$v) {
                        _vm.$set(_vm.params, form.modelValue, $$v)
                      },
                      expression: "params[form.modelValue]"
                    }
                  },
                  [
                    _vm._l(form.options, function(option, optionIndex) {
                      return _c("el-option", {
                        key: optionIndex + "_local",
                        attrs: {
                          value:
                            typeof option === "object"
                              ? option[form.valueKey || "value"]
                              : option,
                          label:
                            typeof option === "object"
                              ? option[form.labelKey || "label"]
                              : option
                        }
                      })
                    }),
                    _vm._l(
                      _vm.selectOptions[_vm.selectOptionPrefix + index],
                      function(op, opIndex) {
                        return _c("el-option", {
                          key: opIndex + "_remote",
                          attrs: {
                            value:
                              typeof op === "object"
                                ? op[form.valueKey || "value"]
                                : op,
                            label:
                              typeof op === "object"
                                ? op[form.labelKey || "label"]
                                : op
                          }
                        })
                      }
                    )
                  ],
                  2
                )
              : form.itemType === "date"
              ? _c("el-date-picker", {
                  style:
                    _vm.itemStyle +
                    (form.itemWidth ? "width: " + form.itemWidth + "px;" : ""),
                  attrs: {
                    type: "date",
                    placeholder: form.placeholder,
                    size: form.size ? form.size : _vm.size,
                    disabled: form.disabled,
                    readonly: form.readonly,
                    editable: form.editable,
                    "picker-options": form.pickerOptions || {}
                  },
                  model: {
                    value: _vm.params[form.modelValue],
                    callback: function($$v) {
                      _vm.$set(_vm.params, form.modelValue, $$v)
                    },
                    expression: "params[form.modelValue]"
                  }
                })
              : form.itemType === "daterange"
              ? _c("el-date-picker", {
                  style:
                    _vm.itemStyle +
                    (form.itemWidth ? "width: " + form.itemWidth + "px;" : ""),
                  attrs: {
                    size: form.size ? form.size : _vm.size,
                    type: "daterange",
                    disabled: form.disabled,
                    readonly: form.readonly,
                    editable: form.editable,
                    placeholder: form.placeholder,
                    "picker-options": form.pickerOptions || {}
                  },
                  on: {
                    change: function(date) {
                      return _vm.changeDate(
                        date,
                        form.prop.split("-")[0],
                        form.prop.split("-")[1]
                      )
                    }
                  },
                  model: {
                    value: _vm.params[form.modelValue],
                    callback: function($$v) {
                      _vm.$set(_vm.params, form.modelValue, $$v)
                    },
                    expression: "params[form.modelValue]"
                  }
                })
              : form.itemType === "datetimerange"
              ? _c("el-date-picker", {
                  style:
                    _vm.itemStyle +
                    (form.itemWidth ? "width: " + form.itemWidth + "px;" : ""),
                  attrs: {
                    size: form.size ? form.size : _vm.size,
                    type: "datetimerange",
                    disabled: form.disabled,
                    readonly: form.readonly,
                    editable: form.editable,
                    placeholder: form.placeholder,
                    "picker-options": form.pickerOptions || {}
                  },
                  on: {
                    change: function(datetime) {
                      return _vm.changeTimeDate(
                        datetime,
                        form.prop.split("-")[0],
                        form.prop.split("-")[1]
                      )
                    }
                  },
                  model: {
                    value: _vm.params[form.modelValue],
                    callback: function($$v) {
                      _vm.$set(_vm.params, form.modelValue, $$v)
                    },
                    expression: "params[form.modelValue]"
                  }
                })
              : _vm._e()
          ],
          1
        )
      }),
      _vm.forms.length > 0
        ? _c(
            "el-form-item",
            { attrs: { label: "" } },
            [
              _vm.forms.length > 0
                ? _c(
                    "el-button",
                    {
                      attrs: {
                        type: "primary",
                        size: _vm.size,
                        loading: _vm.submitLoading
                      },
                      on: { click: _vm.searchHandler }
                    },
                    [_vm._v("\n      " + _vm._s(_vm.submitBtnText) + "\n    ")]
                  )
                : _vm._e(),
              _vm.showResetBtn
                ? _c(
                    "el-button",
                    {
                      attrs: {
                        type: "primary",
                        plain: true,
                        size: _vm.size,
                        loading: _vm.submitLoading
                      },
                      on: { click: _vm.resetForm }
                    },
                    [_vm._v("\n      " + _vm._s(_vm.resetBtnText) + "\n    ")]
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/el-table-form/src/main.vue?vue&type=template&id=2e695364&

// CONCATENATED MODULE: ./packages/el-table-form/src/props.js

const Props = {
  size: {
    type: String,
    default: '',
    validator: sizeValidator
  },
  showResetBtn: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  fuzzy: {
    type: Boolean,
    default: false
  },
  labelWidth: Number,
  itemWidth: Number,
  submitHandler: Function,
  submitLoading: {
    type: Boolean,
    default: false
  },
  submitBtnText: {
    type: String,
    default: '查询'
  },
  resetBtnText: {
    type: String,
    default: '重置'
  },
  initParams: {
    type: Object,
    default: () => {
      return {};
    }
  },
  forms: {
    type: Array,
    required: true
  }
};
function sizeValidator(value) {
  const methodTypes = ['large', 'small', 'mini'];
  const valid = methodTypes.indexOf(value.toLowerCase()) !== -1 || value === '';
  if (!valid) {
    throw new Error(`Size must be one of ['large', 'small', 'mini']`);
  }
  return valid;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/el-table-form/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElTableForm',
  props: Props,
  data() {
    const { forms, fuzzy, initParams } = this.$props;
    const datePrefix = 'daterange-prefix';
    const dateTimePrefix = 'datetimerange-prefix';
    const selectOptionPrefix = 'select-option-prefix';
    let dataObj = {
      selectOptions: {}
    };

    let params = {};
    let format = {};
    let fuzzyOps = {};

    forms.forEach((v, i) => {
      const propType = typeof v.prop;
      if (propType === 'string') {
        v.modelValue = v.prop;
        params[v.prop] = '';

        fuzzyOps[v.prop] = v.fuzzy ? v.fuzzy : fuzzy;
        if (v.format) {
          format[v.prop] = v.format;
        }
      } else if (propType === 'object' && Object.prototype.toString.call(v.prop) === '[object Array]') {
        v.prop.forEach(vv => {
          params[vv] = '';
          if (v.format) {
            format[vv] = v.format;
          }

          fuzzyOps[vv] = v.fuzzy ? v.fuzzy : fuzzy;
        });
      }
      if (v.itemType === 'daterange') {
        params[datePrefix + i] = '';
        v.modelValue = datePrefix + i;
      }
      if (v.itemType === 'datetimerange') {
        params[dateTimePrefix + i] = '';
        v.modelValue = dateTimePrefix + i;
      }
      if (v.itemType === 'select' && (v.selectFetch || v.selectUrl)) {
        const dataKey = selectOptionPrefix + i;
        dataObj.selectOptions[dataKey] = [];
        const { $axios } = this;
        if (!v.selectMethod) {
          v.selectMethod = 'get';
        }
        this.getRemoteData({
          fetch: v.selectFetch ? v.selectFetch : () => {
            return $axios[v.selectMethod](v.selectUrl, v.selectMethod.toLowerCase() === 'get' ? { params: v.selectParams } : v.selectParams);
          },
          dataKey,
          resultField: v.selectResultField || 'result',
          resultHandler: v.selectResultHandler
        });
      }
    });

    return {
      params,
      datePrefix,
      dateTimePrefix,
      selectOptionPrefix,
      dataObj: dataObj,
      format,
      fuzzyOps
    };
  },
  computed: {

    itemStyle() {
      const { itemWidth } = this;
      if (itemWidth) {
        return `width: ${itemWidth}px;`;
      }
      return '';
    }

  },
  methods: {
    isArray(value) {
      return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]';
    },
    searchHandler() {
      this.getParams((error, params) => {
        if (!error) {
          const { submitHandler } = this;
          if (submitHandler) {
            submitHandler(params);
          } else {
            throw new Error('Need to set attribute: submitHandler !');
          }
        }
      });
    },
    getParamFuzzy() {
      return this.fuzzyOps;
    },
    getParams(callback) {
      this.$refs['form'].validate(valid => {
        if (valid) {
          const { params, datePrefix, dateTimePrefix, format } = this;
          let formattedForm = {};
          Object.keys(params).forEach(v => {
            if (v.indexOf(datePrefix) === -1 && v.indexOf(dateTimePrefix) === -1) {
              formattedForm[v] = format[v] ? format[v](params[v], v) : params[v];
            }
          });
          if (callback) callback(null, formattedForm);
        } else {
          if (callback) callback(new Error());
        }
      });
    },
    resetForm() {
      this.$refs['form'].resetFields();
    },
    changeDate(date, startDate, endDate) {
      let dates;
      if (date === null) {
        this.params[startDate] = '';
        this.params[endDate] = '';
        return;
      }
      if (typeof date === 'string') {
        dates = date.split(' - ');
      } else if (date && date.hasOwnProperty('length')) {
        const firstDate = date[0];
        const secondDate = date[1];
        dates = [`${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)}`, `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)}`];
      }

      this.params[startDate] = dates[0];
      this.params[endDate] = dates[1];
    },
    changeTimeDate(datetime, startDate, endDate) {
      let dates;
      if (datetime === null) {
        this.params[startDate] = '';
        this.params[endDate] = '';
        return;
      }
      if (typeof datetime === 'string') {
        dates = datetime.split(' - ');
      } else if (datetime && datetime.hasOwnProperty('length')) {
        const firstDate = datetime[0];
        const secondDate = datetime[1];
        dates = [`${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)} ${('0' + firstDate.getHours()).substr(-2)}:${('0' + firstDate.getMinutes()).substr(-2)}:${('0' + firstDate.getSeconds()).substr(-2)}`, `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)} ${('0' + secondDate.getHours()).substr(-2)}:${('0' + secondDate.getMinutes()).substr(-2)}:${('0' + secondDate.getSeconds()).substr(-2)}`];
      }

      this.params[startDate] = dates[0];
      this.params[endDate] = dates[1];
    },
    getRemoteData({ fetch, dataKey, resultField, resultHandler }) {
      fetch().then(response => {
        let result = response;
        if (typeof response === 'object' && !this.isArray(response)) {
          if (resultField.indexOf('.') !== -1) {
            resultField.split('.').forEach(vv => {
              result = result[vv];
            });
          } else {
            result = response[resultField];
          }
        }

        if (!result || !(result instanceof Array)) {
          console.warn(`The result of key:${resultField} is not Array. 接口返回的字段:${resultField} 不是一个数组`);
        }

        if (this.resultHandler) {
          this.selectOptions[dataKey] = result.map(this.resultHandler);
        } else {
          this.selectOptions[dataKey] = result;
        }
      });
    }
  },
  watch: {
    params: {
      handler: function (val, oldval) {
        this.forms.forEach((v, i) => {
          for (var item in this.params) {
            if (v.prop == item) {
              v.propValue = this.params[item];
              continue;
            }
          }
        });
        var allNull = true;
        for (var item in this.params) {
          if (this.params[item] != '' && this.params[item] != null) {
            allNull = false;
            break;
          }
        }
        if (allNull) {
          this.searchHandler();
        }
      },
      deep: true
    },
    forms: {
      handler: function (val, oldval) {
        this.forms.forEach((v, i) => {
          for (var item in this.params) {
            if (v.prop == item) {
              this.params[item] = v.propValue;
              continue;
            }
          }
        });
      },
      deep: true
    },
    //上面两个只针对一个下拉框根据另一个下拉框的条件筛选用的
    initParams: {
      handler: function (val, oldval) {
        this.searchHandler();
      },
      deep: true
    }
    //下面这个用上面的了，因为有下拉框筛选条件的问题
    // params:{
    //   handler:function(val,oldval){
    //       var allNull=true;
    //       for(var item in this.params){
    //           if(this.params[item]!=''&&this.params[item]!=null){
    //             allNull=false;
    //             break;
    //           }
    //       }
    //       if(allNull){
    //           this.searchHandler();
    //       }
    //   },
    //   deep: true
    // },

  }

});
// CONCATENATED MODULE: ./packages/el-table-form/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/el-table-form/src/main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
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
component.options.__file = "packages/el-table-form/src/main.vue"
/* harmony default export */ var main = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);



_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].install = function (Vue) {
  Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].name, _src_main_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })
/******/ ]);