// http  fs  path  url  querystring

// nodemon 实时监听模块（修改后不需node xxx.js重启）
// npm install nodemon -g  全局安装(以命令形式启动)


// 配置package.json文件初始化
// npm init

// 安装配置package.json中的模块
// npm install


// mime 动态读取文件类型
// 第三方模块，需要通过npm安装使用
// npm i mime  安装，但不保存到配置文件中
// npm i mime -s 安装并保存到运行环境配置中
// npm i mime -d 安装并保存到到开发环境配置中

// 卸载模块
// npm uninstall mime

let http=require("http")
let fs=require("fs")
let path=require("path")
let mime=require("mime")
let url=require("url")
let qs=require("querystring")
let at=require("art-template")

console.log(mime.getType("123.jpg"))
console.log(mime.getType("123.js"))
console.log(mime.getType("123.html"))



http.createServer((req,res)=>{
	if(req.url=="/"){
		fs.readFile(path.join(__dirname,"html","index.html"),"utf8",(err,data)=>{
			if (err) throw err
			res.end(data)
		})
	}else if(req.url=="/images/123.jpg"){ //每一个资源路径都是一次数据请求
		// 图片资源加载
		fs.readFile(path.join(__dirname,"images","123.jpg"),(err,data)=>{
			if (err) throw err
			res.setHeader("content-type",mime.getType("123.jpg")) 
			res.end(data)
		})
	}else if(req.url=="/123/123.css"){//资源路径和数据请求的路径不一定是对应关系
		// css资源加载
		fs.readFile(path.join(__dirname,"css","index.css"),(err,data)=>{
			if (err) throw err
			res.setHeader("content-type",mime.getType("index.css")+";charset=utf-8") 
			res.end(data)
		})
	}else if((/^\/about\.html+/ig).test(req.url)){ // 路径 "/about.html" 开头
		// about.html资源加载
		fs.readFile(path.join(__dirname,"html","about.html"),"utf8",(err,data)=>{
			if (err) throw err			
			let getobj=qs.parse(url.parse(req.url).query)//拿到get数据并转成对象			
			let result=at.render(data,getobj) //模板引擎渲染数据到HTML中
			res.end(result) //响应结果
		})		
	}else{
		// 其他资源加载
		fs.readFile(path.join(__dirname,req.url),(err,data)=>{
			// if (err) throw err
			res.end(data)
		})
	}
	
	
}).listen("2000",()=>{
	console.log("运行成功")
})



// mime  art-template  nodemon
// 练习：评论提交效果制作





