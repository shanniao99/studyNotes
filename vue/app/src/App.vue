<template>
	<div>
		<abc v-if="bool"></abc>
		<button @click="bool=!bool">点击显示和隐藏</button>
		<hr>
		姓:<input type="text" v-model="xing"><br />
		名:<input type="text" v-model="ming"/><br>
		姓名:<input type="text" v-model="xm"/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool: true,
				xing:'',
				ming:''
			}
		},
		computed:{
			xm:{
				get(){
					return this.xing+" "+this.ming;
				},
				set(val){
					console.log(val.split(" "))
					this.xing=val.split(" ")[0];
					this.ming=val.split(" ")[1]
				}
			}
		},
		components: {
			abc: () => import("./components/HelloWorld.vue")
		},
		beforeCreate() {
			console.log("父组初始化前")
		},
		created() {
			console.log("父组件初始化后")
		},
		beforeMount() {
			console.log("父组件挂载前")
		},
		mounted() {
			console.log("父组件挂载后")
		},
		beforeUpdate() {
			console.log("父组件数据更新前")
		},
		updated() {
			console.log("父组件更新后")
		},
		beforeDestroy() {
			console.log("父组件销毁前")
		},
		destroyed() {
			console.log("父组件销毁后")
		},
	}
</script>
<style>
</style>
