let path=require("path");//加载path路径模块
console.log(__dirname);//目录地址
console.log(__filename);//文件地址

console.log(path.join("111","222","333","123.html"));//拼接地址
console.log(path.join(__dirname,"file","index.html"));//拼接地址
console.log(path.parse("/eg/node/file/index.html"));//解析文件地址 返回对象

let url=require("url");//加载url模块
let res=url.parse("http://nodejs.cn/name=candy&age=18");//解析网址
console.log(res);
console.log(res.query);//获取GET参数（字符串）

let qs=require("querystring");
let obj=qs.parse(res.query);//GET数据字符串转对象
console.log(obj);
console.log(qs.stringify(obj));//对象转GET数据字符串