<template>
	<div class="order">
		<div class="order_box" v-for="v,i in order" :key="i">
			<div class="one">
				<div class="one_l">
					<div class="waimai">{{v.logo}}</div>
					<span>{{v.ads}}</span>
				</div>
				<div class="one_r">{{v.state}}</div>
			</div>
			<div class="two">
				<div class="shopping">
					<h2>{{v.h}}<span>{{v.spans}}</span></h2>
					<span><input type="text" :value="v.price" /></span>
				</div>
				<div class="txt">
					<div class="time">{{v.time}}</div>
					<button type="button">{{v.btn}}</button>
				</div>
			</div>
		</div>
		<button type="button" id="btn">点击查看更多</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				order: [{
					logo: "外卖",
					ads: "星月绿洲  月亮岛106号（1楼106）",
					state: "已退款",
					h: "橙意满满",
					spans: "等共1件商品",
					price: "￥13",
					time: "2019-11-7  10:31",
					btn: "再来一单"
				}]
			}
		}
	}
</script>

<style>
</style>
