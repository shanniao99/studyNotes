<template>
	<div class="box">
		<header>
			<div class="head">
				<div><span class="iconfont icon-zuojiantou"></span><span>点餐</span></div>
				<right></right>
			</div>
		</header>
		<div class="mid">
			<div class="address">
				<div class="address_l">
					<h2 @click="turn" v-if="$store.state.show">选择地址<span class="iconfont icon-youjiantou"></span></h2>
					<div class="name_num" v-else>
						<h2>{{this.$route.params.username}}</h2><span>{{this.$route.params.phone}}</span>
					</div>
					<p v-if="$store.state.show"><span>姓名</span><span>联系电话</span></p>
					<div class="all_ads" v-else @click="turn">
						<p>{{this.$route.params.address}}<span class="iconfont icon-youjiantou"></span></p>
					</div>
				</div>
				
				<div class="address_r">
					<div class="ziti">
						<span>自提</span><span class="this">外卖</span>
					</div>
				</div>
			</div>
			<div class="drink">
				<div class="drink_left">
					<ul>
						<li v-for="v,i in $store.state.drink_list" :key="i" :class="text===v?'en':''" @click="jump(i)">
							<span>{{v}}</span>
						</li>
					</ul>
				</div>
				<div class="drink_right" @scroll="onscroll">
					<div v-for="val,index in $store.state.drink_list" :key="index" class="lis_box">
						<span>
							<h1>{{val}}</h1>
						</span>
						<div class="list">
							<ul>
								<li v-for="v,i in $store.state.hotdata" :key="i">
									<div class="img"><img :src="v.pic"></div>
									<div class="t_box">
										<div class="t">
											<h2>{{v.tit}}</h2>
											<p>{{v.text}}</p>
										</div>
										<div class="b">
											<b class="rmb">{{v.price}}</b>
											<div class="date">
												<img :src="$store.state.jian" class="jian" style="display: none;"
													@click="minus(i+num*index)"><input readonly type="text" value="0"
													style="display: none;" /><img :src="$store.state.jia" class="jia"
													@click="plus(i+num*index)">
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="price">
				<div class="pic"><img src="../assets/box.png"></div>
				<div class="money"><input v-model="rmb" readonly>
					<p>免费配送</p>
				</div>
				<div class="jie">去结算</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: "热销",
				rmb: "￥0",
				arr: [],
				num: 4,
				classArr: [],
				itemTop: [],
			}
		},
		mounted() {
			// var txt = document.getElementsByClassName("rmb");
			// for (let i = 0; i < txt.length; i++) {
			// 	var num = document.getElementsByClassName("date")[i].getElementsByTagName("input")[0].value;
			// 	var price=txt[i].innerText;//价格 转为数字
			// 	var obj = {
			// 		num,
			// 		price
			// 	}
			// 	this.arr.push(obj);
			// 	localStorage.setItem("info", JSON.stringify(this.arr));  //将价格和数量存入本地存储
			// }
			this.init();
			window.onresize = () => {
				this.init();
			};


		},
		methods: {
			plus(n) { //数量加
				console.log(n)
				// var local=JSON.parse(localStorage.getItem("info"));
				var jian = document.getElementsByClassName("jian")[n];
				var inp = jian.nextElementSibling;
				inp.value++;
				if (inp.value > 0) {
					jian.style.display = "block";
					inp.style.display = "block"
				}
				var price = document.getElementsByClassName("rmb");
				var sum = 0;
				for (let i = 0; i < price.length; i++) {
					var num = document.getElementsByClassName("jian")[i].nextElementSibling.value;
					sum += num * price[i].innerText.match(/\d/ig).join("");
				}
				this.rmb = "￥" + sum;
			},
			minus(n) { //数量减
				var jian = document.getElementsByClassName("jian")[n];
				var inp = jian.nextElementSibling;
				inp.value--;
				if (inp.value <= 0) {
					jian.style.display = "none";
					inp.style.display = "none"
				}
				var price = document.getElementsByClassName("rmb");
				var sum = 0;
				for (let i = 0; i < price.length; i++) {
					var num = document.getElementsByClassName("jian")[i].nextElementSibling.value;
					sum += num * price[i].innerText.match(/\d/ig).join("");
				}

				this.rmb = "￥" + sum;
			},
			turn() {
				this.$router.push({
					name: "address"
				})
				this.$store.state.bool=false;
			},
			init() {
				//$nextTICK:在获取了数据之后对视图进行更新,以防出现获取不到dom的情况
				//在生命周期created()中进行的dom操作一定要放在该函数的回调函数中
				//在数据变化后要执行某个操作，而这个操作需要使用随数据变化而变化的dom结构时，这个操作都应该放进nextTick()的回调函数中。
				this.$nextTick(() => {
					this.classArr = []; //放八个奶茶分类的奶茶列表
					this.itemTop = []; //放每个奶茶列表的offsetTop
					for (let i = 0; i < document.getElementsByClassName("lis_box").length; i++) {
						this.classArr.push(document.getElementsByClassName("lis_box")[i]);
					}
					this.classArr.map(v => {
						this.itemTop.push(v.offsetTop);
					})

				})
			},
			jump(i) {
				var gun = document.getElementsByClassName("drink_right")[0];
				gun.scrollTo({  // 右边奶茶列表的盒子 滚动到指定位置 scrollTo要作用在可以滚动的元素上，否则scrollTop就会一直为0
					top: this.itemTop[i],  //纵向滑动
					behavior: "smooth"  //滑动属性  平滑滚动
				})
			},
			onscroll(e) {
				this.itemTop.map((v, i) => {
					if (e.target.scrollTop +100 >= v) {
						this.text = this.$store.state.drink_list[i];
					}
				})
			}

		},
		components: {
			right: () => import("../components/rightIcon.vue")
		}
	}
</script>

<style>
	@import url("../font/font_icon/iconfont.css");

	.head {
		width: 7.1rem;
		height: .88rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.head span {
		float: left;
		font-size: .32rem;
		color: #333;
		font-family: "苹方";
	}

	.head span.iconfont {
		font-size: .4rem;
	}

	.address {
		width: 7.1rem;
		height: 1.4rem;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.address_l {
		height: 1.4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.address_l h2 {
		font-size: .32rem;
		font-family: "Adobe 黑体 Std";
		color: #333333;
	}

	.address_l h2 span {
		font-size: .32rem;
		padding-left: .2rem;
	}

	.address_l p {
		font-size: .26rem;
		font-family: "苹方";
		color: #999999;
	}

	.address_l p span {
		padding-right: .1rem;
	}

	.address_r {
		width: 2.1rem;
		height: 1.4rem;
		display: flex;
		align-items: center;
	}
	.name_num {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.name_num h2 {
		font-size: .32rem;
		color: #333333;
	}
	
	.name_num span {
		font-size: .22rem;
		padding-left: .2rem;
		color: #666;
	}
	
	.all_ads {
		height: .4rem;
		display: flex;
		align-items: center;
	}
	.all_ads p {
		font-size: .26rem;
		color: #333333;
		font-weight: bold;
	}
	.ziti {
		width: 2.1rem;
		height: .8rem;
		border: 0.02rem solid #ffca00;
		border-radius: .5rem;
		font-size: .32rem;
		font-family: "苹方";
		color: #fdd100;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: flex-end;
		align-items: center;
	}

	.ziti span.this {
		width: 1.2rem;
		height: .7rem;
		border-radius: .5rem;
		text-align: center;
		line-height: .7rem;
		background-color: #ffca00;
		color: white;
	}

	.drink {
		width: 7.5rem;
		margin: 0 auto;
		border-top: 0.01rem solid #dbdcde;
		margin: 0 auto;
	}

	.drink_left {
		width: 1.8rem;
		background-color: #f4f5f7;
		float: left;
		position: fixed;
		top: 2.28rem;
		bottom: 2.7rem;
		overflow: scroll;
	}

	.drink_left ul li:nth-child(1) {
		background-image: url(../assets/hot.png);
		background-repeat: no-repeat;
		background-position: 20% center;
		background-size: .24rem .24rem;
	}

	.drink_left ul li:nth-child(2) {
		background-image: url(../assets/down.png);
		background-repeat: no-repeat;
		background-position: 20% center;
		background-size: .24rem .24rem;
	}

	.drink_left ul li span{
		width: 1.8rem;
		height: .9rem;
		font-size: .28rem;
		font-family: "苹方";
		color: #999999;
		display: flex;
		justify-content: center;
		align-items: center;
		background-position-x: .2rem;
	}

	.drink_left ul li.en {
		background-color: white;
	}

	.drink_left ul li img {
		width: .24rem;
		height: .24rem;
	}

	.drink_right {
		width: 5.5rem;
		float: right;
		margin: 0 auto;
		position: fixed;
		top: 2.28rem;
		bottom: 2rem;
		left: 2rem;
		overflow: scroll;
	}

	.drink_right span {
		height: .9rem;
		line-height: .9rem;

	}

	.drink_right span h1 {
		font-size: .28rem;
		font-family: "苹方";
		color: #333333;
	}

	.list ul {
		display: flex;
		flex-direction: column;

	}

	.list ul li {
		height: 1.5rem;
		margin-bottom: .5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.img {
		width: 1.5rem;
		height: 1.5rem;
	}

	.img img {
		width: 100%;
	}

	.t_box {
		width: 3.6rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.t h2,
	.b b {
		font-family: "黑体";
		font-size: .32rem;
		color: #0f0f0f;
	}

	.t p {
		font-size: .24rem;
		font-family: "苹方";
		color: #666;
	}

	.b {
		height: .32rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.date {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.date input {
		width: .32rem;
		height: .32rem;
		outline: none;
		border: none;
		font-size: .32rem;
		color: #fdd100;
		text-align: center;
	}

	.date img {
		width: .32rem;
		height: .32rem;
	}

	.bottom {
		width: 7.5rem;
		height: 1.2rem;
		position: fixed;
		bottom: 1rem;
		left: .1rem;
		background-color: white;
	}

	.price {
		width: 7.1rem;
		height: .88rem;
		border-radius: 0.5rem;
		box-shadow: 0.01rem 0.03rem 0.05rem #999999;
	}

	.pic {
		position: absolute;
		bottom: .4rem;
		left: .4rem;
	}

	.pic img {
		width: .87rem;
		height: 1.25rem;
	}

	.money {
		position: absolute;
		top: 0.04rem;
		left: 1.4rem;
		text-align: center;
	}

	.money input {
		font-size: .36rem;
		color: #0F0F0F;
		border: none;
		width: 2rem;
		outline: none;
	}

	.money p {
		font-size: .2rem;
		font-family: "苹方";
		color: #999999;
		width: 1rem;
	}

	.jie {
		width: 2rem;
		height: .88rem;
		position: absolute;
		right: .2rem;
		background-color: #ffca00;
		border-radius: 0 .5rem .5rem 0;
		text-align: center;
		line-height: .88rem;
		font-size: .32rem;
		color: white;
		font-family: "苹方";
	}
</style>
