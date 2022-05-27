<template>
	<Calendar ref="calendar" @month-change="updateMonth" @day-change="updateDay" />
</template>

<script>
	import Calendar from 'vue-calendar-component';
	export default {
		data() {
			return {

			}
		},
		mounted() {
			// this.current=this.$refs.calendar.month
		},
		methods: {
			//更新月份
			updateMonth() {
				// console.log('month',month)
			},
			//更新选择日期
			updateDay() {
				// console.log('day',day)
			}
		},
		components: {
			Calendar
		},
	}
</script>

<style>

</style>
