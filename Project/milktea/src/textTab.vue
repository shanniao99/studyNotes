<template>
	<div>
		<van-tabs v-model="number" scrollspy sticky>
			<van-tab v-for="v,i in $store.state.drink_list" :key="i" :title="v">
				<div>
					<span>
						<h1>{{v}}</h1>
					</span>
					<div class="list">
						<ul>
							<li v-for="v,i in $store.state.hotdata" :key="i">
								<div class="img"><img :src="v.pic"></div>
								<div class="t_box">
									<div class="t">
										<h2>{{v.tit}}</h2>
										<p>{{v.text}}</p>
									</div>
									<div class="b">
										<b class="rmb">{{v.price}}</b>
										<div class="date">
											<img :src="$store.state.jian" class="jian" style="display: none;"
												@click="minus(i+num*index)"><input readonly type="text" value="0"
												style="display: none;" /><img :src="$store.state.jia" class="jia"
												@click="plus(i+num*index)">
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Tab,
		Tabs,
		Sidebar,
		SidebarItem
	} from 'vant';


	Vue.use(Sidebar);
	Vue.use(SidebarItem);

	Vue.use(Tab);
	Vue.use(Tabs);
	export default {
		data() {
			return {
				number: 0,
			}
		}
	}
</script>

<style>
	.drink_right {
		width: 5.5rem;
		float: right;
		margin: 0 auto;
		position: fixed;
		top: 2.28rem;
		bottom: 2rem;
		left: 2rem;
		overflow: scroll;
	}
	
	.drink_right span {
		height: .9rem;
		line-height: .9rem;
	
	}
	
	.drink_right span h1 {
		font-size: .28rem;
		font-family: "苹方";
		color: #333333;
	}
	
	.list ul {
		display: flex;
		flex-direction: column;
	
	}
	
	.list ul li {
		height: 1.5rem;
		margin-bottom: .5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.img {
		width: 1.5rem;
		height: 1.5rem;
	}
	
	.img img {
		width: 100%;
	}
	
	.t_box {
		width: 3.6rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.t h2,
	.b b {
		font-family: "黑体";
		font-size: .32rem;
		color: #0f0f0f;
	}
	
	.t p {
		font-size: .24rem;
		font-family: "苹方";
		color: #666;
	}
	
	.b {
		height: .32rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.date {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.date input {
		width: .32rem;
		height: .32rem;
		outline: none;
		border: none;
		font-size: .32rem;
		color: #fdd100;
		text-align: center;
	}
	
	.date img {
		width: .32rem;
		height: .32rem;
	}
	.van-tabs {
		width: 7.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.van-sticky {
		width: 1.8rem;
		position: fixed;
		top: 1.8rem;
		left: 0;
		overflow: scroll;
	}

	.van-tabs__content {
		width: 5.5rem;
		position: fixed;
		top: 1.8rem;
		right: 0;
		bottom: 1rem;
		overflow: scroll;
	}

	.van-tabs__nav {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.van-tab {
		height: .9rem;
	}
	.van-tabs--line .van-tabs__wrap{
		height: auto;
		background-color: #f4f5f7;
	}
	.van-tab{
		font-size: .28rem;
		font-family: "苹方";
		color: #999999;
	}
	.van-tabs__line{
		display: none;
	}
</style>
