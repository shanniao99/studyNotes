<template>
	<div>
		<heads :title="$route.params.title"></heads>
		<div class="buy-box">
			<div class="buy-top"></div>
			<div class="buy-det">
				<div class="title">
					<h2>实付款：<span>￥{{$route.params.money}}</span></h2>
				</div>
				<div class="buy-address">
					<div class="addrss">
						<label>收货人:<input type="text" :value="address.name" readonly></label>
					</div>
					<div class="addrss">
						<label>手机号:<input type="text" :value="address.tel" readonly></label>
					</div>
					<div class="addrss">
						<label>收货地址:<textarea readonly v-model="str"></textarea></label>
					</div>
				</div>
			</div>
			<div class="buy-foot">
				<div class="btn">
					<button>查看订单</button>
					<button @click="$router.push('/')">返回首页</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				address:{},
				str:''
			}
		},
		created() {
			this.address=this.$route.params.address;
			this.str=this.address.province+this.address.city+this.address.county+this.address.addressDetail;
		},
		components: {
			heads: () => import("../components/headTit.vue"),
		},
	}
</script>

<style scoped>
	.buy-box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.buy-top {
		width: 750px;
		height: 300px;
		background: url(../assets/buy_top.jpg) no-repeat;
		background-size: 100%;
	}

	.buy-det {
		width: 750px;
		height: 350px;
		display: flex;
		flex-direction: column;
	}

	.buy-det .title {
		width: 750px;
		height: 100px;
		text-align: center;
		line-height: 100px;
	}
	.buy-det .title h2{
		font-size: 32px;
		color: #333;
	}
	.buy-det .title h2 span{
		color: #ff5e46;
	}

	.buy-address {
		width: 680px;
		height: 220px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between
	}

	.addrss label,
	.addrss label input,
	.addrss label textarea {
		font-size: 28px;
		color: #666;
		font-family: "苹方";
	}
	.addrss label input,.addrss label textarea{
		border: none;
		outline: none;
		padding-left: 20px;
		vertical-align: text-top;
		width: 500px;
	}
	.buy-foot{
		width: 750px;
		height: 180px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn{
		width: 400px;
		display: flex;
		justify-content: space-between;
	}
	.btn button{
		width: 150px;
		height: 60px;
		box-sizing: border-box;
		border: 2px solid #ff5e46;
		color: #ff5e46;
		font-size: 28px;
		border-radius: 50px;
		background: none;
	}
</style>
