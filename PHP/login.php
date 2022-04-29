<?php
var_dump($_GET); // 接收get方式提交的数据
var_dump($_POST); // 接收post方式提交的数据
var_dump($_FILES); // 接收post方式提交的文件数据
var_dump($_REQUEST); //接收get/post提交的数据

$arr=$_POST;

$file=fopen("information.txt","w+");
fwrite($file,"用户名：{$arr['user']}\n");
fwrite($file,"密码：{$arr['password']}\n");
fwrite($file,"性别：{$arr['sex'][0]}\n");
fwrite($file,"爱好：");
var_dump($arr['likes']);
for($i=0;$i<count($arr['likes']);$i++){
	fwrite($file,"{$arr['likes'][$i]} ");
}
fwrite($file,"\n");
fwrite($file,"留言：{$arr['text']}\n");

fclose($file);


?>