export default [
	{
		path:"/module",
		component: () => import("../views/two.vue"),
		beforeEach:(to,from,next)=>{ //全局路由守卫
			console.log("全局路由守护",next)
			console.log("到哪个页面去",to)
			console.log("从哪个页面来",from)
		}
	},
]