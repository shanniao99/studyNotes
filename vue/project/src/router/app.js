import Vue from 'vue'
import Router from "vue-router"
import one from '../views/first.vue'
import useremail from '../views/email.vue'
import userfile from '../views/userfile.vue'
import fileview from '../views/fileview.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:"/", //路由路径
			component:one,  //路由跳转的组件名
			children:[  //嵌套路由   （两个嵌套路由）
				{
					path:"emails",  //嵌套路由的路径
					component:useremail
				},
				{
					path:'profile',
					components:{
						default:userfile,
						child:fileview
					}
				}
			]
		}
	],
	mode:"history"
})