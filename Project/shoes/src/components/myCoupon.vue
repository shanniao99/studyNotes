<template>
	<div class="coupon-box">
		<div class="coupon">
			<div class="singlecou">  <!-- 未使用 -->
				<div class="singlecou-box">
					<div class="coupon-left">
						<div class="left-quan"></div>
						<div class="txt">
							<div class="txt-size">
								<span>￥</span>
								<p>20</p>
							</div>
							<span>优惠券</span>
						</div>
						<div class="data-time">
							<span>2022.05.27-2022.06.15</span>
						</div>
					</div>
					<div class="line"></div>
					<div class="coupon-right">
						<div class="right-quan"></div>
						<span>优惠</span>
						<span>抵扣</span>
					</div>
				</div>
				<div class="quan-left"></div>
				<div class="quan-right"></div>
			</div>
			<!-- 已使用 -->
			<div class="singlecou used">
				<div class="singlecou-box">
					<div class="coupon-left">
						<div class="left-quan used"></div>
						<div class="txt">
							<div class="txt-size">
								<span>￥</span>
								<p>20</p>
							</div>
							<span>优惠券</span>
						</div>
						<div class="data-time">
							<span>2022.05.27-2022.06.15</span>
						</div>
					</div>
					<div class="line"></div>
					<div class="coupon-right">
						<div class="right-quan used"></div>
						<span>已经</span>
						<span>使用</span>
					</div>
				</div>
				<div class="quan-left"></div>
				<div class="quan-right"></div>
			</div>
			<!-- 已失效 -->
			<div class="singlecou invalid">
				<div class="singlecou-box">
					<div class="coupon-left">
						<div class="left-quan invalid"></div>
						<div class="txt">
							<div class="txt-size">
								<span>￥</span>
								<p>20</p>
							</div>
							<span>优惠券</span>
						</div>
						<div class="data-time">
							<span>2022.05.27-2022.06.15</span>
						</div>
					</div>
					<div class="line"></div>
					<div class="coupon-right">
						<div class="right-quan invalid"></div>
						<span>已经</span>
						<span>失效</span>
					</div>
				</div>
				<div class="quan-left"></div>
				<div class="quan-right"></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.coupon-box {
		width: 750px;
		margin: 0;
		padding: 0;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.coupon {
		width: 710px;
		margin: 0 auto;
	}

	.singlecou {
		width: 580px;
		height: 235px;
		background-color: #ff5e46;
		margin: 20px auto;
		border-radius: 10px;
		position: relative;
	}

	.singlecou-box {
		width: 544px;
		height: 235px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.coupon-left {
		width: 305px;
		height: 205px;
		box-sizing: border-box;
		border: 3px solid #fff;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.left-quan {
		width: 22px;
		height: 50px;
		border-bottom-right-radius: 50px;
		border-top-right-radius: 50px;
		border-top: 3px solid #fff;
		border-right: 3px solid #fff;
		border-bottom: 3px solid #fff;
		background-color: #ff5e46;
		position: absolute;
		top: 75.5px;
		left: -3px;
		z-index: 1;
		box-sizing: border-box;
	}

	.coupon-left .txt {
		display: flex;
		align-items: baseline;
		justify-content: space-evenly;
	}
	.txt-size{
		display: flex;
		justify-content: center;
		align-items: baseline;
	}
	.coupon-left .txt span {
		font-size: 32px;
		color: #fff;
		font-family: "苹方";
	}

	.coupon-left .txt span:first-child {
		font-size: 48px;
		color: #fff;
		font-family: "苹方";
	}

	.coupon-left .txt p {
		font-size: 72px;
		color: white;
		font-family: "苹方";
		padding: 0;
		margin: 0;
	}
	.data-time{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.data-time span{
		font-size: 22px;
		color: #fff;
		font-family: "苹方";
	}
	.quan-left {
		width: 23px;
		height: 54px;
		border-bottom-right-radius: 50px;
		border-top-right-radius: 50px;
		background-color: #fff;
		position: absolute;
		top: 92.5px;
		left: 0;
		z-index: 1111;
	}

	.quan-right {
		width: 23px;
		height: 54px;
		border-bottom-left-radius: 50px;
		border-top-left-radius: 50px;
		background-color: #fff;
		position: absolute;
		top: 92.5px;
		right: 0;
		z-index: 1111;
	}

	.line {
		width: 0;
		height: 235px;
		border: 1px dashed #fff;
	}

	.coupon-right {
		width: 200px;
		height: 205px;
		background-color: #fff;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.right-quan {
		width: 40px;
		height: 54px;
		border-bottom-left-radius: 50px;
		border-top-left-radius: 50px;
		background-color: #ff5e46;
		position: absolute;
		top: 74.5px;
		right: -20px;
		z-index: 1;
		box-sizing: border-box;
	}
	.coupon-right span{
		font-size: 50px;
		color: #ff5e46;
		font-weight: bolder;
		font-family: "黑体";
	}
	.used{
		background-color:#ff7c76
	}
	.used .coupon-right span{
		color: #ff7c76;
	}
	.invalid{
		background-color: #999999;
	}
	.invalid .coupon-right span{
		color: #999999;
	}
</style>
