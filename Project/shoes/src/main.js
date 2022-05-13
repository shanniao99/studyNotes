import Vue from 'vue'
import App from './shoeHome.vue'
import router from './router'
import store from './store'
import '@/rem/rem.js'
import "./font/footer_icon/iconfont.css"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
