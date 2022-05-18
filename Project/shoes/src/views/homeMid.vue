<template>
	<div class="mid">
		<div class="search">
			<div class="search_box">
			<input type="text" placeholder="搜索商品名称"/>
			<span class="iconfont icon-sousuo"></span>
			</div>
		</div>
		<div class="midbox">
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in $store.state.bannerImg" :key="index">
					<img v-lazy="image" />
				</van-swipe-item>
			</van-swipe>
			<div class="shoeslist">
				<ul>
					<li v-for="v,i in $store.state.itemClass" :key="i" @click="items(i)"><img :src="v.img" >
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
								<li v-for="v,index in $store.state.recommend[i]" :key="index" @click="jingpin(i,index)">
									<img :src="v.img">
									<div class="recom_info">
										<span>{{v.txt}}</span>
										<span>￥{{v.price}}</span>
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
										<span>{{v.price}}</span>
									</div>
								</li>
							</ul>
						</van-swipe-item>
					</van-swipe>
				</div>
			</div>
			<div class="newPro">
				<div class="re_top">
					<div class="top_L">
						<span class="iconfont icon-shuxian"></span>
						<h2>新品优选</h2>
					</div>
					<div class="top_R">
						<p>更多<span class="iconfont icon-youjiantou_huaban"></span></p>
					</div>
				</div>
				<van-swipe @change="onChange">
					<van-swipe-item v-for="(item,index) in [1,2,3]" :key="index">
						<ul>
							<li v-for="v,i in $store.state.newPro[index]" :key="i">
								<img :src="v.img">
								<div class="newPro_info">
									<span>{{v.txt}}</span>
									<span>{{v.price}}</span>
								</div>
							</li>
						</ul>
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="morePro">
				<div class="re_top">
					<div class="top_L">
						<span class="iconfont icon-shuxian"></span>
						<h2>新品优选</h2>
					</div>
				</div>
				<div class="more_list">
					<ul>
						<li v-for="v,i in $store.state.morePro" :key="i">
							<img :src="v.img">
							<div class="morePro_info">
								<span>{{v.txt}}</span>
								<div class="twoPrice">
									<span>{{v.price}}</span><span>{{v.oldprice}}</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
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
	Vue.use(Lazyload);
	Vue.use(Swipe);
	Vue.use(SwipeItem);

	export default {
		data() {
			return {
				value: '',
				current: 0

			}
		},
		methods: {
			onChange(index) {
				this.current = index;
			},
			items(index){
				this.$router.push({
					name:"items",
					params:{
						title:this.$store.state.itemClass[index].txt,
					}
				})
			},
			jingpin(i,num){
				this.$router.push({
					name:'details',
					params:{
						list:this.$store.state.recommend[i][num]
					}
				})
			},
		}
	}
</script>

<style>
	.mid {
		width: 750px;
		position: fixed;
		top: 87px;
		left: 0;
	}

	.search {
		width: 750px;
		height: 90px;
		background-color: #ff5e46;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search_box{
		width: 670px;
		height: 56px;
		position: relative;
	}
	.search_box input{
		box-sizing: border-box;
		width: 670px;
		height: 56px;
		border-radius: 50px;
		outline: none;
		border: none;
		padding-left: 275px;
		font-size: 26px;
		color: #b2b2b2;
	}
	.search_box span{
		font-size: 32px;
		color: #b2b2b2;
		position: absolute;
		top:12px;
		left:240px;
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
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.recom_info span:first-child {
		font-size: 20px;
		color: #666666;
	}

	.recom_info span:last-child {
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

	.re_down,
	.my-swipe {
		width: 710px;
		height: 450px;
		margin: 0 auto;
	}

	.sp_ul {
		width: 710px !important;
		display: flex !important;
		justify-content: space-between !important;
	}

	.sp_ul li {
		width: 345px !important;
		height: 400px !important;
	}

	.sp_ul li img {
		width: 345px !important;
		height: 265px !important;
	}

	.sp_info {
		box-sizing: border-box;
		width: 345px;
		height: 135px;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.sp_info span:first-child {
		font-size: 28px;
		color: #666666;
	}

	.sp_info span:last-child{
		font-size: 32px;
		color: #FF5E46;
	}

	.re_down .van-swipe__indicator {
		background-color: #ff5a46 !important;
	}

	.newPro {
		width: 750px;
		height: 408px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-bottom: 20px;
	}

	.newPro .van-swipe {
		height: 320px;
	}

	.newPro .van-swipe-item ul li {
		width: 225px;
		height: 320px;
	}

	.newPro .van-swipe-item ul li img {
		width: 225px;
		height: 210px;
	}

	.newPro .van-swipe-item ul {
		width: 710px;
		margin: 0 auto;
		display: flex;
	}

	.newPro .van-swipe-item ul li .newPro_info {
		width: 225px;
		height: 110px;
		box-sizing: border-box;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.newPro .van-swipe-item ul li .newPro_info span:first-child,
	.morePro_info span {
		font-size: 28px;
		color: #666;
	}

	.newPro_info span:last-child,
	.morePro_info .twoPrice span {
		font-size: 32px;
		color: #ff5e46;
	}

	.custom-indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 5px;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.1);
	}

	.morePro {
		width: 750px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.more_list {
		width: 710px;
		margin: 0 auto;
	}

	.more_list ul {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
	}

	.more_list ul li {
		width: 345px;
		height: 420px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.morePro_info {
		width: 345px;
		height: 135px;
		box-sizing: border-box;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.more_list ul li img {
		width: 345px;
		height: 265px;
	}

	.twoPrice {
		width: 170px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.morePro_info .twoPrice span:nth-child(2) {
		font-size: 26px;
		color: #999999;
		text-decoration: line-through;
	}
</style>
