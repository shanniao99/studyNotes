import Vue from 'vue'
import App from './shoeHome.vue'
import router from './router'
import store from './store'
import '@/rem/rem.js'
import "./font/footer_icon/iconfont.css"
import "./font/font_icon/iconfont.css"

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
    threshold: 100 //手指左右滑动距离
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
