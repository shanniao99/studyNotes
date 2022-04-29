import Vue from 'vue'
import App from './Practise_9.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //使用事件总线

new Vue({
	store,  //vuex
	router,  //路由
  render: h => h(App),
}).$mount('#app')
