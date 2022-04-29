//文件上传 multer
//安装：npm install multer -s

let multer=require("multer");//加载模块
let express=require("express");
let app=express();
let path=require("path");

// 设置文件保存路径和命名规则
const storage = multer.diskStorage({
	//destination和filename用来确定文件存储位置的函数
	//destination 用来确定上传的文件的存储位置 如果没有设置，则使用操作系统默认的临时文件
  destination: function (req, file, cb) {
    cb(null, 'file')  //
  },
   //filename 确定文件夹中的文件名的确定，如果没有设置，则每个文件将设置为一个随机文件名，并且没有扩展名
  filename: function (req, file, cb) {
    const uniqueSuffix =file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
    cb(null,uniqueSuffix)
  }
})

//应用存储设置
const upload = multer({ storage: storage })
app.engine("html",require("express-art-template"))
app.set("views",path.join(__dirname,"file"))

app.get("/",(req,res)=>{
	res.render("multer.html")
})

//单个文件上传
//req.fifile 返回单文件上传时的文件相关信息对象
app.post("/check",upload.single("html"),(req,res)=>{
	console.log(req.file);  //接收文件信息
	res.send("单个文件");
})
app.listen("2022",()=>{
	console.log("运行成功，输入http://localhost:2022查看");
})

//多个文件上传
//req.fifiles 返回多个文件上传时的文件相关信息数组
app.post("/check",upload.array("html"),(req,res)=>{
	console.log(req.file);  //接收文件信息
	res.send("多个文件");
})

app.listen("2022",()=>{
	console.log("运行成功，输入http://localhost:2022查看");
})




