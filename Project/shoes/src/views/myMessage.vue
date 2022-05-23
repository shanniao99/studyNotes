<template>
	<div>
		<heads :title="$route.params.title"></heads>
		我的消息
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		components: {
			heads: () => import("../components/headTit.vue")
		},
	}
</script>

<style>
</style>