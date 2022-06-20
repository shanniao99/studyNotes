<template>
	<div class="hello">
		<h2>显示和隐藏</h2>
	</div>
</template>

<script>
	export default {
		beforeCreate() {
			console.log("子组件初始化前")
		},
		created() {
			console.log("子组件初始化后")
		},
		beforeMount() {
			console.log("子组件挂载前")
		},
		mounted() {
			console.log("子组件挂载后")
		},
		beforeUpdate() {
			console.log("子组件数据更新前")
		},
		updated() {
			console.log("子组件更新后")
		},
		beforeDestroy() {
			console.log("子组件销毁前")
		},
		destroyed() {
			console.log("子组件销毁后")
		},
	}
</script>

<style scoped>
</style>
