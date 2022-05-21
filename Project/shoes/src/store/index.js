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
					id:"01",
					img: require("../assets/homeImg/s3_1.jpg"),
					txt: "2019春季新款男鞋",
					price: 249,
					colors: [
						{image: require("../assets/homeImg/s3_1.jpg"),
							color: "黄色"
						},
						{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "黑色"
						},
						{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "蓝色"
						},
						{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["39", "40", "41", "42", "43", "44", "45"],
				},
				{
					id:"02",
					img: require("../assets/homeImg/s3_2.jpg"),
					txt: "春夏鞋店爆款女鞋",
					price: 169,
					colors: [
						{image: require("../assets/homeImg/s3_2.jpg"),
							color: "粉色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "橙色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "蓝色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["34", "35", "36", "37", "38"]
				},
				{
					id:"03",
					img: require("../assets/homeImg/s3_3.jpg"),
					txt: "牛皮爆款时尚女包",
					price: 239,
					colors: [{
							image: require("../assets/homeImg/s3_3.jpg"),
							color: "黑色"
						},
						{
							image: require("../assets/homeImg/s3_3.jpg"),
							color: "白色"
						},
					],
					shoeSize: []
				}
			],
			[{
					id:"04",
					img: require("../assets/homeImg/s3_4.jpg"),
					txt: "左右春夏爆款",
					price: 289,
					colors: [{
							image: require("../assets/homeImg/s3_4.jpg"),
							color: "棕色"
						},
						{
							image: require("../assets/homeImg/s3_4.jpg"),
							color: "黑色"
						},
						{
							image: require("../assets/homeImg/s3_4.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["39", "40", "41", "42", "43", "44", "45"],
				},
				{
					id:"05",
					img: require("../assets/homeImg/s3_2.jpg"),
					txt: "春夏鞋店爆款女鞋",
					price: 169,
					colors: [{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "粉色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "橙色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "蓝色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["34", "35", "36", "37", "38"]
				},
				{
					id:"06",
					img: require("../assets/homeImg/s3_3.jpg"),
					txt: "牛皮爆款时尚女包",
					price: 239,
					colors: [{
							image: require("../assets/homeImg/s3_3.jpg"),
							color: "黑色"
						},
						{
							image: require("../assets/homeImg/s3_3.jpg"),
							color: "白色"
						},
					],
					shoeSize: []
				}
			],
			[{
					id:"07",
					img: require("../assets/homeImg/s3_1.jpg"),
					txt: "2019春季新款男鞋",
					price: 249,
					colors: [{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "黄色"
						},
						{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "黑色"
						},
						{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "蓝色"
						},
						{
							image: require("../assets/homeImg/s3_1.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["39", "40", "41", "42", "43", "44", "45"],
				},
				{
					id:"08",
					img: require("../assets/homeImg/s3_2.jpg"),
					txt: "春夏鞋店爆款女鞋",
					price: 169,
					colors: [
						{image: require("../assets/homeImg/s3_2.jpg"),
							color: "粉色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "橙色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "蓝色"
						},
						{
							image: require("../assets/homeImg/s3_2.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["34", "35", "36", "37", "38"]
				},
				{
					id:"09",
					img: require("../assets/homeImg/s3_4.jpg"),
					txt: "左右春夏爆款",
					price: 289,
					colors: [{
							image: require("../assets/homeImg/s3_4.jpg"),
							color: "棕色"
						},
						{
							image: require("../assets/homeImg/s3_4.jpg"),
							color: "黑色"
						},
						{
							image: require("../assets/homeImg/s3_4.jpg"),
							color: "白色"
						},
					],
					shoeSize: ["39", "40", "41", "42", "43", "44", "45"],
				},
			]
			
		],
		special: [
			[{
					img: require("../assets/homeImg/s4_1.jpg"),
					txt: "左右鞋店春秋爆款断码...",
					price: 129
				},
				{
					img: require("../assets/homeImg/s4_2.jpg"),
					txt: "左右鞋店春秋爆款断码...",
					price: 129
				},
			],
			[{
					img: require("../assets/homeImg/s4_2.jpg"),
					txt: "左右鞋店春秋爆款断码...",
					price: 129
				},
				{
					img: require("../assets/homeImg/s4_1.jpg"),
					txt: "左右鞋店春秋爆款断码...",
					price: 129
				},
			]
		],
		newPro: [
			[{
					img: require("../assets/homeImg/s5_1.jpg"),
					txt: "左右鞋店爆款...",
					price: 389
				},
				{
					img: require("../assets/homeImg/s5_2.jpg"),
					txt: "左右鞋店爆款...",
					price: 469
				},
				{
					img: require("../assets/homeImg/s5_3.jpg"),
					txt: "左右鞋店2019...",
					price: 499
				},
			],
			[{
					img: require("../assets/homeImg/s5_1.jpg"),
					txt: "左右鞋店爆款...",
					price: 389
				},
				{
					img: require("../assets/homeImg/s5_2.jpg"),
					txt: "左右鞋店爆款...",
					price: 469
				},
				{
					img: require("../assets/homeImg/s5_3.jpg"),
					txt: "左右鞋店2019...",
					price: 499
				},
			],
			[{
					img: require("../assets/homeImg/s5_1.jpg"),
					txt: "左右鞋店爆款...",
					price: 389
				},
				{
					img: require("../assets/homeImg/s5_2.jpg"),
					txt: "左右鞋店爆款...",
					price: 469
				},
				{
					img: require("../assets/homeImg/s5_3.jpg"),
					txt: "左右鞋店2019...",
					price: 499
				},
			],
		],
		morePro: [{
				img: require("../assets/homeImg/s6_1.jpg"),
				txt: "左右鞋店春夏爆款福利",
				price: 169,
				oldprice: "￥349"
			},
			{
				img: require("../assets/homeImg/s6_2.jpg"),
				txt: "左右鞋店春夏爆款凉拖",
				price: 199,
				oldprice: "￥409"
			},
			{
				img: require("../assets/homeImg/s6_3.jpg"),
				txt: "左右鞋店春夏爆款福利",
				price: 149,
				oldprice: "￥309"
			},
			{
				img: require("../assets/homeImg/s6_4.jpg"),
				txt: "左右鞋店春夏爆款福利",
				price: 199,
				oldprice: "￥409"
			},
			{
				img: require("../assets/homeImg/s3_1.jpg"),
				txt: "左右鞋店春夏爆款福利",
				price: 169,
				oldprice: "￥349"
			},
			{
				img: require("../assets/homeImg/s3_2.jpg"),
				txt: "左右鞋店春夏爆款福利",
				price: 169,
				oldprice: "￥349"
			},
		],
		classifyShoes: [{
				id: "female",
				tit: "女鞋"
			},
			{
				id: "male",
				tit: "男鞋"
			},
			{
				id: "pibao",
				tit: "皮包"
			},
			{
				id: "shipin",
				tit: "饰品"
			},
			{
				id: "femalebag",
				tit: "女款包包"
			},
			{
				id: "malebag",
				tit: "男款包包"
			},
			{
				id: "clothes",
				tit: "左右服装"
			}
		],
		right_item: [
			[{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
			],
			[{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
			],
			[{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
			],
			[{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
			],
			[{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
			],
			[{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
			],
			[{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
				{
					img: require("../assets/homeImg/c_3.jpg"),
					txt: "休闲鞋"
				},
				{
					img: require("../assets/homeImg/c_4.jpg"),
					txt: "运动鞋"
				},
				{
					img: require("../assets/homeImg/c_5.jpg"),
					txt: "豆豆鞋"
				},
				{
					img: require("../assets/homeImg/c_6.jpg"),
					txt: "拖鞋"
				},
				{
					img: require("../assets/homeImg/c_7.jpg"),
					txt: "凉鞋"
				},
				{
					img: require("../assets/homeImg/c_1.jpg"),
					txt: "帆布鞋"
				},
				{
					img: require("../assets/homeImg/c_2.jpg"),
					txt: "高跟鞋"
				},
			],
		],
		items_nav: [{
			tit: "综合",
			show: false
		}, {
			tit: "最热",
			show: false
		}, {
			tit: "新品",
			show: false
		}, {
			tit: "价格",
			show: true
		}],
		items: [{
				img: require("../assets/homeImg/1_1.jpg"),
				txt: "左右鞋店春夏爆款福利169",
				price: "169",
				oldprice: "￥349",
				buy: 8,
				look: 529
			},
			{
				img: require("../assets/homeImg/1_2.jpg"),
				txt: "左右鞋店春夏爆款209",
				price: "209",
				oldprice: "￥429",
				buy: 30,
				look: 357
			},
			{
				img: require("../assets/homeImg/1_3.jpg"),
				txt: "左右鞋店春夏爆款200",
				price: "200",
				oldprice: "￥409",
				buy: 34,
				look: 428
			},
			{
				img: require("../assets/homeImg/1_4.jpg"),
				txt: "左右鞋店春夏爆款175",
				price: "175",
				oldprice: "￥369",
				buy: 25,
				look: 593
			},
			{
				img: require("../assets/homeImg/1_5.jpg"),
				txt: "左右鞋店春夏爆款175",
				price: "169",
				oldprice: "￥349",
				buy: 49,
				look: 436
			},
			{
				img: require("../assets/homeImg/1_1.jpg"),
				txt: "左右鞋店春夏爆款福利169",
				price: "169",
				oldprice: "￥349",
				buy: 8,
				look: 529
			},
			{
				img: require("../assets/homeImg/1_2.jpg"),
				txt: "左右鞋店春夏爆款209",
				price: "209",
				oldprice: "￥429",
				buy: 30,
				look: 357
			},
		],
		shoppingcart:[],
		mine_order:[
			{icon:"icon-daifukuan",txt:"待付款"},
			{icon:"icon-daifahuo",txt:"待发货"},
			{icon:"icon-daifahuo1",txt:"待收货"},
			{icon:"icon-yiwancheng-yiban-02",txt:"已完成"},
		],
		listFa:[
			{icon:require("../assets/info.png"),txt:"我的消息"},
			{icon:require("../assets/shoucang.png"),txt:"我的收藏"},
			{icon:require("../assets/address.png"),txt:"我的地址"},
			{icon:require("../assets/zuji.png"),txt:"我的足迹"},
			{icon:require("../assets/kaquan.png"),txt:"我的卡券"},
			{icon:require("../assets/jifen.png"),txt:"我的积分"},
			{icon:require("../assets/kefu.png"),txt:"我的客服"},
		]
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
	plugins: [
		createPersistedState({
			storage: window.localStorage,
			key: "store",
			render(state) {
			// 要存储的数据:采用es6扩展运算符的方式存储了state中所有的数据
				return {...state};
			}
		})
	]
})
