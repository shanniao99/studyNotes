let http=require("http");//加载http模块
let fs=require("fs");//加载fs模块
let path=require("path");
let mime=require("mime");
let url=require("url");
let qs=require("querystring");
let at=require("art-template");
console.log(mime.getType("123.jpg"));
console.log(mime.getType("123.html"));


http.createServer((req,res)=>{
	// if(req.url=="/"){
	// 	fs.readFile(path.join(__dirname,"file","index.html"),"utf8",(err,data)=>{
	// 		if(err) throw err;
	// 		res.end(data);
	// 	})
	// }else if(req.url=="/"){}
	console.log(url.parse(req.url));
})
