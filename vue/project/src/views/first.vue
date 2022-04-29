<template>
	<div>
		<second></second>
		<router-view></router-view>
		<router-view name="child"></router-view>
	</div>
</template>

<script>
	import second from "./second.vue"
	export default{
		components:{second},
	}
</script>

<style>
</style>
