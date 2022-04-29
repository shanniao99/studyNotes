import Vue from 'vue'
import App from './Four.vue'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //使用事件总线

new Vue({
  render: h => h(App),
}).$mount('#app')
