let express=require("express");
let app=express();
app.use(express.urlencoded()) //配置表单提交post数据时req.body接收
app.engine("html",require("express-art-template"))

app.set("views","public");

let comment={ 
	comment:[
	{name:"张三",time:"2022-1-1 12:23",text:"真是笑死我了"},
	{name:"李四",time:"2022-2-1 15:30",text:"哈哈哈，好好好，好得很"},
	{name:"王五",time:"2022-1-15 11:45",text:"咱就是说，整个一个大震惊"},
	{name:"赵六",time:"2022-2-1 06:50",text:"祖国繁荣昌盛"}
]
}
 app.get("/",(req,res)=>{
	  res.render("./demo.html",{  //评论展示页面
		  comment:comment.comment
	  });
  })
app.get("/post.html",(req,res)=>{  //发表评论页面
  	  res.render("post.html",req.query)
  })
app.post("/comment",(req,res)=>{
	let data=req.body;
	var today=new Date();
	var t=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();
	data.time=t;
	comment.comment.unshift(data);
	res.redirect('/'); //重定向 回到评论页面
	
	// res.render("./demo.html",{  //评论展示页面
	// 		  comment:comment.comment
	// });  //回到评论页面
	 
})
app.listen("2022");