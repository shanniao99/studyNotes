<template>
	<div class="inte-box">
		<div class="points">
			<span>当前积分</span>
			<h2 ref="points">{{$store.state.points}}</h2>
		</div>
		<div class="coupon">
			<ul>
				<li v-for="v,i in $store.state.integral" :key="i">
					<div class="coupon-L">
						<span>￥<h1>{{v.num}}</h1></span>
					</div>
					<div class="coupon-R">
						<div class="R-txt">
							<p>
								<span>{{v.num}}元优惠券</span>
								<span>有效期到{{v.time}}</span>
							</p>
							<span>{{v.require}}积分</span>
						</div>
						<van-button :disabled="points>=v.require?false:true" @click="onchange(i)">
							{{points>=v.require?v.now:v.notPonit}}</van-button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Button,Toast 
	} from 'vant';

	Vue.use(Button);
	Vue.use(Toast);
	export default {
		data() {
			return {
				points: 0
			}
		},
		created() {
			this.$nextTick(() => {
				this.points = this.$store.state.points;
			})
		},
		methods: {
			onchange(i) {
				if(this.points>=this.$store.state.integral[i].require){
					this.$store.state.points=this.points-this.$store.state.integral[i].require;
					this.points = this.$store.state.points;
					Toast('兑换成功，还剩'+this.points+"积分");
				}
			},
		},
	}
</script>

<style scoped>
	.inte-box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.points {
		width: 750px;
		height: 160px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.points span {
		font-size: 32px;
		color: #666666;
	}

	.points h2 {
		font-size: 84px;
		color: #ff5e46;
	}

	.coupon {
		width: 710px;
		margin: 0 auto;
		margin-top: 80px;
	}

	.coupon ul li {
		width: 710px;
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.coupon-L {
		width: 230px;
		height: 140px;
		background: url(../assets/coupon_bg.png) no-repeat;
		background-size: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.coupon-L span {
		font-size: 56px;
		color: #fff;
		font-family: "苹方";
		display: flex;
		align-items: baseline;
		justify-content: center;
	}

	.coupon-L span h1 {
		font-size: 82px;
	}

	.coupon-R {
		width: 470px;
		height: 140px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.coupon-R button {
		width: 145px;
		height: 60px;
		background: none;
		border: 2px solid #ff5e46;
		box-sizing: border-box;
		border-radius: 50px;
		font-size: 26px;
		color: #ff5e46;
		font-family: "黑体";
	}

	.R-txt span {
		font-size: 28px;
		color: #ff5e46;
		font-family: "苹方";
	}

	.R-txt p {
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.R-txt p span {
		font-size: 28px;
		color: #666666;
		font-family: "苹方";
	}
</style>
