<template>
	<div>
		<button @click="count++">点击了{{count}}次</button>
		<h3>{{title}}</h3>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				count:0
			}
		},
		props:['title']
	}
</script>

<style>
	
</style>
