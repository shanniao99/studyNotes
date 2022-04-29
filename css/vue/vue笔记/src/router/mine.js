import store from '../store'

export default [
	{
		path:"/module",
		meta:{
			login:true
		},
		component:()=>import('../views/second.vue'),
		beforeEnter:(to,from,next)=>{
				console.log("局部路由守卫",store)
				console.log("到哪个页面去",to)
				console.log("从哪个页面来",from)
				//判断路由元信息meta中的to.meta.login登录状态（也可以判断vuex中store.state.login的状态）				
				if(to.meta.login){ 
					next() //确定跳转
				}else{
					next("/456")
				}				
		}
	}
]