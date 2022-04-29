// express 框架
//安装
// npm install express -s
var express=require("express") //加载框架
var app=express() //运行框架

app.use(express.urlencoded()) //配置表单提交post数据时req.body接收

//设置路由
app.use("/123",(req,res,next)=>{
	console.log(123)
	next() //跳转到下一个符合规则的路由
})

app.use("/123",(req,res)=>{
	res.send(["aa","中文"]) //结束响应（支持更多类型的数据，不乱码）
})

app.get("/",(req,res)=>{
	res.send(`限定get方式跳转<hr>
	<img src="123.jpg">
	<img src="images/123.jpg">
	<hr>
	<form action="/add" method="get">
		<input type="text" name="txt"/>
		<input type="submit" value=""/>
	</form>
	<hr>
	<a href="data/123/456.jpg">发表</a>`)
})

// app.get("/add",(req,res)=>{
// 	console.log(req.query) //获取到get数据对象
// 	res.send("get提交")
// })

// app.post("/add",(req,res)=>{
// 	console.log(req.body) //获取到post数据对象(需要提前配置好)
// 	res.send("post提交")
// })

// app.all("/add",(req,res)=>{
// 	console.log(req.query)
// 	console.log(req.body)
// 	res.send("不限定get/post")
// })

// 路由匹配也可以用正则
// app.get(/^\/data/ig,(req,res)=>{ 
// 	res.send("限定请求路径必须以data开头")
// })


// 静态资源加载(请求路径和文件所在的位置不一定是对应关系)
app.use("/",express.static("html"))
app.use("/images",express.static("images"))


app.listen("2000")//设置监听


