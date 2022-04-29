<template>
	<div>
		<h2>这是第一个页面</h2>
		<router-link to="onechild">页面内跳转</router-link><br>
		对象模式传参：{{x}}----{{y}}
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		props:["x","y"]
	}
</script>

<style scoped>
</style>
