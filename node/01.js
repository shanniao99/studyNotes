var http=require("http");//加载http模块

//创建服务（回调函数） 并设置request和response响应
var app=http.createServer(function(request,response){
	console.log(request.url);//请求地址
	console.log(request.method);//请求方式
	
	//response.setHeader(name,value) name:响应头的类型，不区分大小写  value:响应头的值
	response.setHeader("content-type","text/html;utf-8")//设置目录防止乱码  
	
	response.write("<h2>Hello,are you OK?<h2>");//设置响应内容
	response.end();//结束响应
})
app.listen("2022",()=>{
	console.log("运行成功，请打开http://localhost:2022查看页面");
})
