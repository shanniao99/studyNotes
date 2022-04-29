let http=require("http");
let fs=require("fs");
let at=require("art-template");
let url=require("url");
let qs=require("querystring")
let comment={ 
	comment:[
	{name:"张三",time:"2022-1-1 12:23",text:"真是笑死我了"},
	{name:"李四",time:"2022-2-1 15:30",text:"哈哈哈，好好好，好得很"},
	{name:"王五",time:"2022-1-15 11:45",text:"咱就是说，整个一个大震惊"},
	{name:"赵六",time:"2022-2-1 06:50",text:"祖国繁荣昌盛"}
]
}

http.createServer((req,res)=>{
	res.setHeader("Content-type","text/html,charset=utf-8");
	if(req.url=="/"){
		fs.readFile("./public/demo.html",(err,data)=>{
			if(err) throw err;
			let str=at.render(data.toString(),comment);
			res.end(str);
		})
	}else if(req.url=="/post.html"){
		fs.readFile("./public/post.html",(err,data)=>{
			if(err) throw err;
			res.end(data);
		})
	}else if(/^\/comment?/ig.test(req.url)){ //以/comment开头
		//console.log(qs.parse(url.parse(req.url).query));//解析网址   获取GET参数（对象）
		
		  res.statusCode = 302;      // 设置响应状态码为302(重定向)
		  res.setHeader('location', '/') // 设置响应头location，告诉浏览器重定向地址  如果不加这两项 则会出现数据刷新后一直重复插入评论
		
		let query=qs.parse(url.parse(req.url).query); //得到get方式的数据  并转换成对象
		var today=new Date();
		var t=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();
		query.time=t;  //获取当前时间
		comment.comment.unshift(query);  //将数据加到对象中的数组中的开头
		
		fs.readFile("./public/demo.html",(err,data)=>{
			if(err) throw err;
			let str=at.render(data.toString(),comment);
			res.end(str);
		})
	}else{
		res.end("404...");
	}
	
}).listen("3333",()=>{
	console.log("运行成功");
})