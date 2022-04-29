import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:"/",
			component:()=>import('../views/Tea-Home.vue')
		},
		{
			path:"/food",
			name:"food",
			component:()=>import('../views/orderFood.vue')
		},
		{
			path:"/order",
			name:"order",
			component:()=>import('../views/teaOrder.vue')
		},
		{
			path:"/mine",
			name:"mine",
			component:()=>import('../views/teaMine.vue')
		},
		{
			path:"/address",
			name:"address",
			component:()=>import('../views/teaAddress.vue')
			
		},
		{
			path:"/add_address",
			name:"add",
			component:()=>import('../views/addressAdd.vue')
			
		},
		{
			path:"/teaAddress",
			name:"teaAddress",
			component:()=>import('../views/teaAddress.vue')
			
		}
	],
	mode:"history"
})

