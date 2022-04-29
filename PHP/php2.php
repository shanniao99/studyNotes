<?php
$newf="file1";
$name="newfile";

copy_file($name,$newf); //复制目录里面的所有内容

del($name);  //删除目录

function copy_file($name,$newfile){
	$file=scandir($name);  //读取文件夹里面的内容形成数组
	for($i=2;$i<count($file);$i++){  
		$url="{$name}/{$file[$i]}";    //原文件目录
		$newurl="{$newfile}/{$file[$i]}"; //目标文件目录
		if(is_file($url)){   //判断要复制的目录是文件还是文件夹
			$bool=copy($url,$newurl);   //是文件  复制到目标目录
		}else{ 
			mkdir($newurl);   //是文件夹   递归调用该函数继续执行
			copy_file($url,$newurl);
		}
	}
}

//删除目录及目录里面的所有文件
function del($name){  
	$file=scandir($name);  //读取文件夹的内容形成数组
	for($i=2;$i<count($file);$i++){  //循环数组里面的元素
		$url="{$name}/{$file[$i]}";  //元素对应的路径
		if(is_file($url)){   //判断是否是文件
			unlink($url);  //是文件  直接删除
		}else{
			del($url);  //是文件夹，递归调用函数
		}
	}
	rmdir($name);
}





// function copy_file($file,$newf,$name){
	
// 	if(is_file("{$name}/{$file}")){
		
// 		$bool=copy("{$name}/{$file}","{$newf}/$file");
		
// 	}else{
		
// 		mkdir("{$newf}/{$file}");
		
// 		$new=scandir("{$name}/{$file}");
		
// 		for($i=2;$i<count($new);$i++){
			
// 			$bool=copy("{$name}/{$file}/{$new[$i]}","{$newf}/{$file}/{$new[$i]}");
			
// 		}
// 	}
// 	return $bool;
// }


//删除目录及目录里面的所有文件   局限性
// function del($file,$name,$parent){  
// 	if(is_file("{$name}/{$file}")){
// 		$bool=unlink("{$name}/{$file}");
// 	}else{
// 		$new=scandir("{$name}/{$file}");
		
// 		for($i=2;$i<count($new);$i++){
// 			// if(is_file())
// 				$bool=unlink("{$name}/{$file}/{$new[$i]}");
// 		}
// 		$bool=rmdir("{$name}/{$file}");
// 	}
// 	$bool=rmdir($name);
// 	return $bool;
// }





?>