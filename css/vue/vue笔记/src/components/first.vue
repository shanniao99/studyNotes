<template>
	<div class="on">
		<button @click="message">子传父</button>
		<b ref="box">第一个组件（vue不推荐Dom操作，推荐使用ref命名）</b>
		<input type="text" v-model="meg">
		{{meg}}--{{asd}}--{{zxc}}
	</div>
</template>

<script>
	export default{
		// props:{
		// 	asd:{
		// 		type:Number,
		// 		required:true
		// 	},
		// 	zxc:{
		// 		type:String,				
		// 		required:false,
		// 		default:"默认数据"
		// 	}
		// },
		props:["asd","zxc"],
		data(){
			return{
				meg:"测试",
				child:"子组件数据11"
			}
		},
		methods:{
			message(){
				// 创建自定义xy事件并携this.child数据
				this.$emit("xy",this.child)
			}
		},
		mounted(){
			this.message() //调用方法里面的message执行
			// 在事件总线上创建自定义mn事件并携this.child数据
			this.$bus.$emit("mn",this.child)
		},
		activated(){
			console.log("页面显示")
		},
		deactivated(){
			console.log("页面隐藏")
		},
		beforeDestroy(){
			console.log("页面销毁前自动触发",this.$refs.box)
		},
		destroyed(){
			console.log("页面销毁后自动触发",this.$refs.box)
		}
	}
</script>

<style scoped>
	.on{
		background-color: yellow!important;
	}
</style>
