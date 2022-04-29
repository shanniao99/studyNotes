<template>
	<div>
		<button @click="show=!show">动画切换</button>
		<transition name="fade">
			<p v-if="show">Hello vue!</p>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		}
	}
</script>

<style>
	.fade-enter-active, /* 定义进入过渡生效时的状态/定义离开过渡生效时的状态 */
	.fade-leave-active {
		transition: opacity .5s;
	}

	.fade-enter,/* 定义进入过渡的开始状态/定义离开过渡的结束状态 */
	.fade-leave-to {
		opacity: 0;
	}
</style>
