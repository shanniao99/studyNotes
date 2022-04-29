<template>
	<div>
	<!-- 
	路由
	1.安装：npm install vue-router@版本号
	2.新建一个router.js文件
	3.在router.js文件中引入：
		import Vue from 'vue'
		import Router from "vue-router"
	4.使用router：Vue.use(Router)
	5.创建实例：export default  new Router({})
	6.在main.js文件中引入router.js：
		import router from './router.js'
		new Vue({router, ......}).$mount('#app')
	-->
		<router-link to="/">页面一:path跳转页面</router-link>|
		<router-link :to="{name:'Tu'}">页面二:name跳转页面</router-link>|
		<span @click="turn">{{msg}}<router-link to="/three" tag="b">页面三(当前元素不能绑定事件)</router-link></span>
		<hr>
		<router-view></router-view>
		<hr>
		<router-view name="a"></router-view>
		<hr>
		<router-view name="b"></router-view>
		<hr>
		<button @click="read">读取当前路由信息</button>
		<hr><hr>
		
		路由传参<br>
		<router-link :to="{path:'/path-can',query:{x:11,y:22}}">页面二：path传参</router-link>|||
		<router-link :to="{name:'/name-can',params:{x:33,y:44}}">页面三：name传参</router-link>
		<router-view></router-view>
		
		<hr><hr>
		重定向<br>
		<router-link to="/four">重定向：跳转至其他页面</router-link>
		<router-view></router-view>
		
		<hr><hr>
		嵌套路由<br>
		<router-link to="/five">在页面一嵌套路由</router-link>
		<router-view></router-view>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"123"
			}
		},
		methods:{
			turn(){
				this.msg="456"
			},
			read(){
				console.log(this.$route);
			}
		}
	}
</script>

<style>
</style>
