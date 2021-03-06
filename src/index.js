/* Automatically generated by './build/bin/build-entry.js' */
import ElTablePagination from '../packages/el-table-pagination/index.js'
import ElTableForm from '../packages/el-table-form/index.js'

import packageInfo from '../package.json'

const components = [
  ElTablePagination,
  ElTableForm
];

const install = function(Vue, opts = {}) {
  
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  if (!opts.axios) {
    opts.axios = require('axios')
    opts.axios.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    opts.axios.interceptors.response.use(
      response => {
        return JSON.parse(JSON.stringify(response.data))
      },
      error => {
        return Promise.reject(error.response)
      }
    )
  }
  Vue.prototype.$axios = opts.axios
  

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: packageInfo.version,
  install,
  //单独导出，单独引用的时候用到
  ElTablePagination,
  ElTableForm
};
