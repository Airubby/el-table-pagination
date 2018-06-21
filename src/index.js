
import SearchTablePagination from '../packages/search-table-pagination/index.js'
import SearchForm from '../packages/search/index.js'

import packageInfo from '../package.json'


const components = [
  SearchTablePagination,
  SearchForm
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  if (!opts.axios) {
    opts.axios = require('axios')
    opts.ElementUI=require('element-ui')
    opts.axios.interceptors.response.use(
      response => {
        if(response.data.code=="-1"){
            opts.ElementUI.Message.warning("请重新登录系统访问！");
        }
        if(response.data.code=="-2"){
            opts.ElementUI.Message.warning(response.data.msg);
        }
        if(response.data.code=="-9"){
            opts.ElementUI.Message.warning(response.data.msg);
        }
        return JSON.parse(JSON.stringify(response.data))
      },
      error => {
        return Promise.reject(error.response)
      }
    )
  }
  Vue.prototype.$axios = opts.axios
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  version: packageInfo.version,
  install,
  SearchTablePagination,
  SearchForm
}
