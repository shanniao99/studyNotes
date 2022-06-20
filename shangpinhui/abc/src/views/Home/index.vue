<template>
	<div>
		<typeNav></typeNav>
		<ListContainer></ListContainer>
		<Recommend></Recommend>
		<Rank></Rank>
		<Like></Like>
		<Floor></Floor>
		<Floor></Floor>
		<Brand></Brand>
	</div>
</template>

<script>
	export default{
		components:{
			ListContainer:()=>import("@/views/Home/ListContainer"),
			Recommend:()=>import("@/views/Home/Recommend"),
			Rank:()=>import("@/views/Home/Rank"),
			Like:()=>import("@/views/Home/Like"),
			Floor:()=>import("@/views/Home/Floor"),
			Brand:()=>import("@/views/Home/Brand")
		}
	}
</script>

<style>
</style>