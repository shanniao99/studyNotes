let http=require("http");
let fs=require("fs");
http.createServer((req,res)=>{
	res.setHeader("content-type","text/html;charset=utf-8"); //设置响应头，防止乱码
	if(req.url=="/"){
		fs.readFile("./html/index.html",(err,data)=>{
			if(err){
				res.end("404 资源不存在");
			}else{
				res.end(data);
			}
		})
	}else if(req.url=="/img"){
		fs.readFile("./img/c1.png",(err,data)=>{
			if(err){
				res.end("404 资源不存在");
			}else{
				res.setHeader("content-type","image/jpeg;charset=utf-8"); //设置响应头，防止乱码
				res.end(data);
			}
		})
	}else{
		res.end("404  Not found");
	}
}).listen("2222",()=>{
	console.log("启动成功");
})