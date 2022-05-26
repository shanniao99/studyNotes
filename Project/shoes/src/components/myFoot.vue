<template>
	<div class="foot-box">
		<div class="week-box">
			<div class="week">
				<ul>
					<li>日</li>
					<li>一</li>
					<li>二</li>
					<li>三</li>
					<li>四</li>
					<li>五</li>
					<li>六</li>
				</ul>
			</div>
			<van-cell title="选择单个日期" :value="date" @click="show = true" />
			<van-calendar v-model="show" @confirm="onConfirm"/>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Calendar
	} from 'vant';

	Vue.use(Calendar);
	export default {
		data() {
			return {
				show: false,
				date:''
			}
		},
		methods: {
			onConfirm(date) {
				this.show = false;
				this.date = this.formatDate(date);
			},
		},

	}
</script>

<style>
	.foot-box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.week-box {
		width: 750px;
		height: 85px;
	}

	.week {
		width: 670px;
		height: 85px;
		margin: 0 auto;
	}

	.week ul {
		display: flex;
		justify-content: space-between;
	}

	.week ul li {
		width: 94px;
		height: 85px;
		text-align: center;
		line-height: 85px;
		font-size: 30px;
		color: #999;
		font-family: "苹方";
	}
	.van-calendar__header{
		display: none;
	}
</style>
