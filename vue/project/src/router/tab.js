import Vue from 'vue'
import Router from "vue-router"
import home from "../views/tabs/home.vue"
import product from "../views/tabs/product.vue"
import about from "../views/tabs/about.vue"
import serve from "../views/tabs/serve.vue"

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			component:home
		},
		{
			path:'/product',
			component:product
		},
		{
			path:'/about',
			component:about
		},
		{
			path:'/serve',
			component:serve
		},
	],
	mode:"history"
})