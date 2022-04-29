//nodemon常见配置
//nodemon ./server.js localhost 8080   在命令行指定应用的端口
//nodemon -h/nodemon --help   查看帮助
// nodemon --debug ./server.js 80   运行debug模式
//手动重启nodemon  在nodemon命令运行的终端窗口中输入rs 按下回车
//require()函数用于在一个模块中引入另一个模块，返回一个模块导出对象
// let xx=require(模块名);模块名可以用绝对路径和相对路径，后缀名.js可以省略
// let c1=require("./main.js");
// let c2=require("file/index.js");
// let c3=require("./main");
let http=require("http"); //加载第三方包
let add=require("./hello");

//1.require
//require()函数用于 1.执行导入模块中的代码  2.返回导入模块中的接口对象
 
 // 2.exports
 // exports对象用来导出当前模块的公共方法或属性，别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象
 // 用法：exports.name  name为导出的对象名
 //类似于ES6中的export的用法，用来导出一个指定名字的对象。
 exports.http=()=>{
	 console.log(123);
 }
 
 // 3.module.exports
 //module.exports 导出默认对象 没有指定对象名，常用于修改模块的原始导出对象
 //比如原本模块道出的是一个对象，我们可以通过module.exports修改为导出一个函数
  module.exports=function(){
	  console.log("hello");
  }
  
  
  // 4.模块初始化 一个模块中的JS代码仅在模块第一次被使用时执行一次，并且在使用的过程中进行初始化，之后缓存起来便于后续继续使用。
  //5.主模块 通过命令行参数传递给Nodejs然后启动程序的模块
  //负责调度组成整个程序的其他模块完成工作。
  //$ node main.js//运行main.js启动程序，main.js称为主模块
  
  // 5.exports 和module.exports的区别
  
  //6.npm (node package manager)常见命令
  //npm -v 查看npm版本
  //npm init 初始化后出现一个package.json配置文件，可以在后面加上 -y快速跳过问答式界面
  //npm install 根据项目中的package.json文件自动下载项目所需的全部依赖
  //npm install 包名 -s
  // npm i mime -s 安装并保存到运行环境配置中
  // npm i mime -d 安装并保存到到开发环境配置中
  //npm list 查看当前目录下已安装的node包
  //npm list -g 查看全局已安装过的node包
  //npm update 包名 更新指定包
  //npm uninstall 包名 卸载指定包
  //npm config list 查看配置信息  ......
  
  // 7.node 核心模块：http  fs  path  url mime querystring art-template等
  //先引入模块 再才能使用核心模块提供的函数
  let fs=require("fs");
  let url=require("url");
  let path=require("path");
  // let http=require("http");
  
  //8.创建服务区  在加载完核心模块后进行创建
  let server=http.createServer();  //createServeer()返回一个服务器实例
   
   //9.给服务器绑定接收请求的处理事件
   //10.绑定监听端口号
   // server.listen("端口号",()=>{
	//  console.log("服务器开启成功，可通过访问http://localhost:端口号来获取数据");
   // })
   server.listen("2022",()=>{
   	 console.log("服务器开启成功，可通过访问http://localhost:2022来获取数据");
   })
  
  
  
  
  
  

