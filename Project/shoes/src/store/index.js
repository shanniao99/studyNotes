import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"; //持久化存储

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		footer:[
			{path:"/",icon:"icon-shouye",tit:"首页"},
			{path:"/classify",icon:"icon-fenlei",tit:"分类"},
			{path:"/shoppingcart",icon:"icon-gouwuche",tit:"购物车"},
			{path:"/mine",icon:"icon-wode",tit:"我的"}
		],
		bannerImg:[require("../assets/homeImg/banner1.jpg"),require("../assets/homeImg/banner2.jpg")],
		itemClass:[
			{
				img:require("../assets/homeImg/1.jpg"),
				txt:"女鞋"
			},
			{
				img:require("../assets/homeImg/2.jpg"),
				txt:"男鞋"
			},
			{
				img:require("../assets/homeImg/3.jpg"),
				txt:"真皮包"
			},
			{
				img:require("../assets/homeImg/4.jpg"),
				txt:"女款包包"
			},
			{
				img:require("../assets/homeImg/5.jpg"),
				txt:"皮带"
			},
			{
				img:require("../assets/homeImg/6.jpg"),
				txt:"饰品"
			},
			{
				img:require("../assets/homeImg/7.jpg"),
				txt:"女款凉拖"
			},
			{
				img:require("../assets/homeImg/8.jpg"),
				txt:"男款凉拖"
			},
		]
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
	plugins: [createPersistedState({
		storage: window.sessionStorage
	})]
})
