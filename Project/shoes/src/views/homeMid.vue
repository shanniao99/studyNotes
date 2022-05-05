<template>
	<div class="mid">
		<van-search v-model="value" shape="round" background="#ff5e46" placeholder="搜索商品名称" />
		<div class="midbox">
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in $store.state.bannerImg" :key="index">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
		<div class="shoeslist">
			<ul>
				<li v-for="v,i in $store.state.itemClass" :key="i"><img :src="v.img">
					<p>{{v.txt}}</p>
				</li>
			</ul>
		</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Search,
		Swipe,
		SwipeItem,
		Lazyload
	} from 'vant';
	Vue.use(Lazyload);
	Vue.use(Search);
	Vue.use(Swipe);
	Vue.use(SwipeItem);

	export default {
		data() {
			return {
				value: '',

			}
		}
	}
</script>

<style>
	.mid {
		width: 750px;
	}

	.van-search {
		width: 750px;
		height: 88px;
		position: fixed;
		top: 88px;
		left: 0;
	}
	.midbox{
		position: fixed;
		top: 176px;
		left: 0;
		bottom: 110px;
		overflow: scroll;
	}
	.van-search__content--round {
		width: 670px;
		height: 55px;
	}

	.van-cell {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.van-icon-search {
		font-size: 30px !important;
		margin-left: 250px;
		color: #b2b2b2;
	}

	.van-field__control {
		font-size: 26px;
		color: #b2b2b2;
	}

	.van-swipe__indicators {
		left: 25%;
		bottom: 20px;
	}

	.van-swipe__indicator {
		width: 12px;
		height: 12px;
	}

	.van-swipe__indicator--active {
		background-color: white;
	}

	.shoeslist {
		width: 750px;
		height: 410px;
		background-color: #EEEEEE;
	}

	.shoeslist ul {
		width: 100%;
		height: 390px;
		background-color: white;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: space-around;
	}

	.shoeslist ul li {
		width: 170px;
		height: 170px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	.shoeslist ul li p{
		font-size: 26px;
		color: #333;
	}
</style>
