<?php


// $bool=rename("123/hello.html","456/hi.html");

// var_dump($bool);

// $bool=rename("456/hi.html","123/hello.html");
// var_dump($bool);

// $bool=rename("file1/123","newfile/123");
// var_dump($bool);
// $bool=rename("file1/test.txt","newfile/test.txt");
// var_dump($bool);

$file=fopen("newfile/test.txt","r"); //打开文件  读取文件
$size=filesize("newfile/test.txt");//读取文件内容的字节长度
var_dump($file,$size);

// var_dump(fgets($file));//逐条读取文件内容
// var_dump(fgets($file));
// var_dump(fgets($file));
// var_dump(fgets($file));
// var_dump(fgets($file));

var_dump(fread($file,$size));//根据字节长度读取打开的文件内容

while($res=fgets($file)){
	var_dump($res);
}
fclose($file);//文件关闭

$farr=file("newfile/test.txt");//不用写在文件打开和关闭之间的读取文件内容
var_dump($farr);

//文件写入
$name="newfile/test.txt";
$file=fopen($name,"w"); //w 只写  永远只有最后写入的数据，重复覆盖
var_dump(fwrite($file,"How are you?"));

fclose($file);
var_dump(file_put_contents($name,"abcdefg"));//写入内容

if(file_exists($name)){  //判断文件是否存在
	var_dump(unlink($name)); //删除文件 unlink()
}

if(is_file($name)){ //判断指定的文件名是否存在且是正常的文件
	unlink($name);
}



?>