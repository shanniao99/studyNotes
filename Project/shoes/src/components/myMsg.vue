<template>
	<div class="box">
		<div class="mid-box">
			<div class="msg-box">
				<h2>2022年5月24号</h2>
				<div class="txt-box">
					<div class="msg">
						<span>订单消息</span>
						<p>您在2022年5月24日9点20分购买的宝贝已发货，请及时查收！</p>
					</div>
				</div>
			</div>
			<div class="msg-box">
				<h2>2022年5月16号</h2>
				<div class="txt-box">
					<div class="msg">
						<span>订单消息</span>
						<p>您在2022年5月16日13点20分购买的宝贝已签收。</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.mid-box {
		width: 710px;
		margin: 0 auto;
	}

	.msg-box {
		width: 710px;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center
	}

	.msg-box h2 {
		font-size: 32px;
		color: #666;
		font-family: "苹方";
	}

	.txt-box {
		width: 100%;
		height: 110px;
		margin: 0 auto;
		background-color: #eee;
		border-radius: 10px;
	}

	.msg {
		width: 680px;
		height: 110px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.txt-box span {
		font-size: 28px;
		color: #666;
		font-family: "苹方";
	}

	.txt-box p {
		font-size: 24px;
		color: #666;
		font-family: "苹方";
	}
</style>
