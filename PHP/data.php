<?php
// var_dump($GLOBALS); //超全局变量
var_dump($_GET); // 接收get方式提交的数据
var_dump($_POST); // 接收post方式提交的数据
var_dump($_FILES); // 接收post方式提交的文件数据
var_dump($_REQUEST); //接收get/post提交的数据

$file=$_FILES;
var_dump($file['pic']['name']); // 表单name="pic"的那个上传文件的名称
var_dump($file['pic']['type']); // ...文件类型
var_dump($file['pic']['tmp_name']); // ...文件临时地址
var_dump($file['pic']['error']); // ...文件错误信息  
// 0 没错误  1 超出单个文件限制大小 2 超出总大小 3 断网 4 没选择文件就上传 
var_dump($file['pic']['size']); // ...文件大小

// 保存上传的文件 
// move_uploaded_file(临时文件,保存文件)
$filename="files/".mt_rand(0,time())."-".time()."-".$file['pic']['name'];
var_dump($filename);
$filename=iconv('utf-8','gbk',$filename); //中文名转码（保存时要对应文件名，不能乱码）
var_dump($filename);
$bool=move_uploaded_file($file['pic']['tmp_name'],$filename);
var_dump($bool);

?>