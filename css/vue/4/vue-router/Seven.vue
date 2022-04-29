<template>
	<div>
		<!-- 
		vue路由 router：实现页面跳转（独立出去组件路径）
		1 安装：
		npm install vue-router@3
		2 配置router/index.js 路由文件
		3 配置main.js
		4 页面中通过router-link和router-view标记来使用		
		
		{{msg}}
		<router-link to="/">页面一（用path属性跳转页面）</router-link>|
		<router-link :to="{name:'other'}">页面二（用name属性跳转页面）</router-link>|
		<div @click="change">
			<router-link to="/456" tag="b">页面三（当前元素不能绑定事件）</router-link>
		</div>
		<hr>默认显示窗口：
		<router-view></router-view>
		<hr>
		命名视图（a窗口）
		<router-view name="a"></router-view>
		<hr>
		命名视图（b窗口）
		<router-view name="b"></router-view>
		<hr>
		<button @click="read">读取当前路由信息</button>
		
		
		
		
		路由传参：
		<router-link :to="{path:'/two',query:{x:12,y:34}}">页面二(path传参)</router-link>
		<router-link :to="{name:'three',params:{x:56,y:78}}">页面三(name传参)</router-link>
		<router-view></router-view>
		
		
		
		<router-link to="/four">页面四（重定向：往页面三跳转）</router-link>
		<router-view></router-view>
		
		-->
		
		嵌套路由：
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"测试"
			}
		},
		methods:{
			change(){
				this.msg="123456"
			},
			read(){
				console.log(this.$route) //读取当前路由信息
			}
		}
	}
</script>

<style>
</style>
