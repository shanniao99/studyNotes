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
			<div class="con">
				<Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" v-on:isToday="clickToday"></Calendar>
			</div>
		</div>

	</div>
</template>

<script>
	import Calendar from 'vue-calendar-component';
	export default {
		components: {
			Calendar
		},
		data() {
			return {};
		},
		created() {},
		methods: {
			clickDay(data) {
				console.log(data); //选中某天
			},
			changeDate(data) {
				console.log(data); //左右点击切换月份
			},
			clickToday(data) {
				console.log(data); // 跳到了本月
			}
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
	.wh_container[data-v-2ebcbc83] {
		max-width: 750px;
	}
</style>
