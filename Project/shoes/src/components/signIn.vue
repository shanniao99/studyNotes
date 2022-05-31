<template>
	<div class="sign-box">
		<div class="sign-top">
			<ul>
				<li v-for="v,i in week" :key="i" ref="days">
					<span>{{v.time}}</span>
					<div class="circle"><span>+{{v.points}}</span></div>
				</li>
			</ul>
		</div>
		<div class="signLine">
			<div class="line-on">
				<div class="line-box">
					<div class="signtxt">
						<p>已经连续签到<span>{{$store.state.signdays}}</span>天</p>
						<div class="points">积分：<span ref="integral">{{$store.state.points}}</span></div>
					</div>
					<div class="line">

						<div class="lint-top">
							<span>1000</span>
							<span>2000</span>
						</div>
						<van-slider v-model="value" bar-height="10px" active-color="#eecf8b" disabled button-size="0"
							:step="0.1" />
						<div class="line-down">
							<span>lv2</span>
							<span>lv3</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="Task-box">
			<div class="task-top">
				<span class="iconfont icon-shuxian"></span>
				<h2>日常任务</h2>
			</div>
			<div class="task-down">
				<ul>
					<li v-for="v,i in $store.state.signTask" :key="i">
						<div class="task-txt">
							<div class="txt-left">
								<div class="task">
									<p>{{v.txt}}</p>
									<span>奖励积分+{{v.point}}</span>
								</div>
								<p><span :class="v.finished>0?'on':''">{{v.finished}}</span>/<span>{{v.num}}</span></p>
							</div>
							<button>去完成</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<van-popup v-model="show" closeable :close-on-click-overlay="false">
			<div class="popup-box">
				<div class="outside">
					<div class="inside">
						第<span>{{$store.state.signdays>0?$store.state.signdays:1}}</span>天
					</div>
				</div>
				<div class="popup-down">
					<h2>签到有礼</h2>
					<h3>连续签到<span>7</span>天可领取双倍积分</h3>
					<button @click="signIn">立即签到</button>
				</div>
			</div>
		</van-popup>
		<van-popup v-model="showTwo" closeable>
			<div class="popup-box">
				<div class="success">
					<span class="iconfont icon-chenggong"></span>
				</div>
				<h1>签到成功</h1>
			</div>
		</van-popup>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Slider,
		Toast,
		Popup
	} from 'vant';

	Vue.use(Popup);
	Vue.use(Slider);
	Vue.use(Toast);
	export default {
		data() {
			return {
				value: this.$store.state.points%1000/10,
				show: false,
				showTwo: false,
				week: [{
						time: "一",
						points: 5
					},
					{
						time: "二",
						points: 5
					},
					{
						time: "三",
						points: 5
					},
					{
						time: "四",
						points: 5
					},
					{
						time: "五",
						points: 5
					},
					{
						time: "六",
						points: 5
					},
					{
						time: "日",
						points: 10
					},
				]
			}
		},
		created() {
			this.$nextTick(() => {
				this.$store.state.times++;
				if (this.$store.state.times++ <= 1) {
					
					if(this.$store.state.signdays>=7){
						this.$refs.days.forEach(v=>{
							v.className='';
						})
						this.$store.state.signdays=0;
					}else{
						for(let i=0;i<this.$store.state.signdays;i++){
							this.$refs.days[i].className='on';
							this.$store.state.points+=this.week[i].points
						}
					}
					
					setTimeout(() => {
						this.show = true;
					}, 1000)
				} else {
					let days = new Date().getDay();
					if (days == 0) {
						days = days + 6;
					} else {
						days = days - 1;
					}
					this.$refs.days[days].className = "on";
				}
			})


		},
		methods: {
			signIn() {
				this.showTwo = true;
				this.show = false;
				let days = new Date().getDay();
				if (days == 0) {
					days = days + 6;
				} else {
					days = days - 1;
				}
				this.$refs.days[days].className = "on";
				this.$store.state.signdays++; //连续签到天数
				this.$store.state.points = Number(this.$store.state.points) + this.week[days].points;
			},
		}
	}
</script>

<style>
	.sign-box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.sign-top {
		width: 670px;
		height: 120px;
		margin: 0 auto;
	}

	.sign-top ul {
		display: flex;
		justify-content: space-between;
	}

	.sign-top ul li {
		width: 90px;
		height: 120px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.sign-top ul li span {
		font-size: 30px;
		color: #999999;
		font-family: "苹方";
	}

	.sign-top ul li .circle {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sign-top ul li .circle span {
		font-size: 26px;
		color: #333;
		font-family: "苹方";
	}

	.sign-top ul li.on .circle {
		background-color: #ff5e46;
	}

	.sign-top ul li.on .circle span {
		color: white;
	}

	.signLine {
		width: 670px;
		height: 315px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.line-on {
		width: 670px;
		height: 255px;
		background-color: #ff5e46;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.line-box {
		width: 635px;
		height: 215px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.signtxt {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.signtxt p {
		font-size: 26px;
		color: #fff;
		font-family: "苹方";
	}

	.signtxt span {
		font-size: 40px;
	}

	.line-box .line {
		width: 635px;
		height: 130px;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.points {
		font-size: 26px;
		color: white;
	}

	.points span {
		font-size: 30px;
		color: #fff;
	}

	.line-box .line .van-slider--disabled {
		opacity: 1;
	}

	.lint-top,
	.line-down {
		width: 635px;
		display: flex;
		justify-content: space-between;
	}

	.lint-top span,
	.line-down {
		font-size: 32px;
		color: #fff;
	}

	.custom-button {
		width: 30px;
		color: #fff;
		font-size: 16px;
		line-height: 18px;
		text-align: center;
		background-color: #eecf8b;
		border-radius: 100px;
	}

	.Task-box {
		width: 750px;
		margin: 0 auto;
	}

	.task-top {
		width: 675px;
		height: 60px;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.task-top span {
		font-size: 36px;
		color: #ff5e46;
	}

	.task-top h2 {
		font-size: 32px;
		color: #333;
	}

	.task-down {
		width: 750px;
	}

	.task-down ul li {
		width: 750px;
		height: 100px;
		border-bottom: 1px solid #eee;
	}

	.task-txt {
		width: 670px;
		height: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.txt-left {
		width: 340px;
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.task {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.task p,
	.txt-left p {
		font-size: 28px;
		color: #666;
		font-family: "苹方";
	}

	.txt-left p span.on {
		color: #ff5e46;
	}

	.task span {
		font-size: 22px;
		color: #666;
		font-family: "苹方";
	}

	.task-txt button {
		width: 130px;
		height: 50px;
		border-radius: 50px;
		background-color: #ff5e46;
		border: none;
		font-size: 28px;
		color: #fff;
		font-family: "苹方";
	}

	.sign-box .van-popup,
	.sign-box .popup-box {
		width: 300px;
		height: 400px;
	}

	.sign-box .popup-box {
		background: url(../assets/bg.jpg) no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	.outside {
		width: 100px;
		height: 100px;
		box-shadow: orangered 0px 0px 10px;
		border-radius: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inside {
		width: 85px;
		height: 85px;
		box-shadow: coral 0px 0px 10px inset;
		border-radius: 50px;
		font-size: 26px;
		color: #fff;
		text-align: center;
		line-height: 80px;
		text-shadow: 2px 2px 2px #FF0000;
	}

	.inside span {
		font-size: 40px;
	}

	.popup-down {
		width: 100%;
		height: 250px;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.popup-down h2 {
		font-size: 28px;
		color: #ff5e46;
	}

	.popup-down h3 {
		font-size: 22px;
		color: #666;
	}

	.popup-down h3 span {
		font-size: 32px;
		color: #ff5e46;
	}

	.popup-down button {
		width: 180px;
		height: 45px;
		border-radius: 50px;
		background-color: #ff5e46;
		font-size: 28px;
		color: white;
		border: none;
	}

	.van-popup__close-icon {
		color: #333;
	}

	.success {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.success span {
		font-size: 100px;
		color: #ff5e46;
	}

	.popup-box h1 {
		height: 150px;
		font-size: 40px;
		color: #ff5e46;
	}
</style>
