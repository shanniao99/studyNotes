import Vue from 'vue'
import Router from "vue-router"
//导入自定义组件
import one from '../views/one.vue'
import eight from './eight.js'

Vue.use(Router)

export default new Router({
	routes: [{
			path: "/", //路由路径
			name:"firstchild",
			component: one //路由跳转的组件名
		},
		{
			path: "/two",
			name: "Tu", //自定义路由名称
			component: () => import("../views/two.vue")
		},
		{
			path: "/three",
			components: {  //路由的命名视图
				default: () => import("../views/three.vue"),//默认窗口显示
				a: one,  //窗口显示页面一
				b: () => import("../views/two.vue"), //显示页面二
			}
		},
		{
			path: "/path-can",
			//path传参  函数模式:允许path属性配合query传值
			props:route=>route.query,
			component: () => import("../views/two.vue")
		},
		{
			path:"/three",
			name: "name-can",
			//name传参  布尔模式:允许name属性配合params传值
			props:true,
			component: () => import("../views/three.vue")
		},
		{
			path:"/four",
			redirect:{ //重定向 跳转到name为“name-can”的页面，并携带数据
				name:"name-can",
				params:{x:666,y:999}
			}
		},
		{
			path:"/five",
			props:{x:555,y:666},//对象模式：携带默认值
			component: one,
			children:[  //嵌套路由：使用页面内部的窗口来显示页面
				{
					path:"/onechild",
					component:()=>import("../views/two.vue")
				}
			]
		},
		...eight  //路由模块化  由["aa","bb"]=>"aa","bb"
	],
	mode: "history" //修改路由模式：由hash模式改为history模式
})
