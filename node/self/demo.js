let http=require("http");
let fs=require("fs");
let at=require("art-template");
http.createServer((req,res)=>{
	if(req.url=="/"){
		fs.readFile("./html/demo.html",(err,data)=>{
			if(err){
				return res.end("404 not found");
			}
			
			fs.readFile("../html",(err,data)=>{
				if(err){
					return res.end("html is Not found");
				}
				let str=at.render(data.toString(),{
					files:files
				})
				res.end(str);
			})
		})
	}else{
		let filepath=req.url;
		fs.readFile("../html"+filepath,(err,data)=>{
			if(err){
				return res.end("404");
			}
			res.end(data);
		})
	}
}).listen("1111",()=>{
	console.log("运行成功");
})