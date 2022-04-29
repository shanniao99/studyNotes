<template>
	<div>
		过滤器：
		<textarea v-model="num"></textarea>
		已输入{{msg|len}}字节
		<hr>
		自定义指令
		<div v-res1>abcdefg</div>
		<div v-res2="num"></div>
		<hr>
		混入：利用模块化，把部分js独立出去
		<br>
		调用混入的数据：{{str}}	
		<hr>
		渲染函数：用js实现组件化
		<abc xy="666"></abc>
		
		
	</div>
</template>

<script>
	import mn from './mixin.js'
	import def from './render.js'
	var that=null
	export default{
		mixins:[mn],
		data(){
			return{
				str:"同名冲突，会覆盖混入数据",
				msg:"",
				num:"123456789"
			}
		},
		components:{
			abc:def
		},
		created(){
			that=this
			this.fn() //调用混入的方法
		},
		directives:{
			res1:function(el){
				el.innerText=el.innerText.split("").reverse().join("")
			},
			res2:{
				update:function(el,binding){
					el.innerText=binding.value.split("").reverse().join("")
				}
			}
		},
		filters:{
			len:function(val){
				//console.log(123,this,that) 注意this指向的问题
				if(val.length>10){
					that.msg=that.msg.substr(0,10)
				}
				return val.length
			}
		}
	}
</script>

<style>
</style>
