<template>
	<header>
		<div class="head">
			<span class="iconfont icon-zuojiantou" v-if="$route.meta.showFooter" @click="$router.go(-1)"></span>
			<h2>{{title}}</h2>
			<right></right>
		</div>
	</header>
</template>

<script>
	export default {
		data(){
			return{}
		},
		props: ["title"],
		components: {
			right: () => import("../components/rightIcon.vue")
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	header {
		width: 750px;
		height: 88px;
		margin: 0 auto;
		background-color: #ff5e46;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
	}

	.head {
		width: 710px;
		height: 100%;
		margin: 0 auto;
		line-height: 88px;
		position: relative;
	}
	.head span{
		font-size: 50px;
		color: white;
		display: block;
		position: absolute;
	}

	.head h2 {
		width: ;
		font-size: 36px;
		font-family: "Adobe 黑体 Std";
		color: white;
		text-align: center;
	}

	.head .btn {
		position: absolute;
		top: 15px;
		right: 0;
	}
</style>
