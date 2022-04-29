<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<a href="file.php">打开文件</a>
		<hr>
		
		<?php
		
		echo "hello<br>"; //输出简单的数据类型 
		print("3.2"."<br>");//输出简单的数据类型 
		print_r(array("a","b","c")); //print_r() 可以输出一些较为复杂的数据
		var_dump(["a","b","c"]);//详细的输出数据信息
		print_r(date("Y-m-d")."<br>");//带年月日的日期 大写Y 2022年
		print_r(date("y-m-d h:i:s")."<br>");//年月日时分秒 小写y 22年
		$d=mktime(17,45,00,3,3,2022);  //创建日期  mktime(小时,分钟,秒,月,日,年)
		echo "创建的日期是：". date("Y-m-d H:i:sa", $d)."<br>";  //H表示24小时制  a表示am/pm
		$d=strtotime("17:45 March 03 2022");  //用字符串创建日期
		echo "创建的日期是：" . date("Y-m-d H:i:sa", $d)."<br>";
		$d=strtotime("10:38pm April 15 2015");
		echo "创建日期是 " . date("Y-m-d H:i:sa", $d)."<br>";
		
		echo date("Y-m-d H:i:s",strtotime("today"))."<br>";
		echo date("Y-m-d H:i:s",strtotime("tomorrow"))."<br>";
		echo date("Y-m-d H:i:s",strtotime("next Saturday"))."<br>";
		
		$d1=strtotime("00:00 January 01 2023");
		$d2=ceil(($d1-time())/60/60/24);
		echo "距离2023年还有".$d2."天";
		
		
		echo "<hr>";
		echo "数学函数<br>";
		//数学函数
		echo abs(-3.14)."<br>";//绝对值
		echo ceil(9.9999)."<br>";//10
		echo ceil(-9.9999)."<br>";//向上取整 -9
		echo floor(9.9999)."<br>";//9
		echo floor(-9.9999)."<br>";//-10 向下取整
		echo intval(9.9999)."<br>"; //9
		echo intval(-9.9999)."<br>";//取整  -9
		echo round(9.5999)."<br>";//10 四舍五入  
		echo round(9.4999)."<br>";//9 
		echo round(1.9456,2)."<br>";//1.95 四舍五入保留两位小数
		echo pow(2,3)."<br>";  //8  pow(m,n) m的n次方
		echo sqrt(16)."<br>";  //平方根
		echo max(1,5,3,9,23,45)."<br>";//最大值  多个数字或数组 min()最小值
		echo rand(0,9)."<br>";//rand(m,n)m到n之间的随机整数
		echo pi()."<br>";//圆周率
		
		
		echo "<hr>";
		echo "字符串<br>";
		//字符串 string
		print(strlen("asdfg hhjkl"))."<br>";//字符串长度 空格也算 
		
		//explode(m,str,n) 在字符串m处分割字符串，str要分割的字符串，n返回的数组元素数目（可不填）
		//相当于 分割字符串形成数组split();
		$array=explode(" ","asddad addsa dassd dasd adfsdf asdaaa",5);
		@print_r($array);
		
		echo "<br>";
		
		//剔除字符串左边开头的空格，并返回  如果有第二个参数则是剔除第二个参数里的字符串
		print(ltrim(" a asd"));
		echo "<br>";
		print(ltrim(" a asd","a"));
		echo "<br>";
		
		//剔除字符串右边开头的空格
		print(rtrim("  a asd "));
		echo "<br>";
		
		//剔除字符串右边开头的空格
		print(trim("a asd aa"));
		echo "<br>";
	
		//当有第二个参数时 字符串开头或结尾的第一个字符符合第二参数时会被剔除
		print(trim("sa asd aa","sa"));
		echo "<br>";
		print(trim("adsa asd gf","as"));
		echo "<br>";
		
		//substr(str,m,n) 从索引值m开始截取n个字符串中的字符
		print(substr("abcdefg",2,3)."<br>");  //cde
		
		//第二参数为负数时，从字符串右往左截取字符，末尾第一个为-1
		print(substr("abcdefg",-3)."<br>"); //efg
		
		//str_replace("m","n",str)将在str中匹配到的m全替换成n
		print(str_replace("a","1","abcabcAbca")."<br>");
		print(str_ireplace("a"," ","abcabcAbca")."<br>");//同上，不区分大小写
		
		//字符串全部大写
		print(strtoupper("abcdefg")."<br>");
		
		//字符串首字符大写
		print(ucfirst("abcd")."<br>");
		
		//substr_count(str,"m")返回m在str中出现的次数
		print(substr_count("asdfasafdasdaijfasd","asd")."<br>");
		
		//strpos(str,m)返回字符串中第一次出现m的位置(索引值) 3
		print(strpos("asdadjladjkad","ad")."<br>");
		print(strrpos("asdadjladjkad","ad")."<br>");//返回最后一次出现的位置 11
		
		//strstr("字符串1","字符串2") 从字符串1中第一次出现字符串2中第一个字符的位置开始复制后面的所有字符
		print(strstr("asadgaabadfab","ad")."<br>");//adgaabadfab
		
		//strrchr("字符串1","字符串2") 复制从字符串1中最后一次出现字符串2中的第一个字符的位置开始到最后一个字符
		print(strrchr("sdafsdgaababdsfgs","ab")."<br>"); //abdsfgs
		print(strrchr("asadgaabadfgab","ax")."<br>");    //ab
		
		//addcslashes(字符串1，字符串2) 在字符串1中匹配字符串2中的所有字符，字符串1中如果有相同字符，就在其前面加“\”
		print(addcslashes("abcdefghijklmn","akd")."<br>");//\abc\defghij\klmn
		
		//str_pad(字符串1,n,字符串2,0/1/2)
		//将字符串2填充到字符串1中直到长度为n, 不写字符串2，默认为空格填充
		//0/1/2:在字符串1左边开始填充字符串2  /在字符串1右边开始填充字符串1  /在字符串1左右两边同时开始填充字符串2,不写默认从右边开始填充
		print_r(str_pad("abcdefgh",10,"ijk",0)."<br>");//ijabcdefgh
		print_r(str_pad("abcdefgh",10,"ijk",1)."<br>");//abcdefghij
		print_r(str_pad("abcdefgh",10,"ijk",2)."<br>");//iabcdefghi
		print_r(str_pad("abcdefgh",10,"ijk")."<br>");//abcdefghij
		
		//strcmp("字符串1","字符串2") 比较  两个字符串中对应的字符进行比较
		//字符串1>字符串2=>1   字符串1==字符串2=>0  字符串1<字符串2=>-1
		print_r(strcmp("abc","def")."<br>"); //-1  "abc"<"def"
		print_r(strcmp("bc","b")."<br>"); //1  "bc">"b"
		print_r(strcmp("b","b")."<br>"); //0  "b"=="b"
		print_r(strcmp("abc","a")."<br>"); //2  "abc">"a"
		
		//number_format(number,n,"x","m")
		//将number保留n位小数(四舍五入)，用x替换小数点，整数部分每三位用m隔开
		//没有后面三个参数时，默认去掉小数部分，整数每三位用","隔开分割，参数三和四必须同时存在
		print_r(number_format(123.45678,2)."<br>"); //123.46
		print_r(number_format(123123456.45678,2,"w","/")."<br>"); //123/123/456w46
		print_r(number_format(12345678,2,"哈哈","|")."<br>"); //12|345|678哈哈00
		
		
		echo "<hr>";
		echo "<hr>";
		echo "<hr>";
		echo "数组<br>";
		//数组
		echo count([1,2,3,4,5]);  //返回数组元素个数
		
		//implode("连接符",[数组]);用连接符将数组里面的元素连接成字符串
		//相当于  数组名.join("连接符") 
		var_dump(implode("-",["aa","bb","cc","dd"])."<br>");
		
		//in_array("参数1",数组) 判断数组元素中是否有参数1 有true 无 false
		var_dump(in_array("a",["aa","bb","cc","dd"])); //false
		var_dump(in_array("bb",["aa","bb","cc","dd"])); //true
		
		//关联数组
		$obj1=array('name'=>"张三",'age'=>20,'sex'=>"男");
		$obj2=['name'=>"lisi",'age'=>20,'sex'=>"male"];
		$arr=array("aa","bb","cc","dd");
		//array_keys()返回原数组中所有键名组成的一个新数组，不会改变原数组
		var_dump(array_keys($obj1));
		
		//array_values()返回原数组中所有元素值组成的一个新数组
		var_dump(array_values($obj1));
		
		//返回当前内部指针所指向的数组元素的键名
		var_dump(key($obj1)); //name
		
		// 返回数组中的当前元素的值
		var_dump(current($obj1)); //张三
		
		//判断参数一是否是在数组中的键名
		var_dump(array_key_exists("name",$obj1)); //TRUE
		var_dump(array_key_exists("k",$obj1)); //false
		
		//each()返回当前元素的键名和键值，并将内部指针向前移动
		// 该元素的键名和键值会被返回带有四个元素的数组中
		// 两个元素（1 和 Value）包含键值，两个元素（0 和 Key）包含键名
		var_dump(each($obj1));
		// 1 => string '张三'
        //'value' => string '张三' 
        // 0 => string 'name'
        //'key' => string 'name'
		
		// 将内部指针指向数组中的下一个元素，并输出元素值
		var_dump(next($obj1));
		
		// 将内部指针指向数组中的上一个元素，并输出元素值
		var_dump(prev($obj1));
		
		// 将内部指针重复指向数组中的第一个元素，并输出元素值
		var_dump(reset($obj1));
		
		// 将内部指针指向数组中的最后一个元素，并输出元素值
		var_dump(end($obj1));
		
		//向数组末尾开始添加元素，相当于 push()
		array_push($arr,"ee","ff","gg"); //["aa","bb","cc","dd","ee","ff","gg"]
		var_dump($arr);
		
		//向数组开头开始添加元素，相当于 unshift()
		array_unshift($arr,"11","22"); //["11","22","aa","bb","cc","dd","ee","ff","gg"]
		var_dump($arr);
		
		//返回数组中的最后一个元素或最后一个键名对应的值,并在原数组中剔除
		//相当于 pop()
		var_dump(array_pop($arr)); //gg
		var_dump($arr); //["11","22","aa","bb","cc","dd","ee","ff"]
		var_dump(array_pop($obj1)); //男
		
		//返回数组中的第一个元素或第一个键名对应的值，并在原数组中剔除
		//相当于 shift()
		var_dump(array_shift($arr)); //11
		var_dump($arr); //["22","aa","bb","cc","dd","ee","ff"]
		var_dump(array_shift($obj1)); //张三
		
		//array_pad(数组,num,str) 指定数组的长度为num,如果原数组长度不够，
		//则用str从数组末尾开始添加到长度==num,原数组不变
		var_dump(array_pad($arr,10,"cc"));
		var_dump($arr);
		
		//返回剔除原数组中重复元素之后的新数组，原数组不会被改变
		var_dump(array_unique($arr));
		
		//将数组按ASCII从小到大排序 升序
		sort($arr);
		var_dump($arr);
		
		//降序
		rsort($arr);
		var_dump($arr);
		
		//array_combine(数组1,数组2) 返回将数组1中所有元素作为键名分别指向对应的数组2中作为键值的元素形成的一个新的关联数组
		//两个数组长度必须一致，不会改变原数组
		var_dump($obj2);
		var_dump(array_combine(['11','22','33','44','55','66','77'],$arr));
		
		//合并两个数组并返回   原数组不变
		var_dump(array_merge($arr,['11','22','33','44','55','66','77']));
		
		//array_slice(数组,索引值,n)截取数组片段 从索引值位置开始到后面n个止,不会改变原数组
		//slice()
		var_dump(array_slice($arr,2,3));
		var_dump($arr);
		
		//截取数组中从索引值位置开始到第n个元素之间的所有元素，并从原数组中剔除
		//改变原数组
		var_dump(array_splice($arr,2,3));
		var_dump($arr);  //["ff","ee","aa","22"]
		
		//range(值1,值2,num) 将值1作为数组第一个元素，每次自增num，直到达到值2的大小
		//值1，值2可以为数字或单个字符，num不写默认每次自增1
		$arr2=range(1,10,2);
		var_dump($arr2);
		
		//随机排列数组元素顺序  返回布尔值
		$b=shuffle($arr);
		var_dump($arr);
		
		//计算数组中数值型元素相加的和
		var_dump(array_sum($arr2));//25
		
		//array_chunk(数组，num,true/false) 类似二维数组
		//将数组中的元素按每组num个元素的方式划分成新数组
		//true/false 决定是否保留元素的原键值不写， true为保留，默认false不保留
		$arr3=array_chunk(["abc"=>"123",1,5,6,8,2],3,true);
		var_dump($arr3);
		$arr3=array_chunk(["abc"=>"123",1,5,6,8,2],3,false);
		var_dump($arr3);
		
		echo "**********************************************************************************************************************************<br>";
		echo "json数据操作<br>";
		
		//json_encode()将数组转换成JSON格式的字符串返回
		var_dump(json_encode($arr));
		$str=json_encode($obj2);
		var_dump($str);
		
		//json_decode()将JSON格式字符串转换成能强制转换成数组的对象返回
		//JSON格式字符串中键与值需要引号  括起来时必须使用双引号
		$arr4=(object)json_decode($str);  //对象
		var_dump($arr4);
		$arr4=(array)json_decode($str);   //数组
		var_dump($arr4);
		$arr4=json_decode($str);    //对象
		var_dump($arr4);
		$arr4=json_decode($str,true);  //数组
		var_dump($arr4);
		$arr4=json_decode($str,false);  //对象
		var_dump($arr4);
		?>
	</body>
</html>
