<template>
	<div>
		<button type="button" @click="btn">点击</button><br>
		<span :[cls]="name">{{msg}}</span>
		<div v-html="text"></div>
		<input type="text" @keydown="key" id="inp">
		<p></p>
		<hr>
		<hr>
		<hr>
		<ul @click.capture="fn">
			<li v-for="val in arr" :key="val">{{val}}</li>
		</ul>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "This is Vue.js",
				bool: true,
				text: "<h2>Vue.js</h2>",
				name: "on",
				cls: "class",
				val:'',
				arr:[11,22,33,44,55]
			}
		},
		methods: {
			btn() {
				this.bool = !this.bool;
				if (this.bool) {
					this.cls = "class";
				} else {
					this.cls = "id";
				}
			},
			key() {
				var val=document.getElementById("inp").value;
				console.log(val)
				if (val == "a") {
					document.getElementsByTagName("p")[0].innerHTML = "啊对对对";
				}else{
					document.getElementsByTagName("p")[0].innerHTML = "a才有效哦";
				}
			},
			fn(){
				// this.arr.push(66); //在数组末尾添加一个元素
				console.log(this.arr)
				// this.arr.pop();//删除末尾最后一个值
				console.log(this.arr);
				this.arr.shift();//删除数组第一个元素
				console.log(this.arr);
				this.arr.unshift(11);//在数组头部添加一个元素
				console.log(this.arr);
				this.arr.splice(1,3);//截取数组从下标1开始到后面3个元素
				console.log(this.arr);
				this.arr.sort();//正序
				this.arr.reverse();//反序
				console.log(this.arr)
				
				
			}
		}

	}
</script>

<style>
	.on {
		font-size: 24px;
		color: lightseagreen;
	}

	#on {
		font-size: 18px;
		color: slateblue;
	}
</style>
