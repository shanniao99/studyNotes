<template>
	<div>
		<!-- 
		状态管理vuex（https://vuex.vuejs.org/zh/）
		用来管理数据和状态用
		使用步骤：（注意版本问题）
		1 安装vuex（n为版本号）
		npm install vuex@n -s
		2 配置store/index.js文件
		3 配置mian.js文件
		4 页面中，通过$store调用vuex数据
		-->
		是否登录：{{$store.state.login}}--{{dl}}
		<ul>
			<li v-for="v in nav" :key="v.tit">{{v.tit}}</li>
		</ul>
		新闻：<br>
		{{$store.state.news}}
		<hr>
		热门新闻：(getters做属性引用)
		{{$store.getters.hot}}
		<hr>
		推荐新闻：(getters做函数引用)
		{{$store.getters.tj('推荐')}}
		<hr>
		<button @click="add">同步方法</button>
		<button @click="jia">异步方法</button>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [],
				dl:null
			}
		},
		methods:{
			add(){
				this.$store.commit("change",true) //调用vuex中mutations里面的同步方法,修改其中的数据
			},
			jia(){
				this.$store.dispatch("abc",999) //调用vuex中actions里面的异步方法,修改其中的数据
			}			
		},
		created(){
			console.log(this.$store.state.navlist) //调用vuex里面的数据
			this.nav=this.$store.state.navlist //在dom未渲染之前，把数据加载进去（赋址）
			this.dl=this.$store.state.login //在dom未渲染之前，把数据加载进去（赋值）
			
			console.log(this.$store.state.xy.name) //调用vuex里modules里面的数据
		}
	}
</script>

<style>
</style>
