<template>
	<div>
		<button type="button" @click="test=test=='abc'?'def':'abc'">点击切换</button><br>
		<!-- <abc v-for="post in posts" :key="post.id" :title="post.title"></abc> -->
		
		<!-- 组件切换：通过component标签里面的is属性实现切换 -->
		<!-- 切换动画：利用transition标记实现 -->
		<!-- <div class="on">
			<transition name="change">
				<keep-alive>  keep-alive：使组件保持活性，不销毁页面 
					<component :is="test"></component>
				</keep-alive>
			</transition>
		</div> -->
		
		组件传值<br>
		一、父传子<br>
		1.通过自定义属性传值，子组件通过props接收<br>
		<abc v-for="post in posts" :key="post.id" :title="post.title"></abc>
		2.子组件通过插槽slot标签接收父组件标记里面的内容
		<def>
			<template v-slot:one>{{data1}}</template>
			默认数据
			<template v-slot:two>{{data2}}</template>
		</def>
		<hr><hr>
		二、子传父<br>
		1.子组件通过$emit自定义事件，父组件随时监听事件执行来实现传值（子组件触发）
		<div :style="{ fontSize:Size + 'em' }">
			<abc v-for="post in posts" :key="post.id" :title="post.title" @go="Size+=0.1"></abc>
		</div>
		2.通过ref命名传值（父组件触发）
		<def ref="two" id="def"></def>
		<button @click="show">ref子传父</button>
		<hr><hr>
		三、子传子
		通过事件总线的方式传值(修改main.js 添加：Vue.prototype.$bus=new Vue())
		<button @click="test=test=='abc'?'def':'abc'">点击切换</button><br>
		<component :is="test"></component>
	</div>

</template>

<script>
	import abc from "./pra.vue"
	export default {
		data() {
			return {
				posts: [{
						id: 1,
						title: 'My journey with Vue'
					}
				],
				test:"abc",
				data1:"通过插槽接收的第一个数据",
				data2:"通过插槽接收的第二个数据",
				Size:1
			}
		},
		components: {
			abc,//注意避免标签名冲突的情况
			def:()=>import("./components/two.vue")
		},
		methods:{
			show(){
				//console.log(this.$refs.two.info);//调用子组件数据
				// this.$refs.two.test(); 调用子组件方法
				if(document.getElementById("def").innerText==this.$refs.two.info){
					document.getElementById("def").innerText=this.$refs.two.test();
				}else if(document.getElementById("def").innerText==this.$refs.two.test()){
					document.getElementById("def").innerText=this.$refs.two.info;
				}else{
					document.getElementById("def").innerText=this.$refs.two.info;
				}
				
				
			}
		}
		
	}
</script>

<style scoped>
	.on{
		width: 100%;
		position: relative;
	}
	.on>div{
		width: 100%;
		position: absolute;
	}
	.change-enter{ /* 进入过渡的开始状态 */
		left: 100%;
	}
	.change-leave,.change-enter-to{ /* 定义离开过渡的开始状态, 进入过渡的结束状态 */
		left: 0;
		transition: 1s;/* 1秒过渡 */
	}
	.change-leave-to{ /* 定义离开过渡的结束状态 */
		left: -100%;
	}
</style>
