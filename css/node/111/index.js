var express=require("express")
var multer=require("multer")
var jwt=require("jsonwebtoken")
var path=require("path")
var fs=require("fs")
var mongoose=require("mongoose")


var app=express()


// 设置文件保存路径和命名规则
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
    cb(null,uniqueSuffix)
  }
})

//应用存储设置
const upload = multer({ storage: storage })

//启动数据库服务
// mongod --dbpath "C:\Users\Administrator\Desktop\web07\data\db" --logpath "C:\Users\Administrator\Desktop\web07\data\log\mongodb.log" --logappend

// 连接数据库
mongoose.connect("mongodb://localhost/user")
// 设计字段
var admin=new mongoose.Schema({
	name:String,
	password:String
})
var product=new mongoose.Schema({
	name:String,
	pic:String,
	num:Number,
	money:String,
	classify:Array
})
// 应用字段
var people=mongoose.model("admin",admin)
var list=mongoose.model("list",product)

// new people({
// 	name:"admin",
// 	password:"123456"
// }).save()



app.use(express.urlencoded()) //配置表单提交post数据时req.body接收

app.engine("html",require("express-art-template")) //设置模板引擎解析的文件格式
app.set("views",path.join(__dirname,"html")) //设置模板引擎解析的文件地址

var key

//首页
app.get("/",(req,res)=>{
	list.find().then((data)=>{
		res.render("list.html",{pro:data.reverse(),str:key})
	})
	
})

//登录页
app.get("/login",(req,res)=>{
	res.render("login.html")
})

//登录验证
app.post("/login",(req,res)=>{
	//数据库查找管理员
	people.findOne(req.body).then((data)=>{
		if(data){//有数据，则登陆成功
			// 签发通行证token（十分钟内有效）
			jwt.sign({test:"测试"},"qwe",{expiresIn:600},(err,token)=>{
				key=token
				res.redirect("/") //传token值到数据页
			})
		}else{
			res.redirect("/login") //重定向，跳登录页
		}
	})
})

// token验证
app.post("/verify",(req,res)=>{
	jwt.verify(req.body.b,"qwe",(event)=>{
		if(event){
			res.send("重新登陆")
		}else{
			res.send("登陆有效")
		}
	})
})

// 提交页
app.get("/add",(req,res)=>{
	res.render("form.html")
})

// 数据提交
app.post("/add",upload.single("pic"),(req,res)=>{
	var obj=req.body //字段数据
	obj.pic=req.file.filename
	new list(obj).save().then(()=>{
		res.redirect("/") //重定向，跳登录页
	})
	
})

// ajax删除路由
app.post("/del",(req,res)=>{
	list.findOne(req.body).then((data)=>{
		fs.unlink("img/"+data.pic,()=>{
			list.deleteOne(req.body).then(()=>{
				res.send("成功")
			})	
		})
	})		
})

// 修改
app.get("/change",(req,res)=>{
	list.findOne(req.query).then((data)=>{
		res.render("form.html",{data})
	})
})

// 接收修改数据
app.post("/change",upload.single("pic"),(req,res)=>{
	var obj=req.body
	obj.pic=req.file && req.file.filename
	list.findOne({_id:obj._id}).then((data)=>{
		if(obj.pic){
			fs.unlink("img/"+data.pic,()=>{
				list.updateOne({_id:obj._id},obj).then(()=>{
					res.redirect("/")
				})
			})
		}else{
			list.updateOne({_id:obj._id},obj).then(()=>{
				res.redirect("/")
			})
		}
	
	})
})

// 外用数据接口(不限定get/post)
// 跨域问题：出于安全考虑：协议不同 端口不同 网址不同等数据无法相互访问
// 解决方式： cors jsonp（限定get方式）
app.get("/data",(req,res)=>{	
	list.find(req.query).then(data=>{
		res.setHeader("Access-Control-Allow-Origin","*") //CORS解决跨域
		res.send(data)
	})
})
app.post("/data",(req,res)=>{	
	list.find(req.body).then(data=>{
		res.setHeader("Access-Control-Allow-Origin","*") //CORS解决跨域
		res.send(data)
	})
})
// jsonp跨域(返回数据必须符合前端的函数调用)
app.get("/get",(req,res)=>{
	list.find().then(data=>{									
		res.send(req.query.a+"("+JSON.stringify(data)+")")
	})
})



// 静态资源加载
app.use("/css",express.static(path.join(__dirname,"css")))
app.use("/",express.static(path.join(__dirname,"img")))


app.listen("2000")
