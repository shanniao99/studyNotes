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
			<div class="recommend">
				<div class="re_top">
					<div class="top_L">
						<span class="iconfont icon-shuxian"></span>
						<h2>精品推荐</h2>
					</div>
					<div class="top_R">
						<p>更多<span class="iconfont icon-youjiantou_huaban"></span></p>
					</div>
				</div>
				<div class="information">
					<van-swipe :loop="false" class="info_box">
						<van-swipe-item v-for="(item,i) in [1,2,3]" :key="item" class="changeImg">
							<ul>
								<li v-for="v,index in $store.state.recommend[i]" :key="index">
									<img :src="v.img">
									<div class="recom_info">
										<span>{{v.txt}}</span>
										<p>{{v.price}}</p>
									</div>
								</li>
							</ul>
						</van-swipe-item>
					</van-swipe>
				</div>
			</div>
			<div class="special">
				<div class="re_top">
					<div class="top_L">
						<span class="iconfont icon-shuxian"></span>
						<h2>特惠清仓</h2>
					</div>
					<div class="top_R">
						<p>更多<span class="iconfont icon-youjiantou_huaban"></span></p>
					</div>
				</div>
				<div class="re_down">
					<van-swipe class="my-swipe" :autoplay="3000" indicator-color="#ff5a46">
						<van-swipe-item v-for="(item,index) in [1,2]" :key="item">
							<ul class="sp_ul">
								<li v-for="v,i in $store.state.special[index]" :key="i">
									<img :src="v.img">
									<div class="sp_info">
										<span>{{v.txt}}</span>
										<p>{{v.price}}</p>
									</div>
								</li>
							</ul>
						</van-swipe-item>
					</van-swipe>
				</div>
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

	.midbox {
		width: 750px;
		position: fixed;
		top: 176px;
		left: 0;
		bottom: 110px;
		overflow: scroll;
		background-color: #EEEEEE;
	}

	.van-swipe,
	.van-swipe img {
		width: 750px;
		height: 300px;
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
		left: 50%;
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
		height: 390px;
		margin-bottom: 20px;
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

	.shoeslist ul li img {
		width: 100px;
		height: 100px;
	}

	.shoeslist ul li p {
		font-size: 26px;
		color: #333;
	}

	.recommend {
		width: 750px;
		height: 410px;
		background-color: white;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.re_top {
		width: 710px;
		height: 40px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.top_L {
		width: 160px;
		display: flex;
		align-items: center;
	}

	.top_L span {
		font-size: 32px;
		color: #FF5E46;
	}

	.top_L h2 {
		font-size: 32px;
		color: #333;
	}

	.top_R p {
		font-size: 24px;
		color: #666666;
	}

	.top_R p span {
		font-size: 28px;
	}

	.info_box {
		width: 750px;
		height: 320px;
	}

	.changeImg {
		width: 675px !important;
		height: 320px;
	}

	.van-swipe-item ul {
		width: 675px;
		height: 320px;
		display: flex;
		justify-content: space-around;
	}

	.van-swipe-item ul li {
		width: 200px;
		height: 320px;
		display: flex;
		flex-direction: column;
	}

	.van-swipe-item ul li img {
		width: 200px;
		height: 210px;
	}

	.recom_info {
		box-sizing: border-box;
		width: 200px;
		height: 110px;
		border: 1px solid #EEEEEE;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.recom_info span {
		font-size: 20px;
		color: #666666;
	}

	.recom_info p {
		font-size: 28px;
		color: #ff5e46;
	}

	.special {
		width: 750px;
		height: 530px;
		margin-bottom: 20px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.re_down,.my-swipe {
		width: 710px;
		height: 450px;
		margin: 0 auto;
	}
	.sp_ul{
		width: 710px !important;
		display: flex !important;
		justify-content: space-between !important;
	}
	.sp_ul li{
		width: 345px !important;
		height: 400px !important;
	}
	.sp_ul li img{
		width: 345px !important;
		height: 265px !important;
	}
	.sp_info{
		box-sizing: border-box;
		width: 345px;
		height: 135px;
		border: 1px solid #EEEEEE;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.sp_info span{
		font-size: 28px;
		color: #666666;
	}
	.sp_info p{
		font-size: 32px;
		color: #FF5E46;
	}
	.re_down .van-swipe__indicator{
		background-color: #ff5a46 !important;
	}
</style>
