// express-art-template 专用模板引擎
// 需要先安装 art-template和express
// npm install express-art-template -s
var express=require("express") //加载框架
var app=express() //运行框架

//设置模板引擎的解析文件格式（默认解析views目录下的文件）
app.engine("vue",require("express-art-template"))

// 修改解析文件的存放目录（可针对单个路由单独设置）
app.set("views","html")

app.get("/",(req,res)=>{
	res.render("index.vue")
})

app.get("/about.html",(req,res)=>{
	app.engine("html",require("express-art-template")) //单独设置要解析的文件类型
	console.log(req.query)
	res.render("about.html",req.query)
})


// 静态资源加载(请求路径和文件所在的位置不一定是对应关系)
app.use("/",express.static("html"))
app.use("/images",express.static("images"))

app.listen("2000")//设置监听