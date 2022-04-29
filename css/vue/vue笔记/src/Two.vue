<template>
	<div>
	<span>{{meg}}</span>--{{bool}}-- <span v-once>{{bool}}只加载一次数据</span>
	<div v-show="bool">v-show和v-if不同，通过display来切换显示和隐藏的</div>
	{{tit}}
	<div v-html="tit" :[name]="cla"></div>
	<div @click.capture="test">
		<button v-on:click.stop.capture="change">点击修改</button>
	</div>
	<input type="text" @keydown.65="key">
	<abc v-if="bool"></abc>
	</div>
</template>

<script>
	// vue数据绑定原理:用Object.defineProperty代理器实现set和get监听
	// var a={}
	// var val=null
	// Object.defineProperty(a,"name",{
	// 	get:function(){
	// 		console.log("获取时触发")
	// 		return val
	// 	},
	// 	set:function(v){
	// 		console.log("设置时触发")
	// 		val=v
	// 		return val
	// 	}
	// })
	// a.name=123456
	// console.log(a.name)
	import abc from "./components/first.vue"
	export default{
		data(){
			return{
				meg:"test",
				bool:true,
				obj:{a:123},
				tit:"<h2>标题</h2>",
				cla:"red",
				name:"id"
			}
		},
		methods:{
			change(){
// console.log(this)
// console.log(this.obj==this._data.obj) //this下的data数据和this下的_data数据是同一个地址的数据
// Object.freeze(this.data.meg) //冻结属性，不能修改了
				this.meg=123456789
				this.bool=!this.bool
			},
			test(){
				console.log("事件冒泡了")
			},
			key(){
				console.log("你按下了a键")
			}
		},
		components:{
			abc
		},
		beforeCreate:function(){
			console.log("vue实例化之前，自动触发",this.meg)
		},
		created(){
			console.log("vue实例化之后，自动触发",this.meg)
		},
		beforeMount(){
			console.log("vue页面渲染挂载之前，自动触发",document.querySelector("button"))
		},
		mounted(){			
			console.log("vue页面渲染挂载之后，自动触发",document.querySelector("button"))
		},
		beforeUpdate(){
			console.log("页面显示数据更新前，自动触发",this.meg,document.querySelector("span").innerText)
		},
		updated(){
			console.log("页面显示数据更新后，自动触发",this.meg,document.querySelector("span").innerText)
		}
	}
</script>

<style>
	#red{
		background-color: red;
	}
</style>
