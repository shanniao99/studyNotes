//art-template 模板引擎
//安装art-template 第三方包  
//在项目当前目录npm install art-template，默认会安装在项目当前node_modules文件夹下
let http=require("http");
let fs=require("fs");
let at=require("art-template");
http.createServer((req,res)=>{
	res.setHeader("Content-Type","text/html,charset=utf-8");
	if(req.url=="/"){
		fs.readFile("./html/index.html",(err,data)=>{
			if(err) throw err;
			//at.render()编译模板文档并返回渲染结果
			let str=at.render(data.toString(),{
				name:"张三",
				main:"个人信息",
				age:18,
				hobbies:["读书","写字","画画"]
			})
			res.end(str);
		})
	}else{
		res.end("404 Not found");
	}
}).listen("1111",()=>{
	console.log("运行成功");
})




