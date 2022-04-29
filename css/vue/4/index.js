import Vue from 'vue'
import Vuex from 'vuex'
import mn from './mine.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		login:false,
		navlist:[
			{tit:"首页"},
			{tit:"分类"},
			{tit:"购物车"},
			{tit:"我的"}
		],
		news:[
			{tit:"1111",time:"04-08",id:1001,classify:"热门"},
			{tit:"2222",time:"04-08",id:1002,classify:"热门"},
			{tit:"3333",time:"04-08",id:1003,classify:"热门"},
			{tit:"4444",time:"04-08",id:1004,classify:"推荐"},
			{tit:"5555",time:"04-08",id:1005,classify:"推荐"}
		]
	},
	getters:{
		hot:function(state){
			console.log(1,state)			
			return state.news.filter(v=>v.classify=="热门")
		},
		tj(state){
			return function(val){
				console.log(val)
				return state.news.filter(v=>v.classify==val)
			}
		}
	},
	mutations:{
		change:function(state,val){
			console.log(state,val)
			state.login=val //修改state中的login值
		} 
	},
	actions:{
		abc:function(store,val){
			setTimeout(()=>{
				console.log(store,val)
				// store.state.login=val //修改state中的login值
				store.commit("change",val) //异步里面调用同步方法来修改数据
			},1000)
		}
	},
	modules:{
		xy:mn
	}
})