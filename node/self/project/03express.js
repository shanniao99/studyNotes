//用express实现基本的增删改查（C-R-U-D）
let students={
	students:[
		{
			id:1,
			name:"吴邪",
			age:20,
			sex:"男",
			hobbies:"盗墓"
		},
		{
			id:2,
			name:"张起灵",
			age:25,
			sex:"男",
			hobbies:"神出鬼没"
		},
		{
			id:3,
			name:"阿宁",
			age:20,
			sex:"女",
			hobbies:"跟着吴邪盗墓"
		},
		{
			id:4,
			name:"王胖子",
			age:28,
			sex:"男",
			hobbies:"盗墓发财"
		}
	]
}
let express=require("express");
let app=express();
var num;
app.use(express.urlencoded()) //配置表单提交post数据时req.body接收
app.engine("html",require("express-art-template"))
app.set("views","students");

app.get("/",(req,res)=>{   //主页面学生信息表
	res.render("index.html",{
		students:students.students
	})
})
app.get("/edit",(req,res)=>{   //修改学生信息
	num=req.query;//{num:3}
	res.render("edit.html",{
		students:students.students[(num.num)-1]
	})
})
app.post("/change",(req,res)=>{  //修改后提交数据
	let data=req.body;
	students.students[data.id-1]=data;
	res.render("index.html",{
		students:students.students
	})
})
app.get("/add",(req,res)=>{
	res.render("add.html");
})
app.post("/info",(req,res)=>{  //添加信息
	let data=req.body;
	data.id=(students["students"].length)+1;  //学号  根据前面的数据决定学号
	students.students.push(data);
	res.render("index.html",{
		students:students.students
	})
})
app.get("/del",(req,res)=>{
	let id=req.query.num;
	let index=students.students.findIndex(v=>{
		return v.id==id;
	})
	students.students.splice(index,1);
	res.render("index.html",{
		students:students.students
	})
})
app.listen("2022");//监听端口