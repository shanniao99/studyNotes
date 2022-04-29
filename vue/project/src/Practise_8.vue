<template>
	<div>
		<router-link to="/module">路由模块化</router-link>
		<button @click="turn">事件跳转</button>
		<router-link to="/add">新增路由</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		methods:{
			turn(){
				console.log(this.$route);  //路由的属性
				console.log(this.$router); //路由的方法
				// this.$router.push({  //push跳转页面，有后退记录
				// 	name:"name-can",
				// 	params:{
				// 		x:666,y:333
				// 	}
				// })
				// this.$router.replace({  //replace:替换路由  导航时不会向 history 添加新记录
				// 	name:"name-can",
				// 	params:{
				// 		x:888,y:444
				// 	}
				// })
				
				// this.$router.addRoute({  //新增一级路由
				// 	path:"/add",
				// 	component:()=>import("./views/three.vue")
				// })
				
				this.$router.addRoute("firstchild",{  //新增子级路由  内容不会覆盖原来的
					path:"/add",
					component:()=>import("./views/three.vue")
				})
			}
		}
	}
</script>

<style>
</style>
