import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/views/Home/TypeNav'

//全局组件：参数1：全局组件的名字；参数2：哪一个组件
Vue.component(TypeNav.name,TypeNav);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
