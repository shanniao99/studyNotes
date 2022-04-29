import Vue from 'vue'
import App from './Seven.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //使用事件总线插件

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
