<template>
	<div class="box">
		<div class="coll-box">
			<ul>
				<li v-for="v,i in item" :key="i">
					<div class="item-box">
						<img :src="v.img">
						<div class="right">
							<h2>{{v.txt}}</h2>
							<div class="right-under">
								<span>￥{{v.price}}</span>
								<div class="under-right">
									<button @click="Tocart(i)">去看看</button>
									<p @click="cancel(i)">取消收藏</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				item: [],
			}
		},
		created() {
			this.item = JSON.parse(localStorage.getItem("collect"))
			console.log(this.item)
		},
		methods:{
			Tocart(i){
				this.$router.replace({
					name:'details',
					params:{
						list:this.item[i]
					}
				})
			},
			cancel(i){
				this.item.splice(i,1);
				localStorage.setItem("collect",JSON.stringify(this.item));
			}
		}
	}
</script>

<style scoped>
	.box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.coll-box {
		width: 710px;
		margin: 0 auto;
	}

	.coll-box ul li {
		width: 710px;
		height: 260px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #eee;
		border-radius: 10px;
		margin: 20px auto;
		font-family: "苹方";
		box-sizing: border-box;
	}

	.coll-box ul li .item-box {
		width: 670px;
		height: 220px;
		display: flex;
		justify-content: space-between;
	}

	.item-box img {
		width: 220px;
		height: 220px;
	}

	.right {
		width: 430px;
		height: 220px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.right h2 {
		font-size: 28px;
		color: #666;
	}

	.right-under {
		width: 430px;
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.right-under span {
		font-size: 36px;
		color: #ff5e46;
	}

	.under-right {
		width: 140px;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.under-right button {
		width: 140px;
		height: 50px;
		border-radius: 50px;
		background-color: #ff5e46;
		border: none;
		font-size: 24px;
		color: white;
	}

	.under-right p {
		font-size: 24px;
		color: #999999;
	}
</style>
