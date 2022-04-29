// 文件上传 multer
// npm install multer -s

var multer=require("multer") //加载模块
var express=require("express")
var path=require("path")

// 设置文件保存路径和命名规则
const storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, 'images')
  },
 
  filename: function (req, file, cb) {
    const uniqueSuffix =file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
    cb(null,uniqueSuffix)
  }
})

//应用存储设置
const upload = multer({ storage: storage })

var app=express()

app.engine("html",require("express-art-template"))
app.set("views",path.join(__dirname,"html"))

app.get("/",(req,res)=>{
	res.render("form.html")
})


//接收单个文件
// app.post("/add",upload.single('pic'),(req,res)=>{
// 	console.log(req.file) //接收文件信息
// 	console.log(req.body) //接收post字段数据
// 	res.send("123")
// })


//接收多个文件
// app.post("/add",upload.array('pic',2),(req,res)=>{
// 	console.log(req.files) //接收文件信息
// 	console.log(req.body) //接收post字段数据
// 	res.send("123")
// })


//接收多个文件域的文件
// const cpUpload = upload.fields([{ name: 'pic', maxCount: 2 }, { name: 'img', maxCount: 1 }])

// app.post("/add",cpUpload,(req,res)=>{
// 	console.log(req.files) //接收文件信息
// 	console.log(req.body) //接收post字段数据
// 	res.send("123")
// })




app.listen("2000")