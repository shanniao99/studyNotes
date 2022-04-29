<template>
	<div>
		<router-link to="firstchild">页面内跳转</router-link>
		页面一---{{x}}--{{y}}
		<router-view></router-view>
	</div>
</template>

<script>	
	export default{
		props:["x","y"]
	}
</script>

<style>
</style>
