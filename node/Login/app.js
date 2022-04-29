//加载mongoose模块
let mongoose = require("mongoose");
let express = require("express");
let jwt = require("jsonwebtoken");
let path = require("path");
let multer = require("multer");
let fs = require("fs");

var app = express();
mongoose.connect("mongodb://localhost/Nodedata").then(res => { //没有数据库自动新建
	console.log("连接成功");
}).catch(err => {
	console.log(err, "连接失败");
})
//设计数据字段
var admin = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})
var student = new mongoose.Schema({
	pic: String,
	id: Number,
	name: String,
	age: Number,
	sex: String,
	birthday: String,
	hobbies: Array
})
//应用字段设计到对应的数据集合中
var people = mongoose.model("user", admin);
var students = mongoose.model("information", student);
// //插入数据
// var stu7=new students({
// 	id:07,
// 	name:"栀紫",
// 	age:18,
// 	sex:"女",
// 	birthday:"2004-10-05"
// })
// stu7.save().then(()=>{
// 	console.log("插入成功");
// }).catch(err=>{
// 	console.log(err);
// })

// students.updateOne({age:21},{age:20}).then(()=>{
// 	console.log("更新成功")
// })


// 设置文件保存路径和命名规则
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'img') //设置文件上传位置 存入img文件夹
	},
	//设置上传文件名称的操作
	filename: function(req, file, cb) {
		const uniqueSuffix = file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) +
			file.originalname
		cb(null, uniqueSuffix)
	}
})

//应用存储设置
const upload = multer({
	storage: storage
})

app.use(express.urlencoded()) //配置表单提交post数据时req.body接收
app.engine("html", require("express-art-template")) //设置模板引擎的文件格式

app.set("views", path.join(__dirname, "html")); //设置模板引擎的文件位置

app.get("/", (req, res) => { //打开数据页面
	students.find().then(data => {
		obj = data;
		res.render("data.html", {
			obj: obj
		})
	})
})

app.get("/login", (req, res) => {
	res.render("login.html"); //跳转登录页面
})

//登录
app.post("/data", (req, res) => {
	people.findOne(req.body).then(data => {
		if (data) { //判断数据库中是否有对应的用户名和密码 
			jwt.sign(req.body, "login", { //token签发
				expiresIn: 86400
			}, (err, token) => {
				if (err) throw err;
				students.find().then(data => {
					res.render("data.html", {
						obj: data,
						token: token
					})

				})
			})

		} else {
			res.send(`<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<title>登录失败</title>
				</head>
				<body>
					<div id="box">
						<h2>登录失败</h2>
						<h4>用户名或密码错误</h4>
					    <p>页面在
					    <span id="Os">3</span>
					     s后跳转
					    </p>
					</div>
					<script>
					    var Os=document.getElementById("Os");
					    var num=3;
					    var timer=setInterval(function () {
					        num--;
					        Os.innerText=num;
					        if(num==0){
								clearInterval(timer)
					            window.location.href="http://localhost:2000/";
					        }
					    },1000)
					</script>
				</body>
			</html>`);
		}
	})
})

//token验证
app.post("/ver", (req, res) => { //token验证
	jwt.verify(req.body.token, "login", (event) => {
		if (event) {
			console.log("token过期或无效")
			res.send("token过期或无效");
		} else {
			res.send("token");

		}
	})
})

//数据修改
app.get("/edit", (req, res) => {
	students.findOne(req.query).then(data => {
		if (data) {
			res.render("edit.html", {
				obj: data
			})
		}
	})
})

//提交修改后的数据
//single(name)  接收以name命名的文件上传
//文件的存储信息存储在req.file中
app.post("/change", upload.single("pic"), (req, res) => {
	var obj = req.body;
	obj.pic = req.file && req.file.filename; //判断有没有传文件过来 
	students.findOne({
		id: obj.id
	}).then(data => { //图片文件替换
		if (obj.pic) { //判断文件有没有被修改后传过来
			fs.unlink("img/" + data.pic, () => { //删除原来的图片文件
				students.updateOne({
					id: obj.id
				}, obj).then(() => { //将修改后的数据存入
					res.redirect("/"); //重定向
				});
			})
		}
	})
	students.updateOne({
		id: obj.id
	}, obj).then(() => {
		res.redirect("/"); //重定向
	});

})

//添加数据
//提交添加后的数据
app.post("/add", upload.single("pic"), (req, res) => {
	var date = req.body;
	date.pic = req.file.filename;
	students.find().then(data => {
		date.id = data[data.length - 1].id + 1;
		new students(date).save()
		res.redirect("/");
	})

})

//删除数据
app.get("/del", (req, res) => {
	students.findOne(req.query).then(data => {
		fs.unlink("img/" + data.pic, () => {
			students.deleteOne(req.query).then(() => {
				console.log("删除成功");
				res.redirect("/");
			})
		})
	})

})

//查询数据
app.get("/check", (req, res) => {
	res.render("check.html");
})
//按条件查询数据
app.post("/check", upload.single("pic"), (req, res) => {
	console.log(req.body);
	students.find(req.body).then(data => {
		res.render("check.html", {
			obj: data
		})
	})
})

//数据接口



app.all("/ajax", (req, res) => {
	var bool = function() { //由数据判断是get还是post方式传递
		for (var key in req.query) {
			return false; //是get传值
		}
		return true; //是post传值
	}
	if (bool()) {
		students.find(req.body).then(data => {
			res.setHeader("Access-Control-Allow-Origin", "*") //CORS解决跨域
			res.send(data);
		})
	} else {
		students.find(req.query).then(data => {
			res.setHeader("Access-Control-Allow-Origin", "*") //CORS解决跨域
			res.send(data);
		})
	}

})

//静态资源加载
app.use("/css", express.static(path.join(__dirname, "css")))
app.use("/", express.static(path.join(__dirname, "img")))

app.listen(2000, () => {
	console.log("运行成功");
})
