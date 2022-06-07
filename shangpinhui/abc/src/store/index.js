import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from "./home";//引入小仓库
import search from "./search";//引入小仓库

export default new Vuex.Store({
  modules: {
	  home,
	  search
  }
})
