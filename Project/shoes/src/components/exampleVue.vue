<template>
	<div>
		<!-- 日历容器 展示月或展示周 -->
		<div class="calendar" :class="[!visible?'hidden':'']">
			<!-- 列出周一至周日 -->
			<div class="flex_sb cellbox">
				<p v-for="item in weekList" :key="item.id" class="week">{{item}}</p>
			</div>

			<!-- 左右滑动事件 -->
			<v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" tag="div">
				<!-- 具体日期容器-->
				<div class="flex_sb cellbox border relative" :class="[visible?'row-1':'row-'+weekRow]">
					<!-- 1.日历前方的空缺部分 -->
					<p v-for="item in headDays" :key="item.id" class="grey">{{item}}</p>
					<!-- 2.有效日期 -->
					<p v-for="(item,index) in monthDay[this.month-1]" @click="setDay(index+1)"
						:class="index+1===activeDay?'active':''" class="relative" :key="index">
						{{item}}
					</p>
					<!-- 3.日历后方的空缺部分 -->
					<p v-for="item in tailDays" :key="item.id" class="grey">{{item}}</p>
				</div>
			</v-touch>
		</div>
		<!-- 控制展开 -->
		<div>
			<van-icon name="arrow-down" v-if="!visible" @click="visible=true" />
			<van-icon name="arrow-up" @click="visible=false" v-else />
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Icon
	} from 'vant';

	Vue.use(Icon);
	export default {
		data() {
			return {
				year: '', //年
				month: '', //月
				day: '', //日
				weekList: ['一', '二', '三', '四', '五', '六', '日'],
				monthDay: [31, '', 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

				spaceDay: '', //当月日期前方的空格数
				headDays: [], //上个月月尾
				tailDays: [], //下个月月头

				selectedDay: '',
				activeDay: '', //选中的日期
				visible: false, //判断日历是否展开
				weekRow: 2, //当前周 用于按周切换
				rows: '' //当前月的周数
			}
		},

		created() {
			this.getTheCurrentDate() //获取当前日期（年月日）
			this.getFebruary() //获取二月份天数
			this.getWholeMonth() //获取完整月份日历
			this.defaultShow()
			this.setDay(this.day)
		},
		methods: {
			//判断是否为闰年
			isLeapYear(year) {
				return year % 4 == 0 && year % 100 !== 0 || year % 400 == 0
			},
			getFebruary() {
				let February = this.isLeapYear(this.year) ? 29 : 28
				this.monthDay.splice(1, 1, February)
			},

			//获取当前日期
			getTheCurrentDate() {
				let current = new Date()
				this.year = current.getFullYear()
				this.month = current.getMonth() + 1
				this.day = current.getDate()
			},

			//默认显示周
			defaultShow() {
				//获取当日的行数
				if (!this.visible) {
					this.weekRow = Math.ceil((this.spaceDay + this.day) / 7)
				}
			},

			//获取空格被填充过的完整的月
			getWholeMonth() {
				let firstDay = new Date(this.year, this.month - 1, 1) //获取某年某月的第一天，由于new Date的月份按索引判断，所以-1
				//获取前方空格数
				if (firstDay.getDay() == 0) {
					this.spaceDay = 6
				} else {
					this.spaceDay = firstDay.getDay() - 1
				}
				this.getPrevDays() //补前方空格
				this.getCells() //补后方空格
			},

			//获取上个月的天数 并调用函数补充开头空格
			getPrevDays() {
				//this.month表示的是月份，
				//如果当前月为一月份，获取十二月份的天数并传过去。所以传索引11
				if (this.month == 1) {
					this.getHeadDays(this.monthDay[11])
				} else {
					this.getHeadDays(this.monthDay[this.month - 2])
				}
			},
			//补开头空格
			getHeadDays(end) {
				let headDays = [31, 30, 29, 28, 27, 26, 25, 24, 23, 22] //用于截取的数组 补前方空格
				if (end == 31) {
					this.headDays = headDays.slice(0, this.spaceDay).reverse()
				} else if (end == 30) {
					this.headDays = headDays.slice(1, this.spaceDay + 1).reverse()
				} else if (end == 29) {
					this.headDays = headDays.slice(2, this.spaceDay + 2).reverse()
				} else if (end == 28) {
					this.headDays = headDays.slice(3, this.spaceDay + 3).reverse()
				}
			},
			//获取月份方格数，用于补后方空格 并获取行/重新获取行
			getCells() {
				let cells = this.spaceDay + this.monthDay[this.month - 1]
				//余数不能为0（否则就补一行了）,cells%7获取余数
				//一周有7天，假设余数为2，那么后方没有补的空格就位7-2
				if (7 - cells % 7 !== 7) {
					this.getTailDays(7 - cells % 7)
				} else {
					this.tailDays = []
				}
				//向上取整
				this.rows = Math.ceil(cells / 7)
			},
			//补后方空格
			getTailDays(end) {
				let tailDays = [1, 2, 3, 4, 5, 6, 7] //用于截取的数组 补后方空格
				this.tailDays = tailDays.slice(0, end)
			},

			//选取特定日期
			setDay(day) {
				this.day = day
				this.selectedDay = this.year + '-' + this.month + '-' + this.day
				this.activeDay = day
				this.$emit('day-change', this.selectedDay);
			},

			//左滑 下一个
			onSwipeLeft() {
				//1.展开的情况下 滑动切换月份
				if (this.visible) {
					if (this.month == 12) {
						this.year++
						this.month = 1
					} else {
						this.month++
					}
					this.getWholeMonth()
					this.$emit('month-change', this.month);
				} else {
					//2.未展开的情况下 滑动切换周
					this.getWholeMonth() //先获取当前行
					//当前周小于行数时，切换下一周
					if (this.weekRow < this.rows) {
						this.weekRow++
					} else {
						//当前周等于行数时，切换下一个月份，当前周变成第一周。
						//由于要切到第一周，所以不用获取下个月的行
						if (this.month == 12) {
							this.year++
							this.month = 1
							this.weekRow = 1
						} else {
							this.month++
							this.weekRow = 1
						}
						this.getWholeMonth() //由于更换了月，所以调用该函数补空格
						this.$emit('month-change', this.month);
					}
				}
				this.activeDay = 0 //这样切换月的时候就不会默认选择日期
			},

			//右滑 上一个
			onSwipeRight() {
				//1.展开的情况下 滑动切换月份
				if (this.visible) {
					if (this.month == 1) {
						this.year--
						this.month = 12
					} else {
						this.month--
					}
					this.getWholeMonth()
					this.$emit('month-change', this.month);
				} else {
					//2.未展开的情况下 滑动切换周
					//当前周大于1时，切换上一周
					if (this.weekRow > 1) {
						this.weekRow--
					} else {
						//当前周等于1时，切换上一个月，并把当前周变成上个月的最后一周
						if (this.month == 1) {
							this.year--
							//成功切换到上个月
							this.month = 12
							//调用该函数重新获取行数
							this.getWholeMonth()
							this.weekRow = this.rows
						} else {
							this.month--
							this.getWholeMonth()
							this.weekRow = this.rows
						}
						this.$emit('month-change', this.month);
					}
				}
				this.activeDay = 0
			},
		}
	}
</script>

<style scoped>
	.calendar {
		font-size: .8em;
		width: 80%;
		margin: 0 auto;
		height: auto;
	}

	.flex_sb {
		display: flex;
		justify-content: space-between;
	}

	.grey {
		background-color: rgb(247, 244, 244);
	}

	.relative {
		position: relative;
	}

	.hidden {
		height: 4.8em;
		overflow: hidden;
	}

	.week {
		z-index: 10;
		background: #fff;
	}

	.cellbox {
		flex-wrap: wrap;
		margin: 0;
	}

	p {
		display: inline-block;
		width: 14.28%;
		height: 2.4em;
		line-height: 2.4em;
		box-sizing: border-box;
		margin: 0;
	}

	p.active {
		color: #eee;
		background-color: #409EFF;
	}

	.border p {
		border: 1px solid #eee;
	}

	.row-1 {
		top: 0
	}

	.row-2 {
		top: -2.4em
	}

	.row-3 {
		top: -4.8em
	}

	.row-4 {
		top: -7.2em
	}

	.row-5 {
		top: -9.6em
	}

	.row-6 {
		top: -12em
	}
</style>
