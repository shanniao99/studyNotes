<template>
	<div class="btn">
		<div class="btn_l">
			<div class="small"></div>
			<div class="big"></div>
			<div class="small"></div>
		</div>
		<div class="btn_r">
			<div class="big_p">
				<div class="big"></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.btn {
		width: 160px;
		height: 55px;
		border: 1px solid white;
		border-radius: 50px;
		display: flex;
		align-items: center;
	}
	
	.btn_l {
		width: 79px;
		height: 40px;
		border-right: 1px solid white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
	
	.small {
		width: 10px;
		height: 10px;
		background-color: white;
		border-radius: 50%;
	}
	
	.big {
		width: 15px;
		height: 15px;
		background-color: white;
		border-radius: 50%;
	}
	
	.btn_r {
		width: 80px;
		height: 40px;
		display: flex;
		align-items: center;
	}
	
	.big_p {
		width: 30px;
		height: 30px;
		border: 3px solid white;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
