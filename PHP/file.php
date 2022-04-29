<?php
echo "php文件操作<hr>";

$arr=['name'=>"张三","age"=>18,"gen"=>"男"];
$str=json_encode($arr,JSON_UNESCAPED_UNICODE); //数组或对象转json字符串
$obj=json_decode($str,true);//json字符串转数组或对象  true为数组
var_dump($obj);



// $file=fopen("test.txt","r"); // 打开文件   （"r" 只读  "w"  只写）
// r	打开文件为只读。文件指针在文件的开头开始。
// w	打开文件为只写。删除文件的内容或创建一个新的文件，如果它不存在。文件指针在文件的开头开始。
// a	打开文件为只写。文件中的现有数据会被保留。文件指针在文件结尾开始。创建新的文件，如果文件不存在。
// x	创建新文件为只写。返回 FALSE 和错误，如果文件已存在。
// r+	打开文件为读/写、文件指针在文件开头开始。
// w+	打开文件为读/写。删除文件内容或创建新文件，如果它不存在。文件指针在文件开头开始。
// a+	打开文件为读/写。文件中已有的数据会被保留。文件指针在文件结尾开始。创建新文件，如果它不存在。
// x+	创建新文件为读/写。返回 FALSE 和错误，如果文件已存在。






// $size=filesize("test.txt"); // 读取文件内容的字节长度
// echo fread($file,$size); // 根据长度来读取打开的文件内容(必须在打开和关闭之间使用)

// fgets()逐行读取文件内容
// var_dump(fgets($file));
// var_dump(fgets($file));
// var_dump(fgets($file));
// var_dump(fgets($file));
// var_dump(fgets($file));

// while($res=fgets($file)){
// 	echo $res."<br>";
// }

// fclose($file); //关闭打开的文件


// file() 读取文件，每一行内容就是一个成员，结果是数组（可独立使用）
// $filearr=file("test.txt");
// var_dump($filearr);



// 文件写入

$file=fopen("test.txt","w");

$num=fwrite($file,"hello world!"); //往打开的文件里面写入字符串内容
var_dump($num);

fclose($file);



$i=file_put_contents("test.txt","123456789"); //写入内容
var_dump($i);






// 文件删除

$filename="text.txt";
// file_exists() 判断文件是否存在
if(file_exists($filename)){
	$bool=unlink($filename);// unlink() 删除文件(不能删除文件夹)
	var_dump($bool);
};

// is_file() 判断是否存在这么一个文件（不是文件夹）
if(is_file($filename)){
	unlink($filename);
};

var_dump(is_file("123.jpg"));


// 复制文件
$baidu=copy("http://www.baidu.com","baidu.txt");
var_dump($baidu);

// 文件重命名
$html=rename("baidu.txt","baidu.html");
var_dump($html);



echo "文件夹操作<hr>";

// $dir=opendir("123");//打开目录

// var_dump(readdir($dir));  // "." 表示当前目录
// var_dump(readdir($dir));  // ".." 表示上一级目录
// var_dump(readdir($dir));
// var_dump(readdir($dir));
// var_dump(readdir($dir));
// var_dump(readdir($dir));
// var_dump(readdir($dir)); // false 表示没有文件了

// while($res=readdir($dir)){
// 	echo $res."<br>";
// }

// closedir($dir);//关闭打开目录


// scandir() 读取文件夹内容，形成数组
// $dirs=scandir("123");
// var_dump($dirs);

// for($i=2;$i<count($dirs);$i++){
// 	echo $dirs[$i],"<br>";
// }


// mkdir() 创建目录（不能重复创建）
// $bool=mkdir("456");
// var_dump($bool);

// 删除目录 （只能删除空目录）
// $bool=rmdir("123");
// var_dump($bool);


// 练习：如何重命名文件夹？  删除有内容的文件夹
// 创建一个空目录，把目录里面的所有文件复制过去，删除原目录
// function renamedir(val1,val2){
	
// 	deldir(val1)
// }

// function deldir(val){	
	
// }
















?>