<template>
	<div class="cart_box">
		<van-swipe-cell>
			<van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>
			<van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
				thumb="$store.state.shoppingcart[0].img" />
			<template #right>
				<van-button square text="删除" type="danger" class="delete-button" />
			</template>
		</van-swipe-cell>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		SwipeCell,Cell,Button,Card,Checkbox, CheckboxGroup
	} from 'vant';
	
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(SwipeCell);
	Vue.use(Cell);
	Vue.use(Button);
	Vue.use(Card);
	export default{
		data(){
			return{
				checked:true
			}
		},
		methods:{
			
		},
	}
</script>

<style>
	.cart_box{
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 110px;
	}
	.van-checkbox{
		width: 70px;
		height: 240px;
		justify-content: center;
		float: left;
	}
	.van-checkbox__icon .van-icon{
		width: 32px;
		height: 32px;
		line-height: 32px;
		font-size: 30px;
	}
	.van-card{
		float: right;
	}
	.van-card,.van-card__header{
		width: 680px;
		height: 240px;
	}
</style>
