<?php
$con=@mysqli_connect("localhost","wmm","wmm123","login");
// if($con){
// 	echo "连接成功";
// }else{
// 	echo "连接失败";
// }
$arr=$_GET;
var_dump($arr);
var_dump($_GET['url']);

$str="INSERT INTO `user`(`name`, `password`) VALUES ('{$arr["user"]}','{$arr["password"]}')";//将登录页面的用户名和密码添加到数据库中
// $res=mysqli_query($con,$str); // 在连接的数据库里面执行添加语句
// var_dump($res); // true 添加成功  false 添加失败
if(mysqli_query($con,$str)){
	echo "登录成功!!!!!!!!";
}else{
	echo "该用户名已存在，请重新输入。";
}

// $str="DELETE FROM `user` WHERE password='zhangsan' and name='张三'"; //删除数据库中指定条件的数据
// var_dump(mysqli_query($con,$str));

// $str="UPDATE `user` SET `password`='zhangsan' WHERE name='123'";//修改数据
// var_dump(mysqli_query($con,$str));

// $str="SELECT * FROM `user`";//查询数据库中所有数据
// var_dump(mysqli_query($con,$str));

// $str="SELECT `name`, `password` FROM `user` WHERE name='王五'";//查询数据库中指定条件的数据
// var_dump(mysqli_query($con,$str));


// $key=array_keys($_GET);  //键名
// $val=array_values($_GET);//键值
// $array=[];
// for($i=0;$i<count($key);$i++){
// 	$where="{$key[$i]}='{$val[$i]}'";
// 	$str="SELECT `name`, `password` FROM `user` WHERE {$where}";//查询数据库中指定条件的数据
// 	$res=mysqli_query($con,$str);
// 	while($result=@mysqli_fetch_assoc($res)){   //mysqli_fetch_assoc转换查询结果，变成对应的详细信息
// 		array_push($array,$result);    //每查询一条，添加到记录中
// 	}
// 	var_dump(json_encode($array,JSON_UNESCAPED_UNICODE));
// }
// mysqli_free_result($res); //释放查询结果（节省资源，提升性能）

mysqli_close($con);   //关闭连接，节省资源
?>
