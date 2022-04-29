// npm install mongoose -s
var mongoose=require("mongoose")

//连接user数据库(不存在会自动创建)
mongoose.connect("mongodb://localhost/user").then(res=>{
	console.log("连接成功")
}).catch(err=>{
	console.log(err,"连接失败")
})


// 设计数据字段
var people=new mongoose.Schema({
	name:{
		type:String,
		required:true  //必填
	},
	password:String,
	age:Number,
	friends:{
		type:Array,
		default:["aa","bb"]
	}
})

// 应用字段设计到对应的数据集合中(集合不存在会自动创建)
var p=mongoose.model("web07",people)


// 插入数据（不是所有数据都能插入）
// var zs=new p({
// 	name:"zhangsan",
// 	alive:true //不在字段设计范围内的不会添加进去
// })
// zs.save().then(()=>{
// 	console.log("插入成功")
// }).catch(err=>{
// 	console.log(err)
// })

// for(var i=0;i<50;i++){
// 	new p({
// 		name:"张三"+i,
// 		age:18+i
// 	}).save()
// }

// 删除数据 deleteOne   deleteMany
// p.deleteMany({age:{$lte:20}}).then(()=>{
// 	console.log("删除成功")
// })


// 更新数据 updateOne   updateMany
// p.updateMany({age:{$lte:25}},{name:"李四"}).then(()=>{
// 	console.log("更新成功")
// })


// 查找数据 findOne   find
// p.find({age:{$lte:25}}).then(data=>{
// 	console.log(data,"查找成功")
// })


// 练习：简易node数据后台制作
// 打开localhost:2000页面查看后台数据
// 进入localhost:2000数据展示页要进行登录验证
// 1 没登录                跳转登录页
// 2 已登录（时间过期）     跳转登录页
// 2 已登录（在有效期）     跳转数据展示页（调用数据库里面的数据渲染到模板显示）

// 登录页：表单提交数据（管理员不能注册）
// 登录时 --> 数据库查找 --> 找到了就登陆成功 --> 签发token（设置过期时间） --> 跳数据展示页（把token带过去存储下来）

// localhost:2000数据展示页
// 检查本地存储是否有token
// 1 没token                跳转登录页
// 有token --> 通过ajax传递token去后台验证
// token时间过期     跳转登录页
// token在有效期     跳转数据展示页（调用数据库里面的数据渲染到模板显示）


