<template>
	<div>
		<router-link to="/module">路由模块化（加守卫）</router-link>
		<button @click="turn">事件跳转</button>
		<router-link to="/add">新增路由</router-link>
		<router-view></router-view>
		<hr>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="info">成功按钮</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>

		<hr>
		<van-tabs v-model="active">
			<van-tab title="标签 1">内容 1</van-tab>
			<van-tab title="标签 2">内容 2</van-tab>
			<van-tab title="标签 3">内容 3</van-tab>
			<van-tab title="标签 4">内容 4</van-tab>
		</van-tabs>
		{{active}}

		<hr>
		<van-swipe class="my-swipe" @change="pic" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Button,
		Tab,
		Tabs,
		Swipe,
		SwipeItem
	} from 'vant';

	Vue.use(Button);
	Vue.use(Tab);
	Vue.use(Tabs);
	Vue.use(Swipe);
	Vue.use(SwipeItem);


	export default {
		data() {
			return {
				active: 0
			}
		},
		methods: {
			pic(index){
				console.log("滚动到第",index)
			},
			turn() {
				console.log(this.$route) //路由的属性
				console.log(this.$router) //路由的方法
				// this.$router.replace({   //push跳转页面（有后退记录） replace跳转页面（没有后退记录）
				// 	name:"three",
				// 	params:{
				// 		x:888,
				// 		y:null
				// 	}
				// })

				// this.$router.addRoute({  //新增一级路由
				// 	path:"/add",
				// 	component:()=>import('./views/thired.vue')
				// })

				// this.$router.addRoute("firstone",{  //新增子级路由
				// 	path:"/add",
				// 	component:()=>import('./views/thired.vue')
				// })

				// this.$router.go(-1)
				// this.$router.forward()
				// this.$router.back()

			}
		}
	}
</script>

<style>
.van-swipe-item{
	height: 200px;
	background-color: cyan;
}
</style>
