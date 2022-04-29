<template>
	<div>
		1.过滤器<br>
		<textarea v-model="msg"></textarea>
		<p>已输入{{msg|len}}个字</p>
		2.自定义指令
		<div v-res1>小写转大写：abcdefg</div>
		<input type="text" v-model.number="num1">
		<input type="text" v-model.number="num2"><br>
		计算两数之和:<span v-res2="[num1,num2]"></span><br>
		3.混入：利用模块化，把部分js独立出去<br>
		调用混入数据：{{str}}
		
	</div>
</template>

<script>
	import hr from "./components/mixin.js"
	var that=null
	export default{
		mixins:[hr],
		data(){
			return{
				msg:'',
				num1:123,
				num2:456
			}
		},
		created(){
			that=this;
			this.hr();//调用混入的方法
		},
		directives:{
			res1:function(el){
				el.innerText=el.innerText.toUpperCase();
			},
			res2:function(el,binding){
				var sum=0;
				for(let i=0;i<binding.value.length;i++){
					sum+=binding.value[i];
				}
				el.innerText=sum;
			}
		},
		filters:{  //过滤器
			len(val){  //val：文本框中的内容
			if(val.length>=15){
				that.msg=that.msg.substr(0,15)
			}
				return val.length
			}
		}
	}
</script>

<style>
</style>
