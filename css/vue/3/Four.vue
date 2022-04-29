<template>
	<div>
	<!--	
	
		组件：页面里面嵌套页面，一帮用来管理可复用模块的
		组件使用：1 注册 2 声明 2使用
		<abc></abc>
		
		异步组件：实现懒加载
		<two></two>
		
		
		组件切换：（通过component标签里面的is属性实现切换）
		
		keep-alive可以使组件保持活性，而不销毁页面
		（页面显示和隐藏，可通过生命周期activated和deactivated监听）
		
		切换动画：利用transition标记实现
		
		<button @click="test=(test=='abc'?'two':'abc')">切换</button>
	<div class="box">	
		<transition name="move">
			<keep-alive>
				<component :is="test"></component>
			</keep-alive>
		</transition>
	</div>	
	
	
	组件传值：
	父传子：
	1 父组件通过自定义属性传值，子组件通过props接收
	<abc :asd="num" :zxc="str"></abc>
	2 子组件通过插槽slot标签接收父组件标记里面的内容
	父组件通过v-slot:xxx，子组件通过<slot name="a"></slot>的具名插槽来实现不同位置的使用
	<two>
		<template v-slot:a>{{num}}</template>
		默认插槽
		<template v-slot:b>{{str}}</template>
	</two>
	
	
	
	子传父：---{{child}}---
	1 子组件通过$emit自定义事件，父组件随时监听事件执行来实现传值	（子组件触发）
	<abc @xy="loadmessage"></abc>
	
	2 通过ref命名传值 （父组件触发）
	<two ref="sec"></two>	
	<button @click="show">调用子组件数据</button>
	
	-->
	
	子传子：
	通过事件总线的方式传值（修改main.js）
	<button @click="test=(test=='abc'?'two':'abc')">切换</button>
	<component :is="test"></component>
		
	</div>
</template>

<script>
	import def from './components/first.vue'
	export default{
		data(){
			return{
				test:"abc",
				num:123456,
				str:"父组件数据",
				child:null
			}
		},
		components:{
			abc:def,
			two:()=>import("./components/second.vue")
		},
		methods:{
			loadmessage(val){
				console.log(val)
				this.child=val
			},
			show(){
				console.log(this.$refs.sec.meg) //调用子组件数据
				this.$refs.sec.test()//调用子组件方法
			}
		}
	}
</script>

<style scoped>
	.box{
		width: 100%;
		position: relative;
	}
	.box>div{
		position: absolute;
		width: 100%;
	}
	.move-enter{
		left: 100%;
	}
	.move-leave,.move-enter-to{
		left: 0;
		opacity: 1;
	}
	.move-leave-to{
		opacity: 0;
	}	
	.move-enter-active{
		transition: 1s;
	}
	.move-leave-active{
		transition: .5s;
	}
</style>
