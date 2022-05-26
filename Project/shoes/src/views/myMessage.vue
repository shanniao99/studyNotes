<template>
	<div>
		<heads :title="$route.params.title"></heads>
		<keep-alive>
			<component :is="$route.params.is"></component>
		</keep-alive>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		components: {
			heads: () => import("../components/headTit.vue"),
			message:()=>import("../components/myMsg.vue"),
			collect:()=>import("../components/myCol.vue"),
			addres:()=>import("../components/myAddress.vue"),
			footprint:()=>import("../components/myFoot.vue"),
			coupon:()=>import("../components/myCoupon.vue"),
			integral:()=>import("../components/myInte.vue"),
		},
	}
</script>

<style>
</style>