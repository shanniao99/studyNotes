import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(VueRouter)

export default new VueRouter({
	routes:[
		{
			path:"/home",
			component:Home,
			meta:{
				show:true
			}
		},
		{
			path:"/search",
			component:Search,
			meta:{
				show:true
			}
		},
		{
			path:"/login",
			component:Login,
			meta:{
				show:false
			}
		},
		{
			path:"/register",
			component:Register,
			meta:{
				show:false
			}
		},
		//重定向
		{
			path:'/',
			redirect:"/home"
		}
	],
	mode:"history"
})