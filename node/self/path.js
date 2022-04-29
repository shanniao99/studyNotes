//path 核心模块  提供一些路径操作的API
let path=require("path");
let name=path.extname("./test.txt") //获取文件的扩展名（可以是路径文件）
console.log(name);  //.txt

let url=path.resolve("node","self","test.txt"); //把一个路径或路径片段的序列解析成绝对路径
console.log(url); //C:\Users\Administrator\Desktop\eg\node\self\node\self\test.txt

//__dirname 目录地址   __filename文件地址
let join=path.join(__dirname,"test.txt");//使用特定分隔符把全部给定的path片段连接在一起
console.log(join);//C:\Users\Administrator\Desktop\eg\node\self\test.txt
console.log(path.join("file","index.html"));//file\index.html





