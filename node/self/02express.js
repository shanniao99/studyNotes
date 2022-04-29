  //express框架
  //1.express的安装  npm install express -s
  //2.加载模块:
  let express=require("express");
  //3.得到server服务器实例
  let app=express();
  //4.绑定服务器接受请求事件，并添加处理回调函数
  app.get("/",(req,res,next)=>{
	  // res.send("hello");
	  next();
  })
  
  
  //express会底层自动识别添加，不需要设置响应头的Content-Type和中文编码格式
 //  app.get("/",(req,res)=>{
	//   res.send(`<form action="/add" method="post">
	// 	<input type="text" name="user"/><br>
	// 	<input type="text" name="age"/>
	// 	<input type="submit" value="提交"/>
	// </form>`);
 //  })
  
  //express 静态文件  暴露公共资源
  //指定用户必须以/public/开头的url地址才能访问到静态文件夹下的具体文件资源
  // express.static("相对路径")
  // 请求路径和文件所在的位置不一定是对应关系)
  // app.use("/comment",express.static("html"));
  
  //express中获取post请求数据
  //需要先配置，否则request请求对象的body属性为undefined
  app.use(express.urlencoded()) //配置表单提交post数据时req.body接收
  // app.post("/add",(req,res)=>{
	 //  let result=req.body;  //获取post请求数据
	 //  console.log(result);
	 //  res.send(result);
  // })
  
  //express 中art-template的使用
  // express-art-template 专用模板引擎
  // 需要先安装 art-template和express
  // npm install express-art-template -s
  
  //设置模板引擎的解析文件格式（默认解析views目录下的文件）
  //engine(文件类型，require("express-art-template"))
  app.engine("html",require("express-art-template"))
  
  // 修改解析文件的存放目录（可针对单个路由单独设置）
  //set("views","替换的文件路径")
  app.set("views","comment/public");
  
  app.get("/",(req,res)=>{
	  res.render("demo.html",req.query)
  })
  app.get("/post.html",(req,res)=>{
	  app.engine("html",require("express-art-template"))
  	  res.render("post.html",req.query)
  })
  
  
  
  
  
  
  
  
  //5.绑定服务器端口  启动服务器
  app.listen("2022",()=>{
  	  console.log("服务器启动成功");
  });
  
  
  