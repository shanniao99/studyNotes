import Vue from 'vue'
import App from './One.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
