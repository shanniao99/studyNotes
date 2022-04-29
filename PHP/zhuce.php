<?php
$con=@mysqli_connect("localhost","wmm","wmm123","login");//连接数据库
$arr=$_GET;

	//注册：添加数据到数据库
$str="INSERT INTO `admin`(`name`, `password`, `resetpwd`, `email`) VALUES ('{$arr["user"]}','{$arr["password"]}','{$arr["rpwd"]}','{$arr["email"]}')";
if(mysqli_query($con,$str)){   // $_SERVER["PHP_SELF"] 
	// $url="http://localhost/PHP/loginRegister.html";
	// Header("Location:$url");   //header("Location:URL") 页面跳转到指定URL
	
	echo '<!DOCTYPE html>
	<html lang="zh-cn">
	<head>
	    <meta charset="UTF-8">
	    <title>用户注册</title>
	    <meta http-equiv="refresh" content="3;URL=http://localhost/PHP/loginRegister.html" /> 
	</head>
	<body>
	    <div>
	        <br />
	        <h3>注册成功！！！</h3>
	        本页面将在<span style="color:#FF0000; font-weight:bold;">3</span>秒后跳转
	    </div>
	</html>';
}else{
	// echo "该用户名已存在，请重新注册。";
	echo '<!DOCTYPE html>
	<html lang="zh-cn">
	<head>
	    <meta charset="UTF-8">
	    <title>用户注册</title>
	    <meta http-equiv="refresh" content="3;URL=http://localhost/PHP/loginRegister.html" /> 
	</head>
	<body>
	    <div>
	        <br />
	        <h3>该用户名已存在，请重新注册。</h3>
	        本页面将在<span style="color:#FF0000; font-weight:bold;">3</span>秒后跳转
	    </div>
	</html>';
}


?>