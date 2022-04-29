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
		width: 1.6rem;
		height: .55rem;
		border: 0.01rem solid #333333;
		border-radius: .5rem;
		display: flex;
		align-items: center;
	}
	
	.btn_l {
		width: .79rem;
		height: .4rem;
		border-right: 0.01rem solid #999;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
	
	.small {
		width: .1rem;
		height: .1rem;
		background-color: #333333;
		border-radius: 50%;
	}
	
	.big {
		width: .15rem;
		height: .15rem;
		background-color: #333333;
		border-radius: 50%;
	}
	
	.btn_r {
		width: .8rem;
		height: .4rem;
		display: flex;
		align-items: center;
	}
	
	.big_p {
		width: .3rem;
		height: .3rem;
		border: 0.03rem solid #333333;
		border-radius: 50%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
