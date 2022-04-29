var http=require("http"); //加载http模块

// 创建服务，并设置request请求和response响应
var app=http.createServer(function(request,response){
	
	console.log(request.url)  //请求路径
	console.log(request.method) //请求方式
	
	response.setHeader("content-type","text/html;charset=utf-8") //设置响应头，防止乱码
	response.write("<h1>首页</h1>&lt;&gt;")//设置响应内容（支持字符串和buffer数据）
	response.end() //结束响应（后面的代码不会运行）
	
})

// 设置监听端口
app.listen("2000",function(){
	console.log("运行成功，请打开http://localhost:2000查看页面")
})