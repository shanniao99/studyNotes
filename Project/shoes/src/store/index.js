import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"; //持久化存储

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		footer: [{
				path: "/",
				icon: "icon-shouye",
				tit: "首页"
			},
			{
				path: "/classify",
				icon: "icon-fenlei",
				tit: "分类"
			},
			{
				path: "/shoppingcart",
				icon: "icon-gouwuche",
				tit: "购物车"
			},
			{
				path: "/mine",
				icon: "icon-wode",
				tit: "我的"
			}
		],
		bannerImg: [require("../assets/homeImg/banner1.jpg"), require("../assets/homeImg/banner2.jpg")],
		itemClass: [{
				img: require("../assets/homeImg/1.jpg"),
				txt: "女鞋"
			},
			{
				img: require("../assets/homeImg/2.jpg"),
				txt: "男鞋"
			},
			{
				img: require("../assets/homeImg/3.jpg"),
				txt: "真皮包"
			},
			{
				img: require("../assets/homeImg/4.jpg"),
				txt: "女款包包"
			},
			{
				img: require("../assets/homeImg/5.jpg"),
				txt: "皮带"
			},
			{
				img: require("../assets/homeImg/6.jpg"),
				txt: "饰品"
			},
			{
				img: require("../assets/homeImg/7.jpg"),
				txt: "女款凉拖"
			},
			{
				img: require("../assets/homeImg/8.jpg"),
				txt: "男款凉拖"
			},
		],
		recommend: [
			[{
					img: require("../assets/homeImg/s3_1.jpg"),
					txt: "2019春季新款男鞋",
					price: "￥249"
				},
				{
					img: require("../assets/homeImg/s3_2.jpg"),
					txt: "春夏鞋店爆款女鞋",
					price: "￥169"
				},
				{
					img: require("../assets/homeImg/s3_3.jpg"),
					txt: "牛皮爆款时尚女包",
					price: "￥239"
				}
			],
			[{
					img: require("../assets/homeImg/s3_4.jpg"),
					txt: "左右春夏爆款",
					price: "￥289"
				},
				{
					img: require("../assets/homeImg/s3_2.jpg"),
					txt: "春夏鞋店爆款女鞋",
					price: "￥169"
				},
				{
					img: require("../assets/homeImg/s3_3.jpg"),
					txt: "牛皮爆款时尚女包",
					price: "￥239"
				}
			],
			[{
					img: require("../assets/homeImg/s3_1.jpg"),
					txt: "2019春季新款男鞋",
					price: "￥249"
				},
				{
					img: require("../assets/homeImg/s3_2.jpg"),
					txt: "春夏鞋店爆款女鞋",
					price: "￥169"
				},
				{
					img: require("../assets/homeImg/s3_4.jpg"),
					txt: "左右春夏爆款",
					price: "￥289"
				}
			]
		],
		special:[
			[
				{img:require("../assets/homeImg/s4_1.jpg"),txt:"左右鞋店春秋爆款断码...",price:"￥129"},
				{img:require("../assets/homeImg/s4_2.jpg"),txt:"左右鞋店春秋爆款断码...",price:"￥129"},
			],
			[
				{img:require("../assets/homeImg/s4_2.jpg"),txt:"左右鞋店春秋爆款断码...",price:"￥129"},
				{img:require("../assets/homeImg/s4_1.jpg"),txt:"左右鞋店春秋爆款断码...",price:"￥129"},
			]
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
