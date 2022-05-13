<template>
	<div class="box">
		<heads :title="headtit[num]"></heads>
		<router-view></router-view>
		<footer v-if="!$route.meta.showFooter">
			<ul>
				<li v-for="v,i in $store.state.footer" :key="i" :class="title==v.tit?'on':''"
					@click="title=v.tit,num=i">
					<router-link :to="v.path">
						<span :class="['iconfont',v.icon]"></span>
						<p>{{v.tit}}</p>
					</router-link>
				</li>
			</ul>
		</footer>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				title: "首页",
				num: 0,
				headtit: ["QianQian左右鞋包", "分类", "购物车", "我的"],

			}
		},
		components: {
			heads: () => import("./components/headTit.vue")
		}
	}
</script>

<style scoped="scoped">
	@import url("./font/font_icon/iconfont.css");

	body {
		margin: 0;
	}

	* {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	.box {
		width: 750px;
		margin: 0 auto;
	}

	footer {
		width: 750px;
		height: 110px;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	footer ul {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	footer ul li a {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer ul li a span.iconfont {
		font-size: 45px;
		color: #7f8389;
	}

	footer ul li a p {
		font-size: 20px;
		color: #7f8389;
	}

	footer ul li.on a span.iconfont,
	footer ul li.on a p {
		color: #ff5e46;
	}
</style>
