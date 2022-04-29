import Vue from 'vue'
import App from './Six.vue'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //使用事件总线插件

new Vue({
	store,
  render: h => h(App),
}).$mount('#app')
