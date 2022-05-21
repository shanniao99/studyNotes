<template>
	<div>
		<heads :title="$route.params.title"></heads>
		
	</div>
</template>

<script>
	export default{
		mounted() {
			console.log(this.$route.params.title)
		},
		components: {
			heads: () => import("../components/headTit.vue")
		},
	}
</script>

<style>
</style>