<template>
	<div>
		<button type="button" v-on:click="tab">点击</button>  <!-- v-on：监听事件 -->
		<div v-bind:class="cla">
			<div v-bind:class="bool?'':on" v-html="bool?'':text"></div>
			<h1 v-if="bool">{{msg}}</h1>
			<ul>
				<li v-for="v in arr" v-bind:key="v">{{bool?v:''}}</li>
			</ul>
			<img v-bind:src="bool?pic:''">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "Vue.js",
				cla: "box",
				bool: true,
				arr: ["水果", "蔬菜", "肉类"],
				pic: require('./assets/logo.png'),
				on: "move",
				text: "<marquee behavior='scroll'>~~~~哈哈哈哈~~~~</marquee>"
			}
		},
		methods: {
			tab: function() {
				var timer;
				this.bool = !this.bool;
				var move = document.getElementsByClassName("move")[0];
				console.log(move)
				if (this.bool) {
					clearInterval(timer);
				} else {
					timer = setInterval(function() {
						move.style.top = Math.floor(Math.random() * 400) + "px";
						move.style.left = Math.floor(Math.random() * 500) + "px";
					}, 100)
				}
			}
		},
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.box {
		width: 500px;
		height: 400px;
		margin: 0 auto;
		border: 1px solid lightgreen;
		text-align: center;
		line-height: 25px;
		position: relative;
	}

	ul {
		list-style: none;
	}

	.move {
		width: 50px;
		height: 50px;
		background-color: lightcoral;
		position: absolute;
	}

	/* on {
		width: 50px;
		height: 50px;
		background-color: lightcoral;
		position: absolute;
		top:0;
		left: 0;
		/* animation: myfirst /* 4s; */
	/* -webkit-animation: myfirst 4s; */

	/* 
	@keyframes myfirst {
		0% {left: 470px;top: 30px;}

		25% {left: 918px;top: 30px;}

		50% {left: 918px;top: 380px;}

		75% {left: 470px;top: 380px;}

		100% {left: 470px;top: 30px;}
	} */

	marquee {
		font-weight: bolder;
		font-size: 40px;
		color: white;
	}
</style>
