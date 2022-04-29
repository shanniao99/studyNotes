<template>
	<div>
		<slot name="a"></slot>--<slot></slot>第二个组件--{{meg}}--<slot name="b"></slot>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				meg:"子组件data"
			}
		},
		methods:{
			test(){
				console.log("子组件方法")
			}
		},
		mounted(){ 
			//监听事件总线上mn事件的触发 $off() 用来清空前面的累积
			this.$bus.$off().$on("mn",function(val){
				console.log(val)
			})
		}
	}
</script>

<style>
</style>
