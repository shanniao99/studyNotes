import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:"/",
			name:"index",
			component:()=>import("../views/homeMid.vue")
		},
		{
			path:"/classify",
			name:"classify",
			component:()=>import("../views/classifyMid.vue")
		},
		{
			path:"/shoppingcart",
			name:"cart",
			component:()=>import("../views/cartMid.vue")
		},
		{
			path:"/mine",
			name:"mine",
			component:()=>import("../views/mineMid.vue")
		},
		{
			path:"/items",
			name:"items",
			component:()=>import("../views/itemsCheck.vue"),
			meta:{
				showFooter:true
			}
		},
	],
	mode:"history"
})
