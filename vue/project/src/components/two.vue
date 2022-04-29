<template>
	<div class="box">{{msg}}<br />
		<slot name="one"></slot>-----<slot></slot>-----<slot name="two"></slot>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"子组件数据",
				info:"这是子传父的数据"
			}
		},
		methods:{
			test(){
				return "ref子传父方法";
			}
		},
		mounted(){
			//监听事件总线上bus事件的触发$off()来清空前面的累积
			this.$bus.$off().$on("bus",function(val){
				console.log(val)
			})
		}
	}
</script>

<style scoped>
	.box{
		background-color: lightsalmon;
	}
</style>
