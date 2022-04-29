<?php
// 数据库操作
// 中文乱码可以设置字段的字符集 或者修改mysql.ini配置文件，添加character-set-server=utf8


// 连接数据库
$con=@mysqli_connect("localhost","admin","88888888","web07");
if($con){
	// echo "连接成功";
}else{
	// echo "连接失败";
}


// 添加数据
// for($i=1;$i<5;$i++){
// $str="INSERT INTO `user`(`name`, `password`) VALUES ('王五{$i}','".($i*10)."')";
// $res=mysqli_query($con,$str); // 在连接的数据库里面执行添加语句
// var_dump($res); // true 添加成功  false 添加失败
// }

// 删除数据
// $str="DELETE FROM `user` WHERE password>='20'";
// $res=mysqli_query($con,$str);
// var_dump($res); // true 为删除成功， 数据库里没有这条数据也为 true


// 修改数据
// $str="UPDATE `user` SET `password`='123456' WHERE name!='王五'";
// $res=mysqli_query($con,$str);
// var_dump($res); 



// 查询数据
// $str="SELECT `name`,`password` FROM `user` WHERE name='王五2'";
// $res=mysqli_query($con,$str);
// var_dump($res); // 查询结果的条数和字段，没有相应的详细数据 

// while($result=mysqli_fetch_assoc($res)){ //mysqli_fetch_assoc转换查询结果，变成对应的详细信息
// 	var_dump($result);
// }

// mysqli_free_result($res); //释放查询结果（节省资源，提升性能）









// 练习：数据接口制作
$k=array_keys($_GET);  //读取键名
$v=array_values($_GET); //读取键值
$tj=$k[0]."='".$v[0]."'"; //变成字符串查询结构 “xx='xx'”
$arr=[]; //记录查询结果

$str="SELECT `name`,`password` FROM `user` WHERE {$tj}";
$res=mysqli_query($con,$str);

while($result=mysqli_fetch_assoc($res)){ //mysqli_fetch_assoc转换查询结果，变成对应的详细信息
	array_push($arr,$result); //每查询一条，添加到记录中
}

echo json_encode($arr,JSON_UNESCAPED_UNICODE); //转换json字符串输出

mysqli_free_result($res); //释放查询结果（节省资源，提升性能）



mysqli_close($con); //关闭连接（节省资源，提升性能）




?>