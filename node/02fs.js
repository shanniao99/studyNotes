let http=require("http");//加载http模块
let fs=require("fs");//加载模块
//创建服务
http.createServer((req,res)=>{
	res.setHeader("content-type","text/html;charset=utf-8");
	if(req.url=="/"){
		//异步读取文件内容
		fs.readFile("file/index.html","utf-8",(err,data)=>{
			if(err) throw err;
			console.log(data);
			res.end(data);
		})
	}else if(req.url=="/hello.html"){
		fs.writeFile("file/index.html","Hi,I'm candy.",{flag:"a+"},(err)=>{
			if(err) throw err;
			console.log("写入成功");
			res.end("你好");
		})
	}else{
		res.end("没有更多啦");
	}
}).listen("2022",()=>{ //监听端口
	console.log("运行成功");
})