<template>
	<div class="box">
		<header>
			<div class="head">
				<span>我的</span>
				<right></right>
			</div>
		</header>
		<div class="body">
			<div class="top">
				<img src="../assets/mine_bg.jpg">
				<div class="top_box">
					<div class="ball">
						<h1>偶尔有点小犯贱</h1>
						<img src="../assets/mine_img.png">
					</div>
				</div>
			</div>
			<div class="icon">
				<ul>
					<li v-for="v,i in $store.state.list" :key="i"><div class="icon_img"><img :src="v.img"></div><span>{{v.tit}}</span></li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		components:{
			right:()=>import("../components/rightIcon.vue")
		}
	}
</script>

<style scoped>
	.body {
		width: 7.5rem;
		margin: 0 auto;
		background-color: #f4f5f7;
		position: fixed;
		top: .88rem;
		bottom: 1rem;
		left: 0;
		overflow: scroll;
	}
	
	.top {
		width: 7.5rem;
		height: 3rem;
		position: relative;
	}
	
	.top img {
		width: 100%;
	}
	
	.top_box {
		width: 6.9rem;
		height: 2rem;
		background-color: white;
		border-radius: .2rem;
		position: absolute;
		bottom: 0;
		left: .3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	
	}
	
	.ball {
		width: 6.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
	
	.ball h1 {
		font-size: .38rem;
		color: black;
	}
	
	.ball img {
		width: 1.22rem;
		height: 1.22rem;
	}
	
	.icon {
		width: 6.9rem;
		height: 4.8rem;
		margin: 0 auto;
		border-radius: .2rem;
		background-color: white;
		margin-top: .3rem;
	}
	
	.icon ul li {
		height: 1.2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.icon_img{
		width: .5rem;
		height: .48rem;
		margin-left: .3rem;
	}
	.icon_img img{
		width: 100%;
	}
	.icon ul li span{
		font-size: .32rem;
		color: black;
		padding-left: .3rem;
	}
</style>
