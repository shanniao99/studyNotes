export default {
	data(){
		return{
			str:"共用数据"
		}
	},
	methods:{
		fn(){
			console.log("混入方法")
		}
	},
	created(){
		console.log("混入的生命周期",this.str)
	}
}