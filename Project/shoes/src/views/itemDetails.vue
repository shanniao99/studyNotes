<template>
	<div class="Debox">
		<div class="details-Mid">
			<van-swipe @change="onChange">
				<van-swipe-item><img :src="list.img"></van-swipe-item>
				<van-swipe-item><img :src="list.img"></van-swipe-item>
				<van-swipe-item><img :src="list.img"></van-swipe-item>
				<van-swipe-item><img :src="list.img"></van-swipe-item>
				<template #indicator>
					<div class="custom-indicator">{{ current + 1 }}/4</div>
				</template>
			</van-swipe>
			<div class="det_one">
				<div class="active">
					<div class="active1">跨店每300减30</div>
					<div class="active2">购买得积分</div>
				</div>
				<div class="P_serve">
					<div class="pri">￥<span>{{list.price}}</span></div>
					<div class="use-buy">
						<span class="iconfont icon-xianyonghoufu"></span>
						<b>先用后付</b>
						<p>享0元下单，确认收货再付款</p>
					</div>
				</div>
				<div class="itemtit">
					<h2>{{list.txt}}</h2>
				</div>
				<div class="items-other">
					<ul>
						<li>
							<span class="iconfont icon-dianzanaixin"></span>
							<p>推荐</p>
						</li>
						<li>
							<span class="iconfont icon-shezhongrenyuan"></span>
							<p>帮我选</p>
						</li>
						<li>
							<span class="iconfont icon-fenxiang"></span>
							<p>分享</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="det_two">
				<div class="choose">
					<span>选择</span>
					<div class="size">
						<van-cell is-link title="颜色/尺码" @click="show = true" />
						<van-action-sheet v-model="show" closeable>
							<div class="content">
								<div class="constent_top">
									<img :src="col=='颜色'?list.img:Img">
									<div class="topLeft">
										<div class="carPrice">￥<span>{{list.price}}</span></div>
										<span>剩余300件</span>
										<p>
											<span>{{choose}}</span><span>{{col}}</span>
											<span v-if="baozhang">{{size}}</span>
										</p>
									</div>
								</div>
								<div class="topMid">
									<span>颜色分类</span>
									<ul>
										<li :class="col==v.color?'on':''" v-for="v,i in list.colors" :key="i"
											@click="colorChoose(i)">
											<img :src="v.image">
											<span>{{v.color}}</span>
										</li>
									</ul>
								</div>
								<div class="topMid2" v-if="baozhang">
									<span>尺码</span>
									<ul>
										<li :class="size==v?'on':''" v-for="v,i in list.shoeSize" :key="i"
											@click="sizeChoose(i)">
											<span>{{v}}</span>
										</li>
									</ul>
								</div>
								<div class="topbuyN">
									<div class="buyNum">
										<span>购买数量(有货)</span>
										<van-stepper disable-input />
									</div>
								</div>
								<div class="content-down">
									<div class="down-btn" v-if="!sure&&!buy">
										<button @click="intoCar">加入购物车</button>
										<button>立即购买</button>
									</div>
									<div class="btn-sure" v-else-if="!buy">
										<button @click="intoCar">确定</button>
									</div>
									<div class="btn-sure" v-else>
										<button @click="buyItem">确定</button>
									</div>
								</div>
							</div>
						</van-action-sheet>
					</div>
				</div>
				<div class="choose">
					<span>发货</span>
					<div class="size">
						<van-cell is-link title="广东广州 | 快递:免运费" />
					</div>
				</div>
				<div class="choose">
					<span>保障</span>
					<div class="size">
						<van-cell is-link title="假一赔四·上门退取·极速退款" />
					</div>
				</div>
				<div class="choose">
					<span>参数</span>
					<div class="size">
						<van-cell is-link title="品牌 适用年龄..." />
					</div>
				</div>
			</div>
		</div>
		<footer>
			<van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" />
				<van-goods-action-icon icon="shop" text="店铺" />
				<van-goods-action-icon :icon="collect?'star':'star-o'" text="收藏" :color="collect?'#ff5e46':''"
					@click="Tocollect" />
				<div class="foot-btn">
					<van-goods-action-button type="warning" text="加入购物车" @click="show = true,sure=true" />
					<van-goods-action-button type="danger" text="立即购买" @click="show=true,buy=true" />
				</div>
			</van-goods-action>
		</footer>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Swipe,
		SwipeItem,
		GoodsAction,
		GoodsActionIcon,
		GoodsActionButton,
		ActionSheet,
		Toast,
		Cell,
		Sku,
		Stepper,
		Dialog
	} from 'vant';

	Vue.use(Toast);
	Vue.use(Stepper);
	Vue.use(Sku)
	Vue.use(Cell);
	Vue.use(Toast);
	Vue.use(ActionSheet);
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(GoodsAction);
	Vue.use(GoodsActionButton);
	Vue.use(GoodsActionIcon);
	export default {
		data() {
			return {
				current: 0,
				show: false, //弹出框
				baozhang: true,
				choose: "请选择",
				col: "颜色",
				size: "尺码",
				sure: false, //加入购物车
				buy: false, //立即购买
				Img: '',
				list: {},
				collect: false,
				collectArr: [],

			}
		},
		created() {
			if (this.$route.params.list) {
				this.list = this.$route.params.list
			}
			if (this.list.shoeSize.length > 0) {
				this.baozhang = true;
			} else {
				this.baozhang = false;
			}
		},

		methods: {
			onChange(index) {
				this.current = index;
			},
			beforeCar() { //存入本地前的准备工作
				let obj = {};
				if (this.col == "颜色") {
					Dialog.alert({
						message: '请选择颜色分类',
					});
				} else if (this.list.shoeSize.length && this.size == "尺码") {
					Dialog.alert({
						message: '请选择尺码大小',
					});
				} else {
					let size;
					if (this.list.shoeSize.length > 0) {
						size = this.size;
					} else {
						size = '';
					}
					let num = Number(document.getElementsByClassName("buyNum")[0].getElementsByTagName("input")[0].ariaValueNow);
					obj = {
						img: this.Img,
						txt: this.list.txt,
						price: this.list.price,
						color: this.col,
						size,
						num,
						id: this.list.id
					}
				}
				return obj;
			},
			colorChoose(i) { //选择商品颜色时的颜色更改
				if (this.col == this.list.colors[i].color) {
					if (this.size == "尺码") {
						this.choose = "请选择"
					}
					this.col = "颜色"
				} else {
					this.col = this.list.colors[i].color;
					this.Img = this.list.colors[i].image;
					this.choose = "已选";
				}
			},
			sizeChoose(i) { //商品尺码动态更改
				if (this.size == this.list.shoeSize[i]) {
					if (this.col == "颜色") {
						this.choose = "请选择"
					}
					this.size = "尺码"
				} else {
					this.size = this.list.shoeSize[i];
					this.choose = "已选"
				}
			},
			intoCar() { //添加到购物车操作
				let obj = this.beforeCar()
				let num = document.getElementsByClassName("buyNum")[0].getElementsByTagName("input")[0].ariaValueNow;
				if (localStorage.length > 0) {
					this.$store.state.shoppingcart = JSON.parse(localStorage.getItem("info"));
				}
				let Index = this.$store.state.shoppingcart.findIndex((v) => {
					return v.id == obj.id && v.color == obj.color && v.size == obj.size
				})
				if (Index != -1) {
					this.$store.state.shoppingcart[Index].num = Number(this.$store.state.shoppingcart[Index].num) +
						Number(num);
				} else {
					this.$store.state.shoppingcart.push(obj);
				}
				localStorage.setItem("info", JSON.stringify(this.$store.state.shoppingcart))
				Toast('已加入购物车');
				console.log(this.$store.state.shoppingcart)
			},

			Tocollect() { //点击收藏和取消收藏
				this.collect = !this.collect;
				if (this.collect) {
					if (localStorage.getItem("collect")) {
						this.collectArr = JSON.parse(localStorage.getItem("collect"))
					}
					let Index = this.collectArr.findIndex((v) => {
						return v.id == this.list.id
					})
					if (Index != -1) {
						this.collectArr.splice(Index, 1); //有相同的数据，只保留一条
					} else {
						this.collectArr.push(this.list);
					}
					localStorage.setItem("collect", JSON.stringify(this.collectArr));
				} else {
					if (localStorage.getItem("collect")) {
						this.collectArr = JSON.parse(localStorage.getItem("collect"))
						let Index = this.collectArr.findIndex((v) => {
							return v.id == this.list.id
						})
						if (Index != -1) {
							this.collectArr.splice(Index, 1); //有相同的数据，取消收藏
						}
						localStorage.setItem("collect", JSON.stringify(this.collectArr));
					}

				}
			},
			buyItem() { //立即购买
				let obj=[];
				obj.push(this.beforeCar());
				this.$router.replace({
					name: "settlement",
					params: {
						title: "确认订单",
						obj,
					}
				})
			}
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.Debox {
		width: 750px;
		margin: 0;
		padding: 0;
	}

	.details-Mid {
		width: 750px;
		background-color: #eee;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 100px;
		overflow: scroll;
		z-index: 1;
	}

	.van-swipe,
	.van-swipe img {
		width: auto !important;
		height: 100%;
	}

	.van-swipe-item {
		display: flex;
		justify-content: center;
	}

	.det_one,
	.det_two {
		width: 710px;
		height: 400px;
		margin: 20px auto;
		background-color: #fff;
		border-radius: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-around
	}

	.active {
		width: 415px;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.active1 {
		width: 200px;
		height: 40px;
	}

	.active2 {
		width: 150px;
		height: 40px;
	}

	.active1,
	.active2 {
		box-sizing: border-box;
		border: 1px solid #f7a7c1;
		border-radius: 5px;
		font-size: 28px;
		color: #f92d7f;
		text-align: center;
	}

	.P_serve {
		width: 670px;
		height: 120px;
		margin: 0 auto;
	}

	.pri {
		font-size: 26px;
		color: #fd4104;
	}

	.pri span {
		font-size: 38px;
		color: #fd4104;
	}

	.use-buy {
		width: 670px;
		height: 65px;
		background-color: #fff8f5;
		display: flex;
		align-items: center;
	}

	.use-buy span {
		font-size: 48px;
		color: #fd4104;
	}

	.use-buy b {
		font-size: 32px;
		color: #fd4104;
	}

	.use-buy p {
		font-size: 26px;
		color: #fd4104;
		padding-left: 20px;
	}

	.itemtit {
		width: 670px;
		margin: 0 auto;
	}

	.itemtit h2 {
		font-size: 32px;
		color: #333;
	}

	.items-other {
		width: 670px;
		height: 88px;
		margin: 0 auto;
	}

	.items-other ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.items-other ul li {
		width: 120px;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.items-other ul li span,
	.items-other ul li p {
		font-size: 28px;
		color: #333;
	}

	.choose {
		width: 670px;
		height: 60px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.choose span {
		font-size: 28px;
		color: #666;
	}

	.size {
		width: 570px;
		height: 60px;
		display: flex;
		align-items: center;
	}

	.size .van-cell span {
		color: black !important;
	}

	.size .van-cell__right-icon {
		font-size: 28px;
	}

	.content {
		width: 750px;
	}

	.constent_top {
		width: 710px;
		height: 150px;
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
	}

	.constent_top img {
		width: 150px;
		height: 150px;
	}

	.topLeft {
		width: 540px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.carPrice {
		font-size: 26px;
		color: #fd4104;
	}

	.carPrice span {
		font-size: 32px;
		color: #fd4104;
	}

	.topLeft p span {
		padding-right: 20px;
		font-size: 28px;
	}

	.topMid {
		width: 710px;
		height: 180px;
		margin: 0 auto;
		border-bottom: 1px solid #eee;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.topMid ul {
		display: flex;
		justify-content: space-evenly;
	}

	.topMid ul li {
		width: 80px;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		background-color: #eee
	}

	.topMid ul li img {
		width: 60px;
		height: 60px;
	}

	.topMid ul li span {
		display: block;
		width: 60px;
		height: 30px;
		font-size: 22px;
		text-align: center;
	}

	.topMid ul li.on {
		border: 2px solid #ff5e46;
		border-radius: 10px;
		background-color: #fbe8e5;
	}

	.topMid ul li.on span {
		color: #ff5e46;
	}

	.topMid2 {
		width: 710px;
		height: 150px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.topMid2 ul {
		display: flex;
		justify-content: space-around;
	}

	.topMid2 ul li {
		width: 50px;
		height: 30px;
		background-color: #eee;
		border: 1px solid #eee;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.topMid2 ul li span {
		font-size: 22px;
	}

	.topMid2 ul li.on {
		background-color: #ff5e46;
		border: 1px solid #ff5e46;
	}

	.topMid2 ul li.on span {
		color: white;
	}

	.topbuyN {
		width: 710px;
		height: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.buyNum {
		width: 710px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.buyNum span {
		font-size: 22px;
	}

	.buyNum .van-stepper__minus,
	.buyNum .van-stepper__plus {
		width: 40px;
		height: 40px;
	}

	.buyNum .van-stepper__input {
		width: 50px;
		height: 40px;
		font-size: 28px;
	}

	.content-down {
		width: 710px;
		height: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.down-btn,
	.btn-sure {
		width: 710px;
		height: 50px;
		border-radius: 50px;
	}

	.down-btn button {
		width: 350px;
		height: 50px;
		border: none;
		font-size: 32px;
		color: white;
	}

	.down-btn button:nth-child(1) {
		background: linear-gradient(to right, #ffd01e, #ff8917);
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.down-btn button:nth-child(2) {
		background: linear-gradient(to right, #ff6034, #ee0a24);
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
	}

	.btn-sure button {
		width: 710px;
		height: 50px;
		border: none;
		font-size: 32px;
		color: white;
		border-radius: 50px;
		background-color: #ee0a24;
	}

	.item-address {
		width: 325px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.item-address p {
		font-size: 28px;
	}

	footer {
		width: 750px;
		height: 100px;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	footer .van-goods-action {
		height: 100px;
		justify-content: space-between;
	}

	footer .van-goods-action-icon__icon {
		font-size: 32px;
	}

	footer .van-goods-action-button {
		height: 60px;
		font-size: 32px;
	}

	footer .van-goods-action-icon {
		font-size: 16px;
	}

	.foot-btn {
		width: 540px;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.foot-btn button {
		width: 270px;
		height: 65px;
		font-size: 32px;
		color: white;
	}
</style>
