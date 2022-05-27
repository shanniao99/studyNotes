<template>
	<div class="sign-box">
		<div class="sign-top">
			<ul>
				<li v-for="v,i in week" :key="i">
					<span>{{v.time}}</span>
					<div class="circle"><span>+{{v.points}}</span></div>
				</li>
			</ul>
		</div>
		<div class="signLine">
			<div class="line-on">
				<div class="line-box">
					<div class="signtxt">
						<p>已经连续签到<span>0</span>天</p>
						<div class="points">积分：<span>1123</span></div>
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
								<p><span>{{v.finished}}</span>/<span>{{v.num}}</span></p>
							</div>
							<button>去完成</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Slider,
		Toast
	} from 'vant';

	Vue.use(Slider);
	Vue.use(Toast);
	export default {
		data() {
			return {
				value: 12.3,
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
		methods: {
			onChange(value) {
				Toast('当前值：' + value);
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

	.sign-top ul li .on {
		background-color: #ff5e46;
	}

	.sign-top ul li .on span {
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

	.task p,
	.txt-left p {
		font-size: 28px;
		color: #666;
		font-family: "苹方";
	}

	.txt-left p span:first-child {
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
</style>
