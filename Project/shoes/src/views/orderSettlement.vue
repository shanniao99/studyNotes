<template>
	<div>
		<heads :title="$route.params.title"></heads>
		<div class="box">
			<div class="addres-box" @click="Toaddress" v-if="show">
				<div class="addres">
					<div class="add">
						<span>{{address.province}}</span><span>{{address.city}}</span><span>{{address.county}}</span><span>{{address.addressDetail}}</span>
					</div>
					<div class="phone">
						<span>{{address.name}}</span><span>{{address.tel}}</span>
					</div>
				</div>
				<div class="right">
					<span class="iconfont icon-youjiantou"></span>
				</div>
			</div>
			<div class="addres-box" v-else @click="Toaddress">
				<h2>本地暂无地址，请点击添加地址</h2>
				<div class="right">
					<span class="iconfont icon-youjiantou"></span>
				</div>
			</div>
			<div class="item-box" v-for="v,i in data" :key="i">
				<div class="item">
					<img :src="v.img">
					<div class="text">
						<div class="text-box">
							<div class="num">
								<h2>{{v.txt}}</h2>
								<span>X{{v.num}}</span>
							</div>
							<div class="col-pri">
								<p><span>{{v.color}}</span><span>{{v.size}}</span></p>
								<span>￥<h2>{{v.price}}</h2></span>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="serve">
				<ul>
					<li>
						<span>配送服务</span>
						<h3><span>快递</span><span>免邮</span></h3>
					</li>
					<li>
						<span>运费险</span>
						<h3><span>卖家赠送运费险</span></h3>
					</li>
					<li>
						<span>订单备注</span>
						<p>无备注</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="foot">
			<div class="sure">
				<p>共<span>{{data.length}}</span>件</p>
				<div class="rmb">合计：<span>￥<h2>{{money}}</h2></span></div>
				<button @click="successBuy">提交订单</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		ActionSheet
	} from 'vant';

	Vue.use(ActionSheet);
	export default {
		data() {
			return {
				address: {},
				data: [],
				money: 0,
				show:true

			}
		},
		created() {
			this.$nextTick(() => {
				this.data = [];
				if (this.$route.params.num != undefined) {
						this.address = JSON.parse(localStorage.getItem("address"))[this.$route.params.num];
				}else{
					if (localStorage.getItem("address")) {
						let i=JSON.parse(localStorage.getItem("address")).findIndex(v=>{
							return v.isDefault==true
						})
						this.address = JSON.parse(localStorage.getItem("address"))[i];
					}else{
						this.show=false;
					}
				}

				this.data = this.$route.params.obj;
				this.data.forEach(v => {
					this.money += v.price * v.num;
				})
			})
		},
		methods: {
			successBuy() {
				let arr=this.data;
				for(let i=0;i<arr.length;i++){
					arr[i].state="待发货";
					arr[i].btnTxt="查看订单";
					arr[i].orderNnum="6029"+ Math.floor(Math.random() * 1000000000);//生成随机订单编号
					this.$store.state.allorder.push(arr[i]);
				}
				
				this.$router.replace({
					name: "buy",
					params: {
						title: "支付成功",
						is: "buy",
						money: this.money,
						address: this.address
					}
				})
			},
			Toaddress() {
				this.$router.replace({
					name: "list",
					params: {
						title: "我的地址",
						is: "addres",
						obj:this.data 
						
					}
				})
			},
		},
		components: {
			heads: () => import("../components/headTit.vue"),
		},
	}
</script>

<style scoped>
	.box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 100px;
		overflow: scroll;
	}

	.addres-box {
		width: 710px;
		height: 130px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
	}

	.addres-box h2 {
		font-size: 32px;
		color: #333;
		text-align: center;
	}

	.add span {
		font-size: 26px;
		font-family: "苹方";
		font-weight: bolder;
		padding-right: 20px;
	}

	.phone span {
		font-size: 26px;
		color: #333;
		font-family: "苹方";
		font-weight: bolder;
		padding-right: 20px;
	}

	.right span {
		font-size: 36px;
		color: #666;
	}

	.item-box {
		width: 710px;
		margin: 10px auto;
	}

	.item {
		width: 710px;
		height: 200px;
		display: flex;
		justify-content: space-between;
	}

	.item img {
		width: 220px;
		height: 200px;
	}

	.text {
		width: 470px;
		height: 200px;
	}

	.text-box {
		width: 430px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.num {
		width: 470px;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.num h2 {
		font-size: 30px;
		color: #333;
	}

	.num span {
		font-size: 32px;
		color: #666;
	}

	.col-pri {
		width: 470px;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.col-pri span {
		font-size: 28px;
		color: #ff5e46;
		display: flex;
	}

	.col-pri span h2 {
		font-size: 32px;
		color: #ff5e46;
	}

	.col-pri p {
		display: flex;
		align-items: center;
	}

	.col-pri p span {
		font-size: 28px;
		color: #666;
		padding-right: 20px;
	}

	.serve {
		width: 710px;
		margin: 0 auto;
	}

	.serve ul li {
		width: 710px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.serve ul li span {
		font-size: 28px;
		color: #333;
	}

	.serve ul li h3 span {
		font-size: 28px;
		color: black;
		padding-right: 10px;
	}

	.serve ul li p {
		font-size: 28px;
		color: #333;
	}

	.foot {
		width: 710px;
		height: 100px;
		margin: 0 auto;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.sure {
		width: 60%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	.sure p {
		font-size: 22px;
		color: #666;
	}

	.rmb {
		font-size: 24px;
		font-weight: bold;
		display: flex;
	}

	.rmb span {
		color: #ff5e46;
		display: flex;
	}

	.rmb span h2 {
		font-size: 30px;
	}

	.sure button {
		width: 150px;
		height: 50px;
		font-size: 24px;
		color: white;
		background-color: #ff5e46;
		border: none;
		border-radius: 50px;
	}
</style>
