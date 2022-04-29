<template>
	<div>
		<button v-on:click="tab(123456789)">点击切换</button>
		<hr>
		{{meg}}--{{num+6}}--{{bool?"你好":meg}}--{{arr[1]}}
		<div v-bind:class="bool?cla:''" src="" title="" href="">属性绑定用v-bind:</div>
		<img src="./assets/logo.png">
		<img v-bind:src="pic" >
		<ul>
			<li v-for="v,i in arr" v-bind:key="v">
				{{i}}---{{v}}
			</li>
		</ul>
		<div v-if="bool">123</div>
		<div v-else>456</div>
		组件：用来管理可复用模块的（vue页面里面嵌套vue页面）
		1 在vue实例里面注册(建议不要用标签名字注册)
		2 通过import...from...的方式赋值，给予文件路径
		3 页面中通过名字标签使用
		<abc></abc>
	</div>	
</template>

<script>
	import def from "./components/first.vue"
	export default{
		data(){ //放置静态数据
			return {
				meg:"hello",
				num:66,
				bool:false,
				arr:["aa","bb","cc"],
				cla:"on",
				pic:require("./assets/logo.png"), //图片资源需要转换才能显示
				
			}
		},
		methods:{ //放置函数方法
				tab:function(v){
					console.log(v,this) //这里的this指向vue实例对象，不能用箭头函数
					this.bool=!this.bool //读取data数据并个修改它
				}
		},
		components:{
			abc:def
		}
	}
</script>

<style scoped>
/* css不能空格，图片资源一定要存在  scoped表示css只在当前页面有效 */
.on{
	background-color: red;
}
</style>