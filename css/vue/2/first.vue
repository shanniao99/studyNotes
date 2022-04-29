<template>
	<div class="on">
		<b ref="box">第一个组件（vue不推荐Dom操作，推荐使用ref命名）</b>
	</div>
</template>

<script>
	export default{
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
