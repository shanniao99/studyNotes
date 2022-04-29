<template>
	<div class="box">
		<header>
			<div class="head">
				<div><span class="iconfont icon-zuojiantou" @click="turn"></span><span>配送方式</span></div>
				<right></right>
			</div>
		</header>
		<div class="mid">
			<div class="def_ads">
				<p>天心区五一大道717号<span class="iconfont icon-youjiantou"></span></p>
			</div>
			<div class="check">
				<van-tabs v-model="active">
					<van-tab title="门店自取">

					</van-tab>

					<van-tab title="送货上门">
						<div class="my_address"><span>我的收货地址</span></div>
						<div class="address_box" v-for="v,i in $store.state.delivers" :key="i">
							<div style="width: 6.6rem; height: 1.05rem; display: flex;flex-direction: column;justify-content: space-around;" @click="shows(i)">
								<div class="name_num">
									<h2>{{v.name}}</h2><span>{{v.phone}}</span>
								</div>
								<div class="all_ads">
									<div class="Adefault" v-if="v.Adefault">默认地址</div><span>{{v.address}}</span>
								</div>
							</div>
							<div class="gou" @click="edit(i)"><span class="iconfont icon-bianji"></span></div>
						</div>
					</van-tab>
				</van-tabs>
			</div>
		</div>
		<div class="add_ads" @click="add">
			新增地址
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Tab,
		Tabs,
		AddressList
	} from 'vant';

	Vue.use(AddressList);
	Vue.use(Tab);
	Vue.use(Tabs);
	export default {
		data() {
			return {
				active: 1,

			}
		},
		components: {
			right: () => import("../components/rightIcon.vue")
		},
		methods: {
			turn() {
				this.$router.go(-1);
				this.$store.state.bool = true;
			},
			shows(i) {
				this.$store.state.show = false;
				this.$store.state.bool = true;
				this.$router.push({
					name: "food",
					params: {
						username: this.$store.state.delivers[i].name,
						phone: this.$store.state.delivers[i].phone,
						address: this.$store.state.delivers[i].address,
					}
				})
			},
			add() {
				this.$router.push({
					name: "add",
				})
			},
			edit(i) {
				this.$router.push({
					name:"add",
					params: {
						index:i,
						username: this.$store.state.delivers[i].name,
						phone: this.$store.state.delivers[i].phone,
						address: this.$store.state.delivers[i].address,
						Adefault:this.$store.state.delivers[i].Adefault,
					}
				})
			}
		}
	}
</script>

<style>
	@import url("../font/font_icon/iconfont.css");

	.mid {
		width: 7.5rem;
		margin: 0 auto;
		position: fixed;
		top: 0.88rem;
		bottom: 1rem;
		left: 0;
		overflow: scroll;
	}

	.def_ads {
		width: 7.1rem;
		height: .9rem;
		display: flex;
		align-items: center;
		margin: 0 auto;
	}

	.def_ads p,
	.def_ads p span {
		font-size: .26rem;
		color: #333333;
	}

	.van-tabs--line .van-tabs__wrap {
		width: 7.5rem;
		height: .85rem;
		overflow: hidden;
	}

	.van-tab__text--ellipsis {
		font-size: .32rem;
		overflow: inherit
	}

	.van-tabs__line {
		width: .8rem;
		background-color: #ffca00;
	}

	.van-tab--active {
		color: #FFCA00;
	}

	.my_address {
		width: 7.1rem;
		height: .73rem;
		font-size: .2rem;
		color: #333333;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.address_box {
		width: 7.1rem;
		height: 1.05rem;
		margin: 0 auto;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: .4rem;
	}

	.name_num {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.name_num h2 {
		font-size: .32rem;
		color: #333333;
	}

	.name_num span {
		font-size: .22rem;
		padding-left: .2rem;
		color: #666;
	}

	.all_ads {
		height: .4rem;
		display: flex;
		align-items: center;
	}

	.Adefault {
		width: 1.2rem;
		height: .4rem;
		border-radius: .05rem;
		background-color: #ffca00;
		font-size: .22rem;
		color: white;
		text-align: center;
		line-height: .4rem;
		margin-right: .2rem;
	}

	.all_ads span {
		font-size: .26rem;
		color: #333333;
		font-weight: bold;
	}

	.gou {
		width: .5rem;
		height: 1.05rem;
		text-align: center;
		line-height: 1.05rem;
	}

	.gou span {
		font-size: .36rem;
		color: #FFCA00;
	}

	.add_ads {
		width: 7.1rem;
		height: 1rem;
		margin: 0 auto;
		font-size: .38rem;
		color: white;
		background-color: #FFCA00;
		border-radius: .5rem;
		text-align: center;
		line-height: 1rem;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 111;
	}
</style>
