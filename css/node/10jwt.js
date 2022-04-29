// token令牌 
// 登录验证用
// npm install jsonwebtoken -s

var jwt=require("jsonwebtoken")

var user={
	name:"zhangsan",
	password:"123465"
}

var str="";


// token签发：
// sign(参数1，参数2，参数3，参数4) 
//参数1   必须是object, buffer或者string
//参数2   个人密钥，string或buffer
// 参数3  以秒表示或描述时间跨度
//参数4   函数
jwt.sign({a:123},"hello",{expiresIn:2},(err,token)=>{
	if(err) throw err
	str=token
	console.log(token)
	// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoxMjMsImlhdCI6MTY0NzMyNjA2NiwiZXhwIjoxNjQ3MzI2MDc2fQ.8FteBw52mNhPWUQ2aHFCKui82RXsVWr1usqvPztyWaY
	
	setTimeout(function(){

		// token验证  验证token的合法性
		jwt.verify(str,"hello",(event)=>{
			console.log(event && event.name) 
			//TokenExpiredError  token过期
			//JsonWebTokenError  token无效
			console.log("已登录")
		})
		
	},1000)	

	
})







