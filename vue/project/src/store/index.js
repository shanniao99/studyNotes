import Vue from "vue"
import Vuex from "vuex"
import other from "./other.js"

Vue.use(Vuex) //使用vuex

export default new Vuex.Store({  //创建store(vuex核心仓库)
	state:{ //用于存放组件之间共享的数据，采用单一状态树 
		bool:true,
		list:[
			{tit:"首页"},
			{tit:"新品"},
			{tit:"推荐"},
			{tit:"热门"}
		],
		news:[
			{tit:"冬奥会总结",time:"2022-04-08",body:"冬奥会冬残会总结表彰大会"},
			{tit:"杭州杀妻案",time:"2022-04-07",body:"杭州杀妻碎尸案凶手二审维持死刑"},
			{tit:"浦东疫情",time:"2022-04-07",body:"浦东3名处级干部防疫不力被免职"},
			{tit:"上海疫情",time:"2022-04-08",body:"上海新增本土感染者超过两万例"}
		],
		stu:[
			{id:1001,text:"123456",done:true},
			{id:1002,text:"666666",done:false}
		]
	},
	getters:{  //相当于vuex中的计算属性 对state做处理再返回
	//默认会传state和getters两个参数
	//使用state:访问数据，使用getters：访问访问器中的其他访问器函数
		timer:function(state){
			console.log(state);
			return state.news.filter(v=>v.time=="2022-04-08");
		},
		n:function(state){
			return function(val){
				return state.news.filter(v=>v.tit==val)
			}
		}
	},
	mutations:{  //放置改变数据方法的集合/处理数据逻辑方法
	//使用store.commit来触发方法  必须是同步函数
		change:function(state,val){  //同步方法
			state.list[2].tit=val;  //修改state中list数组下标为2的元素值
		}
	},
	actions:{  //异步方法   
	//action提交的是mutation，而不是直接变更状态  可以包含任意异步操作
	//通过store.dispatch方法触发
		yibu(store,val){
			store.commit("change",val);
		}
	},
	modules:{  //模块 解决store对象臃肿问题
		other
	},
	
	//mutation和action的区别：
	// 1.流程顺序：先触发action，action再触发mutation
	// 2.角色定位：
	// mutation专注于修改state，理论上是修改state的唯一途径
	// action：业务代码，异步请求
	// 3.限制：
	// mutation：必须同步执行
	// action：可以异步，但不能直接操作state
})