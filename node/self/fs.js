//fs模块  针对文件读写
let fs=require("fs");
// fs.readFile();
//readFile("文件路径"，回调函数(error,data))
//data为文件内容，error为null  读取失败：error为错误对象 data为undefined
 fs.readFile("test.txt",(err,data)=>{
	 console.log(data.toString());//直接输出返回的是二进制数，需要调用toString()转换
 })
 //writeFile()中可指定写入方式：w,w+ a a+......
 //writeFile("文件路径","写入内容",[写入格式(默认utf8),{flag:"写入方式"}],回调函数)
 
fs.writeFile("test.txt","你好，node.js!!!",(err,data)=>{  
	if(err) throw err;
	console.log("创建成功");
})

