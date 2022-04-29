<template>
	<div>
		<one></one>
		<one title="Hello vue.js"></one>
		<div>
			<button v-for="val in tab" :key="val" :class="['tab-button',{active: currentTab === val}]"
				@click="currentTab=val">{{val}}</button>
				<component :is="changeTab" class="tab"></component>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: ["首页", "新品", "推荐"],
				currentTab: "首页"
			}
		},
		computed:{
			changeTab(){
				return this.currentTab;
			}
		},
		components: {
			one: () => import("./components/4_2.vue"),
			首页: () => import("./components/front.vue"),
			新品: () => import("./components/new.vue"),
			推荐:()=>import("./components/recom.vue")
		},
	}
</script>

<style>
	.tab-button {
		padding: 6px 10px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		border: 1px solid #ccc;
		cursor: pointer;
		background: #f0f0f0;
		margin-bottom: -1px;
		margin-right: -1px;
	}

	.tab-button:hover {
		background: #e0e0e0;
	}

	.tab-button.active {
		background: #e0e0e0;
	}

	.tab {
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>
