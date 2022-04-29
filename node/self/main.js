// var add1=require("./hello");
// var add2=require("./hello");
// console.log(add1.add());    //2
// console.log(add2.add());    //3
// let a=require("./hello.js");
// console.log(a.add2(20,30));  //50
// console.log(a.foo);  //50

//http模块
let http=require("http");
http.createServer((req,res)=>{
	res.setHeader("content-type","text/html;charset=utf-8") //设置响应头，防止乱码
	if(req.url=="/"){  //得到请求路径，请求的路径永远以“/”开头
		res.end("index page");
	}else if(req.url=="/login"){
		res.end("login page");
	}else if(req.url=="/register"){
		res.end("register");
	}else if(req.url=="/product"){
		let arr=[
			{name:"产品1",time:"2022-1-1",price:3000},
			{name:"产品2",time:"2022-2-1",price:5000}
		];
		res.end(JSON.stringify(arr));//响应的数据类型必须是字符串或二进制数据
	}else{
		res.end("404 Not found");
	}
}).listen("2022",()=>{
	console.log("启动成功，请访问http://localhost:2022查看数据");
})




