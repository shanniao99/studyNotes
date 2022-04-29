import Vue from 'vue'
import App from './Eight.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //使用事件总线插件


// router.beforeEach((to,from,next)=>{
// 	console.log("全局路由守卫")
// 	console.log("到哪个页面去",to)
// 	console.log("从哪个页面来",from)
// 	next() //确定跳转
// })

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
