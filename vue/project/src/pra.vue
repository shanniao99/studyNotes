<template>
	<div class="box">
		<h3 >第一个组件</h3>
		<p>{{title}}</p>
		<button type="button" @click="msg">子传父(字体变大)</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
				child:"子传子数据"
			}
		},
		props: ['title'],
		methods:{
			msg(){
				this.$emit("go")
			}
		},
		mounted(){  //页面渲染挂载后
			//在事件总线上创建自定义事件并携带数据
			this.$bus.$emit("bus",this.child)
		}
	}
</script>


<style scoped>
	.box{
		background-color: lightgreen;
		color: palevioletred;
	}
</style>
