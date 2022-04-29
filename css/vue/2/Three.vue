<template>
	<div>
		<button @click="test">按钮</button>
		{{num}}--{{num}}--{{num}}--{{num}}
		<hr>
		<input type="text" :value="str">
		<input type="text" v-model.number.lazy="str">
		{{str}}
		<hr>
		<input type="text" v-model="xing">
		<input type="text" v-model="ming">
		<input type="text" v-model="xm">
		<hr>
		<div :class="cla">class绑定</div>
		<div :class="[a,b]">456</div>
		<div :class="{box:bool1,on:bool2}">456</div>
		<div :style="sty">789</div>
		<div :style="c">789</div>
		<div :style="[c,d]">789</div>
		<template v-if="bool1">123456789</template>
		<div v-html="tit"></div>
		<ul>
			<template v-for="v,i in arr">
				<li v-if="i!=2" :key="i">{{i}}</li>
				<li v-if="i!=2" :key="v.id">{{v.name}}</li>
			</template>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr:[
					{name:"aa",id:"1001"},
					{name:"bb",id:"1002"},
					{name:"cc",id:"1003"},
				],
				tit:"<h1>111</h1>",
				c:{width:"200px",backgroundColor:"green"},
				d:{color:"red"},
				sty:"width: 200px; background-color: green;",
				a:"box",
				b:"on",
				bool1:true,
				bool2:true,
				cla:"box on",
				meg:"hello",
				str:"123456",
				xing:"zhang",
				ming:"san"
			}
		},
		methods:{
			test(){
				this.meg="word"
				console.log(123)
				return 456
			}
		},
		computed:{
			num(){
				console.log(this.meg)
				return 789
			},
			xm:{
				get:function(){
					return this.xing+" "+this.ming
				},
				set:function(val){
					this.xing=val.split(" ")[0]
					this.ming=val.split(" ")[1]
				}
			}
		},
		watch:{
			str:function(a,b){
				console.log("str发生了变化,由"+b+"变成了"+a)
				if(a.length>10){
					this.str=a.substr(0,10)
				}
			}
		}
	}
</script>

<style>
	.box{
		width: 200px;
	}
	.on{
		background-color: red;
	}
</style>
