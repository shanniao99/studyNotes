import Vue from 'vue'
import Router from 'vue-router'
import abc from '../views/first.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:"/", // 斜线为默认的显示首页
			props:{x:666,y:999},//对象模式：携带默认值
			component:abc,
			children:[ //嵌套路由:使用页面内部的窗口来显示页面
				{
					path:"/firstchild",
					component:()=>import('../views/second.vue')
				}
			]
		},
		{
			path:"/123", //path属性不能省略
			name:"other",
			component:()=>import('../views/second.vue')
		},
		{
			path:"/456",
			components:{ //路由的命名视图
				default:()=>import('../views/thired.vue'), //默认窗口显示页面一
				a:abc,//a窗口显示页面二
				b:()=>import('../views/second.vue')//b窗口显示页面三
			}
		},
		{
			path:"/two",
			props: route => route.query, //函数模式：允许path属性配合query传值
			component:()=>import('../views/second.vue')
		},
		{
			path:"/three",
			name:"three",
			props:true, //布尔模式：允许name属性配合params传值
			component:()=>import('../views/thired.vue')
		},
		{
			path:"/four",
			redirect:{//重定向(往页面三跳转，并携带数据)
				name:"three",
				params:{x:111,y:222}
			},
		}
	],
	mode:"history" //修改路由模式变history模式
})

// 路由有两种跳转模式：hash（默认哈希模式） 和 history
// location.hash="#..."
// history.pushState("","","xxx.html")
