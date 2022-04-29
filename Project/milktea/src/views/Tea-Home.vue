<template>
	<div class="box">
		<header>
			<div class="head">
				<span>奶茶先生+</span>
				<right></right>
			</div>
		</header>
		<div class="mid">
			<div class="banner">
				<van-swipe :autoplay="3000">
					<van-swipe-item v-for="(image, index) in $store.state.images" :key="index">
						<img v-lazy="image" style="width: 7.5rem; height: 4rem;" />
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="icons">
				<ul>
					<li style="border-right: 1px solid #999999;">
						<img src="../assets/vip.png">
						<p>领取会员卡</p>
					</li>
					<li style="border-right: 1px solid #999999;">
						<img src="../assets/ziti.png">
						<p>自提/外卖</p>
					</li>
					<li>
						<img src="../assets/bala.png">
						<p>我的订单</p>
					</li>
					<li style="border-right: 1px solid #999999;">
						<img src="../assets/ma.png">
						<p>会员付款码</p>
					</li>
					<li style="border-right: 1px solid #999999;">
						<img src="../assets/lingquan.png">
						<p>领券中心</p>
					</li>
					<li>
						<img src="../assets/youhui.png">
						<p>我的优惠券</p>
					</li>
				</ul>
			</div>
			<div class="f_img">
				<van-swipe :autoplay="3000">
					<van-swipe-item v-for="(image, index) in $store.state.Img" :key="index">
						<img v-lazy="image" style="width: 7.5rem; height: 3rem;" />
					</van-swipe-item>
				</van-swipe>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Swipe,
		SwipeItem,
		Lazyload
	} from 'vant';

	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Lazyload);

	export default {
		data() {
			return {
				
			};
		},
		components:{
			right:()=>import("../components/rightIcon.vue")
		}
	}
</script>

<style>
	.banner {
		width: 7.5rem;
		height: 4rem;
	}

	.van-swipe__indicator {
		width: .16rem;
		height: .16rem;
		border-radius: 50%;
		background-color: #333333;
		background-color: white;
	}

	.icons {
		width: 7.5rem;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icons ul {
		width: 7.5rem;
		height: 3.4rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-between;
	}

	.icons ul li {
		width: 2.48rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	.icons ul li p {
		font-size: .2rem;
		font-family: "苹方";
		color: #000;
		padding-top: .3rem;
	}

	.icons ul li img {
		width: 25%;
	}

	.f_img {
		width: 7.5rem;
		height: 3rem;
	}
</style>
