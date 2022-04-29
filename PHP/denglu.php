<?php
$con=@mysqli_connect("localhost","wmm","wmm123","login");//连接数据库
$arr=$_GET;

$str="SELECT `password` FROM `admin` WHERE name='{$arr["user"]}'";//查询数据库中指定条件的数据
$res=mysqli_query($con,$str);
$result=@mysqli_fetch_assoc($res);  //mysqli_fetch_assoc转换查询结果，变成对应的详细信息


if($result!=''){ 
	if($result['password']==$arr['password']){
		// echo "登录成功";
		echo '<!DOCTYPE html>
		<html lang="zh-cn">
		<head>
		    <meta charset="UTF-8">
		    <title>用户登录</title>
		    <meta http-equiv="refresh" content="3;URL=http://localhost/PHP/loginRegister.html" /> 
		</head>
		<body>
		    <div>
		        <br />
		        <h3>用户登录成功</h3>
		        本页面将在<span style="color:#FF0000; font-weight:bold;">3</span>秒后跳转
		    </div>
		</html>';
	}else{
		// echo "密码错误";
		echo '<!DOCTYPE html>
		<html lang="zh-cn">
		<head>
		    <meta charset="UTF-8">
		    <title>用户登录</title>
		    <meta http-equiv="refresh" content="3;URL=http://localhost/PHP/loginRegister.html" /> 
		</head>
		<body>
		    <div>
		        <br />
		        <h3>密码错误</h3>
		        本页面将在<span style="color:#FF0000; font-weight:bold;">3</span>秒后跳转
		    </div>
		</html>';
	}
}else{
	// echo "用户名不存在";
	echo '<!DOCTYPE html>
	<html lang="zh-cn">
	<head>
	    <meta charset="UTF-8">
	    <title>用户登录</title>
	    <meta http-equiv="refresh" content="3;URL=http://localhost/PHP/loginRegister.html" /> 
	</head>
	<body>
	    <div>
	        <br />
	        <h3>用户名不存在</h3>
	        本页面将在<span style="color:#FF0000; font-weight:bold;">3</span>秒后跳转
	    </div>
	</html>';
}

//  	var_dump(json_encode($array,JSON_UNESCAPED_UNICODE));
 
 // mysqli_free_result($res); //释放查询结果（节省资源，提升性能）
 
 mysqli_close($con);   //关闭连接，节省资源
?>