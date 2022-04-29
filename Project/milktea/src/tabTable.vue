<template>
	<div class="container">
		<div id="demo-app">
			<div class="btn">
				<div style="display: flex;">
					<div v-for="(item,index) in button" :key="item" :class="active==index ? 'active' : '' "
						@click="onHandlerClick(index)">{{item}}</div>
				</div>
			</div>

			<div class="demo" ref="demo" @scroll="onScroll">
				<div class="box" style="background:skyblue;" ref="Box1"> <span>1</span> </div>
				<div class="box" style="background:red;" ref="Box2"> <span>2</span> </div>
				<div class="box" style="background:blue;" ref="Box3"> <span>3</span> </div>
				<div class="box" style="background:green;" ref="Box4"> <span>4</span> </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
				activeArr: [],
				refsArry: [],
				button: ["第一", "第二", "第三", "第四"]
			};
		},
		mounted() {
			this.init();
			window.onresize = () => {
				this.init();
			};
		},
		methods: {
			init() {
				this.$nextTick(() => {
					setTimeout(() => {
						this.activeArr = [];
						this.refsArry = [];
						if (this.refsArry.length < 4) {
							this.refsArry.push(this.$refs["Box1"]);
							this.refsArry.push(this.$refs["Box2"]);
							this.refsArry.push(this.$refs["Box3"]);
							this.refsArry.push(this.$refs["Box4"]);
						}
						// v-for 生成的就不用添加到数组了 直接 this.$refs['Box']就能获取到一个数组了
						this.refsArry.map(item => {
							this.activeArr.push(item.offsetTop);
						});
					}, 300); // 延时加载，防止拿到的数值不准确
				});
			},
			onHandlerClick(index) {
				this.$refs["demo"].scrollTo({
					// v-for 循环的可直接写this.$refs['Box'].offsetTop
					top: this.refsArry[index].offsetTop - this.$refs["demo"].offsetTop,
					behavior: "smooth"  //css3平滑滚动
				});
			},
			onScroll(e) {
				this.activeArr.map((item, index) => {
					if (e.target.scrollTop + 200 >= item) {
						// + 200 是快滚动到的下一个Box的时候就跳到下一个btoon去高亮显示
						this.active = index;
					}
				});
			}
		}
	};
</script>

<style>
	#demo-app {
		margin: 0 auto;
		width: 800px;
	}

	.btn {
		display: flex;
		border-bottom: 2px solid #f0f0f0;
		justify-content: space-between;
		/* margin-bottom: 80px; */
	}

	.btn div div {
		height: 46px;
		line-height: 46px;
		padding: 0 20px;
		margin-bottom: -2px;
		border: 0;
		border-bottom: 2px solid #f0f0f0;
		font-size: 14px;
		background: #fff;
		cursor: pointer;
	}

	.active {
		color: #1966FF !important;
		border-bottom: 2px solid #1966ff !important;
	}

	.demo {
		background: #ccc;
		height: 400px;
		overflow-x: hidden;
	}

	.box {
		width: 100%;
		height: 400px;
		margin: 10px 0;
		display: flex;
	}

	.box span {
		margin: auto;
		font-size: 70px;
	}
</style>
