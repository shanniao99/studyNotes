<template>
	<div class="box">
		<heads :title="$route.params.title"></heads>
		<div class="item_box">
			<van-tabs v-model="active" animated title-active-color="#ff5e46">
				<van-tab v-for="v,i in $store.state.items_nav" :key="i">
					<template #title>
						{{v.tit}}
						<div class="icons" v-if="v.show" >
							<van-icon class-prefix="icon" name="shangsanjiaoxing" />
							<van-icon class-prefix="icon" name="xiasanjiaoxing"/>
						</div>
					</template>
					<div class="items">
						<ul>
							<li v-for="item,index in $store.state.items" :key="index">
								<img :src="item.img">
								<div class="items_info">
									<h3>{{item.txt}}</h3>
									<div class="info_txt">
										<div class="datails">
											<p class="price"><span>￥{{item.price}}</span><span>{{item.oldprice}}</span>
											</p>
											<p class="lookbuy"><span>{{item.buy}}人购买</span><span>{{item.look}}浏览</span>
											</p>
										</div>
										<button>立即购买</button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Tab,
		Tabs,
		Icon
	} from 'vant';


	Vue.use(Icon);
	Vue.use(Tab);
	Vue.use(Tabs);
	export default {
		data() {
			return {
				active: 0,
				turn:true
			}
		},
		methods:{
			
		},
		components: {
			heads: () => import("../components/headTit.vue")
		},
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	.box {
		width: 750px;
		margin: 0 auto;
	}

	.item_box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.van-tabs__wrap {
		width: 750px;
		height: 80px !important;
		border-bottom: 1px solid #eee;
		position: fixed;
		top: 88px;
		left: 0;
		background-color: white;
		z-index: 1;
	}

	.van-tabs__content--animated {
		width: 750px;
		position: fixed;
		top: 168px;
		left: 0;
		bottom: 0;
		overflow: scroll;
		margin: 0 auto;
	}

	.van-tabs__nav--line {
		box-sizing: border-box;
		padding-bottom: 0;
	}

	.van-tabs__line {
		display: none;
	}

	.van-tab {
		font-size: 32px;
		color: #666;
		line-height: none !important;

	}

	.van-tab__text--ellipsis {
		overflow: inherit;
	}

	.van-tab span {
		display: flex;
		align-items: center;
	}

	.icons {
		width: 32px;
		display: flex;
		flex-direction: column;
	}
	.icons .shang_on,.icon .xia_on{
		color:#ff5e46 ;
	}
	.icon .xia_off,.icons .shang_off{
		color: #666;
	}
	.icon {
		font-size: ;
	}

	.items {
		width: 710px;
		margin: 0 auto;
	}

	.items ul {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.items ul li {
		width: 670px;
		height: 260px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.items ul li img {
		width: 220px;
		height: 220px;
	}

	.items ul li .items_info {
		width: 430px;
		height: 220px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.items_info h3 {
		font-size: 28px;
		color: #666666;
	}

	.info_txt {
		width: 430px;
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.info_txt .datails {
		width: 200px;
		height: 100px;
		display: flex;
		flex-direction: column;
	}

	.datails p {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.price span:first-child {
		font-size: 36px;
		color: #ff5e46;
	}

	.price span:last-child {
		font-size: 26px;
		color: #999;
		text-decoration: line-through;
	}

	.lookbuy span {
		font-size: 22px;
		color: #999;
	}

	.info_txt button {
		width: 140px;
		height: 50px;
		border-radius: 50px;
		background-color: #ff5e46;
		border: none;
		font-size: 24px;
		color: white;
	}
</style>
