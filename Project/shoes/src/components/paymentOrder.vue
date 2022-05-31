<template>
	<div class="box">
		<div class="listOrders">
			<ul>
				<li v-for="v,i in arr" :key="i">
					<div class="order-num">
						<p>订单编号：<span>{{v.orderNnum}}</span></p>
						<span style="color: #ff5e46;">{{v.state}}</span>
					</div>
					<div class="text-box">
						<img :src="v.img">
						<div class="text-right">
							<div class="title">
								<h3>{{v.txt}}</h3><span>X{{v.num}}</span>
							</div>
							<div class="right-down">
								<div class="down-left">
									<span>{{v.color}}  {{v.size}}</span>
									<p>￥{{v.price}}</p>
								</div>
								<button>{{v.btnTxt}}</button>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[],
			}
		},
		created() {
			this.$nextTick(()=>{
				this.arr=[];
				this.$store.state.allorder.forEach(v=>{
					if(v.state=="待支付"){
						this.arr.push(v);
					}
				})
			})
		}
	}
</script>

<style scoped>
	.box {
		width: 750px;
		margin: 0;
		padding: 0;
		position: fixed;
		top: 168px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.listOrders {
		width: 710px;
		margin: 0 auto;
	}

	.listOrders ul li {
		width: 710px;
		height: 290px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border: 1px solid #eee;
		border-radius: 10px;
		box-sizing: border-box;
		margin: 20px 0;
	}
	.listOrders ul li:first-child{
		border: none;
	}

	.listOrders ul li .order-num {
		width: 680px;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.listOrders ul li .order-num p,
	.listOrders ul li .order-num span {
		font-size: 28px;
		color: #999;
	}

	.listOrders ul li .text-box {
		width: 680px;
		height: 200px;
		display: flex;
		justify-content: space-between;
	}

	.text-box img {
		width: 200px;
		height: 200px;
	}

	.text-box .text-right {
		width: 460px;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.text-box .text-right .title {
		width: 100%;
		height: 65px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title h3,
	.title span {
		font-size: 28px;
		color: #666;
	}

	.title span {
		color: #999;
	}

	.text-box .text-right .right-down {
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.right-down .down-left {
		width: 80px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.down-left span {
		font-size: 22px;
		color: #999;
	}

	.down-left p {
		font-size: 32px;
		color: #ff5e46;
	}

	.right-down button {
		width: 130px;
		height: 50px;
		color: white;
		font-size: 22px;
		background-color: #ff5e46;
		border: none;
		border-radius: 50px;
	}
</style>