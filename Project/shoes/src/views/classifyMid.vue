<template>
	<div class="mid">
		<div class="search">
			<div class="search_box">
				<input type="text" placeholder="搜索商品名称" />
				<span class="iconfont icon-sousuo"></span>
			</div>
		</div>
		<div class="classify_box">
			<div class="cla_left">
				<ul>
					<li v-for="v,i in $store.state.classifyShoes" :key="i" :class="id==v.id?'on':''" @click="turn(i)">
						<span class="iconfont icon-shuxian" v-if="id==v.id">{{$store.getters.turn}}</span>
						<p>{{v.tit}}</p>
					</li>
				</ul>
			</div>
			<div class="cla_right" @scroll="onscroll">
				<div class="right_item" v-for="item,index in $store.state.classifyShoes" :key="index">
					<div class="item_tit">
						<h5>{{item.tit}}</h5>
					</div>
					<ul>
						<li v-for="v,i in $store.state.right_item[index]" :key="i">
							<img :src="v.img">
							<p>{{v.txt}}</p>
						</li>
					</ul>
				</div>
			</div>
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
				value: '',
				id: "female",
				scrollTop: [],
				classArr: [],
			}
		},
		created() {
			this.init();
			window.onresize = () => {
				this.init();
			};
		},
		methods: {
			init() {
				this.$nextTick(() => {
					this.classArr = [];
					this.scrollTop = [];
					let item = document.getElementsByClassName("right_item");
					for (let i = 0; i < item.length; i++) {
						this.classArr.push(item[i]);
					}
					this.classArr.map(v => {
						this.scrollTop.push(v.offsetTop);
					})
				})
			},

			turn(i) {
				// this.id = this.$store.state.classifyShoes[i].id;
				let right = document.getElementsByClassName("cla_right")[0]
				right.scrollTo({
					top: this.scrollTop[i],
					behavior: "smooth" //滑动属性  平滑滚动
				})

			},
			onscroll(e) {
				this.scrollTop.map((v, i) => {
					if (e.target.scrollTop + 85 >= v) {
						this.id = this.$store.state.classifyShoes[i].id;
					}
				})
			}


		}
	}
</script>

<style>
	.mid {
		width: 750px;
		position: fixed;
		top: 87px;
		left: 0;
	}

	.search {
		width: 750px;
		height: 90px;
		background-color: #ff5e46;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search_box {
		width: 670px;
		height: 56px;
		position: relative;
	}

	.search_box input {
		box-sizing: border-box;
		width: 670px;
		height: 56px;
		border-radius: 50px;
		outline: none;
		border: none;
		padding-left: 275px;
		font-size: 26px;
		color: #b2b2b2;
	}

	.search_box span {
		font-size: 32px;
		color: #b2b2b2;
		position: absolute;
		top: 12px;
		left: 240px;
	}

	.classify_box {
		width: 750px;
		position: fixed;
		top: 178px;
		left: 0;
		bottom: 110px;
		overflow: scroll;
		display: flex;
		flex-direction: row;
	}

	.cla_left {
		width: 200px;
		margin: 0;
		background-color: #eee;
		position: fixed;
		top: 178px;
		left: 0;
		bottom: 110px;
		overflow: scroll;
	}

	.cla_left ul li {
		width: 200px;
		height: 85px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.cla_left ul li.on {
		background-color: white;
	}

	.cla_left ul li span {
		font-size: 32px;
		color: #FF5A46;
		position: absolute;
		top: 26px;
		left: 10px;
	}

	.cla_left ul li p {
		font-size: 32px;
		color: #666666;
	}

	.cla_right {
		width: 550px;
		position: fixed;
		top: 178px;
		right: 0;
		bottom: 110px;
		overflow: scroll;
	}

	.right_item {
		width: 525px;
		display: flex;
		flex-direction: column;
	}

	.item_tit {
		height: 85px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FF5A46;
	}

	.right_item ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.right_item ul li {
		width: 175px;
		height: 190px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.right_item ul li img {
		width: 130px;
		height: 100px;
	}

	.right_item ul li p {
		font-size: 28px;
		font-family: "苹方";
		color: #666;
	}
</style>
