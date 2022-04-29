import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		bool:true,
		images: [
			require("../assets/banner1.jpg"),
			require("../assets/banner2.jpg"),
		],
		Img: [
			require("../assets/banner1.jpg"),
			require("../assets/footer1.jpg"),
			require("../assets/banner2.jpg"),
		],
		footerimg: [{
				url: require("../assets/home_orange.png"),
				tit: "首页",
				to: "/"
			},
			{
				url: require("../assets/order_white.png"),
				tit: "点餐",
				to: "/food"
			},
			{
				url: require("../assets/dengdai_white.png"),
				tit: "订单",
				to: "/order"
			},
			{
				url: require("../assets/mine_white.png"),
				tit: "我的",
				to: "/mine"
			},
		],
		footerimg_o: [
			require("../assets/home_orange.png"),
			require("../assets/order_orange.png"),
			require("../assets/dengdai_orange.png"),
			require("../assets/mine_orange.png"),
		],
		footerimg_w: [
			require("../assets/home_white.png"),
			require("../assets/order_white.png"),
			require("../assets/dengdai_white.png"),
			require("../assets/mine_white.png"),
		],
		drink_list:["热销","优惠","找奶茶","找茗茶","找芝士","找鲜果茶","找牛乳茶","找水果茶"],
		hotdata: [{
				pic: require("../assets/pic1.png"),
				tit: "金桔柠檬  大杯",
				text: "新鲜柠檬，搭配鲜绿的金桔酸甜...",
				price: "￥15",
			},
			{
				pic: require("../assets/pic2.png"),
				tit: "烧仙草  大杯",
				text: "Q弹珍珠、甜糯蜜豆、清爽仙草...",
				price: "￥18",
			},
			{
				pic: require("../assets/pic3.png"),
				tit: "霸气鲜橙",
				text: "颗颗饱满，粒粒新鲜，握着一杯...",
				price: "￥10",
			},
			{
				pic: require("../assets/pic4.jpg"),
				tit: "蜜桃花茶",
				text: "蜜桃花茶是一种非常多元化的果...",
				price: "￥15",
			},
		],
		jia: require("../assets/jia.png"),
		jian: require("../assets/jian.png"),
		nav: [{
				tit: "全部",
				name: "all"
			},
			{
				tit: "待消费",
				name: "buy"
			},
			{
				tit: "已完成",
				name: "complated"
			},
			{
				tit: "已退款",
				name: "refunded"
			}
		],
		num: 0,
		names: "all",
		list:[{
				img: require("../assets/mine_quan.png"),
				tit: "我的优惠券"
			}, {
				img: require("../assets/mine_ca.png"),
				tit: "我的会员卡"
			}, {
				img: require("../assets/mine_lingquan.png"),
				tit: "领券中心"
			}, {
				img: require("../assets/address.png"),
				tit: "我的收货地址"
			},
		],
		delivers:[
			{name:"偶尔",phone:"17673202561",Adefault:true,address:"长沙市天心区五一大道717号"},
			{name:"偶尔",phone:"17673202561",Adefault:false,address:"长沙市望城区月亮岛街道绿洲1楼106号"},
		],
		show:true,
	},
	getters: {},
	mutations: {
		
	},
	actions: {},
	modules: {}
})
