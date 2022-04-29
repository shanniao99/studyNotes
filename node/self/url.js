//url 模块
let url=require("url");
let obj=url.parse("http://www.baidu.com?name=123&age=18");//解析一个url地址，通过第二参数TRUE把包含有查询字符串的query转换成对象
console.log(obj);
console.log(url.parse("http://www.nodejs.cn",true)); 
 
 let str=url.resolve("http://www.baidu.com","/about") ;//解析相对于基URL的目标URL。url.resolve(基url,目标url)
 console.log(str);//http://www.baidu.com/about
 
 
 
 