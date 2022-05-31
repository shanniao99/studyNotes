<template>
	<div>
		<heads :title="$route.params.title"></heads>
		<div class="order-mid">
		<van-tabs v-model="active">
			<van-tab v-for="v,i in $store.state.orders" :key="i" :title="v.tit">
				<component :is="v.is"></component>
			</van-tab>
		</van-tabs>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Tab,
		Tabs
	} from 'vant';

	Vue.use(Tab);
	Vue.use(Tabs);
	export default {
		data() {
			return {
				active: 0
			}
		},
		mounted() {
			if(this.$route.params.active!=undefined){
				this.active=this.$route.params.active
			}
		},
		components: {
			heads: () => import("../components/headTit.vue"),
			all:()=>import("../components/allOrder.vue"),
			payment:()=>import("../components/paymentOrder.vue"),
			delivered:()=>import("../components/deliveredOrder.vue"),
			receipt:()=>import("../components/receiptOrder.vue"),
			completed:()=>import("../components/completedOrder.vue")
		},
	}
</script>

<style>
	.order-mid{
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}
	.order-mid .van-tabs__wrap{
		width: 750px;
		height: 80px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
	}
	.order-mid .van-tabs__nav--line{
		box-sizing: border-box;
		padding-bottom: 0;
	}
	.order-mid .van-tab{
		font-size: 32px;
		color: #333;
		line-height: 80px;
	}
	.order-mid .van-tabs__line{
		bottom: 0;
		background-color: #ff5e46;
	}
</style>
