import Vue from 'vue'
import Router from "vue-router"
import ca from '../views/itemDetails.vue'

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
		{
			path:"/details",
			name:"details",
			component:ca,
			meta:{
				showFooter:true,
				show:true
			}
		},
		{
			path:"/order",
			name:"order",
			component:()=>import("../views/allOrder.vue"),
			meta:{
				showFooter:true
			}
		},
		{
			path:"/message",
			name:"list0",
			component:()=>import("../views/myMessage.vue"),
			meta:{
				showFooter:true,
				show:false
			}
		},
	],
	mode:"history"
})
