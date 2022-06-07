import {
	reqCategoryList
} from '@/api';
const state = {
	categoryList:[],
};
const mutations = {
	//创建方法 将请求到的数据放入state中
	CATEGORYLIST(state,categoryList){
		state.categoryList=categoryList
	}
};
const actions = {
	//async 函数：会自动把返回值变成promise数据
	//await 关键字：只能在async函数内部使用，
	// 会暂停的代码运行，并去等待promise结果出来，再继续往下运行代码
	async categoryList({commit}) {
		let res = await reqCategoryList();
		if(res.code==200){
			commit("CATEGORYLIST",res.data);
		}
	}
};
const getters = {};

export default {
	state,
	getters,
	mutations,
	actions,
}
