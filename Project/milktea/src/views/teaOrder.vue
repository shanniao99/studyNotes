<template>
	<div class="box">
		<header>
			<div class="head">
				<span>订单</span>
				<right></right>
			</div>
		</header>
		<div class="title">
			<ul>
				<li v-for="v,i in $store.state.nav" :key="i" :class="$store.state.num===i?'on':''" @click="move(i)">
					{{v.tit}}
					<div :class="$store.state.num==i?'block':''"></div>
				</li>
			</ul>
		</div>
		<component :is="changeTab"></component>
	</div>
</template>

<script>
	import all from "../components/allOrder.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {
			move(i) {
				this.$store.state.num = i;
				this.$store.state.names = this.$store.state.nav[i].name;
			}
		},
		components: {
			all,
			buy: () => import("../components/buyOrder.vue"),
			complated: () => import("../components/comPleted.vue"),
			refunded: () => import("../components/reFunded.vue"),
			right:()=>import("../components/rightIcon.vue")
		},
		computed: {
			changeTab() {
				return this.$store.state.names;
			}
		}
	}
</script>

<style>
	.title {
		width: 7.5rem;
		height: 1.2rem;
		margin: 0 auto;
		position: fixed;
		top: 0.88rem;
		left: 0;
		line-height: .9rem;
		background-color: #f4f5f7;
	}

	.title ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: white;
	}

	.title ul li {
		font-size: .28rem;
		font-family: "黑体";
		color: #333333;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title ul li.on {
		color: #fdd100;
	}

	.block {
		width: .3rem;
		height: 0.05rem;
		background-color: #fdd100;
	}

	.order {
		background-color: #f4f5f7;
		position: fixed;
		top: 2.08rem;
		bottom: 1rem;
		overflow: scroll;
	}

	.order_box {
		width: 7.5rem;
		height: 2.6rem;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		margin-bottom: .3rem;
	}

	.one {
		width: 7.5rem;
		height: .9rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		border-bottom: 0.01rem solid #d6d6d6;
	}

	.one_l {
		width: 5.2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.waimai {
		width: .8rem;
		height: .4rem;
		border: 0.01rem solid #fdd100;
		border-radius: .05rem;
		font-family: "苹方";
		font-size: .26rem;
		color: #fdd100;
		text-align: center;
	}

	.one_l span {
		font-size: .26rem;
		font-family: "苹方";
		color: #333333;
	}

	.one_r {
		font-family: "苹方";
		font-size: .26rem;
		color: #9a9a9a;
	}

	.two {
		width: 7.1rem;
		height: 1.7rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.shopping {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.shopping h2 {
		width: 5.5rem;
	}

	.shopping h2,
	.shopping span,
	.shopping span input,
	button {
		font-family: "苹方";
		font-size: .26rem;
		color: #333333;
	}

	.shopping h2 span {
		font-family: "苹方";
		font-size: .18rem;
		color: #999;
		padding-left: .3rem;
	}

	.shopping input {
		width: .6rem;
		outline: none;
		border: none;
	}

	.time {
		font-size: .18rem;
		color: #9A9A9A;
	}

	button {
		width: 1.8rem;
		height: .6rem;
		border: 0.02rem solid #9A9A9A;
		background: none;
	}

	.txt {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#btn {
		border: none;
		margin-left: 2.85rem;
	}
</style>
