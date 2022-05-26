<template>
	<div class="mine-box">
		<div class="mine-top">
			<div class="top-up">
				<div class="touxiang-box">
					<div class="box-left">
						<img src="../assets/homeImg/touxiang.png">
						<div class="left-text">
							<div class="text-cla">
								<h3>蒙奇奇</h3>
								<div class="grade">lv2</div>
							</div>
							<div class="jifen">
								<span>积分：</span><span>1123</span>
							</div>
						</div>
					</div>
					<div class="box-right">
						<div class="qiandao">
							<span class="iconfont icon-qiandao"></span>
							<span>签到</span>
						</div>
					</div>
				</div>
			</div>
			<div class="order-box">
				<div class="order-top">
					<div class="order-L">
						<span class="iconfont icon-shuxian"></span>
						<h4>我的订单</h4>
					</div>
					<div class="order-R" @click="Toorder">
						<span>查看全部</span>
						<span class="iconfont icon-youjiantou"></span>
					</div>
				</div>
				<ul>
					<li v-for="v,i in $store.state.mine_order" :key="i" @click="Tosome(i)">
						<span :class="['iconfont',v.icon]"></span>
						<p>{{v.txt}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="mine-down">
			<div class="list-box">
				<ul>
					<li v-for="v,i in $store.state.listFa" :key="i" @click="list(i)">
						<div class="info-list">
							<img :src="v.icon">
							<p>{{v.txt}}</p>
						</div>
						<span class="iconfont icon-youjiantou"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isArr:["message","collect","addres","footprint","coupon","integral"],
				orderlist:["all","payment","delivered","receipt","completed"],
			}
		},
		methods:{
			Toorder(){
				this.$router.push({
					name:'order',
					params:{
						title:"全部订单",
						show:true
					}
				})
			},
			list(i){
				this.$router.push({
					name:'list',
					params:{
						title:this.$store.state.listFa[i].txt,
						is:this.isArr[i]
					}
				})
			},
			Tosome(i){
				this.$router.push({
					name:'order',
					params:{
						title:"全部订单",
						show:true,
						active:i+1
					}
				})
			},
		}
	}
</script>

<style>
	.mine-box{
		width: 750px;
		margin: 0;
		padding: 0;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 110px;
		overflow: scroll;
	}
	.mine-top{
		width: 750px;
		height: 380px;
		position: relative;
	}
	.top-up{
		width: 750px;
		height: 300px;
		background:url(../assets/homeImg/mine_bg.jpg);
		background-size: 100%;
	}
	.touxiang-box{
		width: 710px;
		height: 180px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.box-left{
		width: 280px;
		height: 125px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.box-left img{
		width: 120px;
		height: 120px;
	}
	.left-text{
		width: 140px;
		height: 75px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.text-cla{
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.text-cla h3{
		font-size: 32px;
		color: white;
		font-family: "苹方";
	}
	.grade{
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: #eecf8b;
		font-size: 18px;
		color: white;
		font-family: "苹方";
		text-align: center;
		line-height: 32px;
	}
	.jifen{
		font-size: 24px;
		color: white;
	}
	.box-right{
		width: 140px;
		height: 125px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.qiandao{
		width: 105px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.qiandao span{
		font-size: 28px;
		font-family: "苹方";
		color: white;
	}
	.qiandao span:first-child{
		font-size: 36px;
	}
	.order-box{
		width: 710px;
		height: 200px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		border-radius: 10px;
		position: absolute;
		bottom: 0;
		left: 20px;
		box-shadow: 0 3px 3px 1px #ffeeeb;
	}
	.order-top{
		width: 670px;
		height: 60px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between
	}
	.order-L{
		width: 150px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-be
	}
	.order-L span{
		font-size: 36px;
		color: #ff5e46;
	}
	.order-L h4{
		font-size: 28px;
		color: #333;
	}
	.order-R{
		width: 125px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.order-R span{
		font-size: 24px;
		color: #999;
		font-family: "苹方";
	}
	.order-box ul{
		display: flex;
		justify-content: space-around;
	}
	.order-box ul li{
		width: 120px;
		height: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.order-box ul li p{
		font-size: 24px;
		color: #666;
		font-family: "苹方";
	}
	.order-box ul li span{
		font-size: 36px;
		color: #ff5e46;
	}
	.mine-down{
		width: 750px;
		margin: 0;
	}
	.list-box{
		width: 710px;
		margin: 20px auto;
		box-shadow: 0 3px 3px 1px #ffeeeb;
	}
	.list-box ul{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list-box ul li{
		width: 680px;
		height: 88px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
	}
	.list-box ul li .info-list{
		width: 180px;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.info-list img{
		width: 42px;
		height: 42px;
	}
	.info-list p,.list-box ul li span{
		font-size: 28px;
		color: #666;
		font-family: "苹方";
	}
</style>
