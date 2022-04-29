<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<?php
		$els=[
			['tit'=>"123",'time'=>"2-28"],
			['tit'=>"456",'time'=>"2-28"],
			['tit'=>"789",'time'=>"2-28"],
			['tit'=>"666",'time'=>"2-28"],
			['tit'=>"999",'time'=>"2-28"],
		];
		echo "<ul>";
		for($i=0;$i<count($els);$i++){
			echo "<li>".$els[$i]['tit']."---".$els[$i]['time']."</li>";
			echo "<li>{$els[$i]['tit']}---{$els[$i]['time']}</li>";
		}
		echo "</ul>";		
		?>		
		
		
		<ul>
			<?php for($i=0;$i<count($els);$i++){ ?>
			<li><?php echo $els[$i]['tit']; ?> --- <?php echo $els[$i]['time']; ?></li>
			<?php } ?>			
		</ul>

		
		

<!-- 
php的运行需要服务器环境支持
http://localhost/默认会自动解析www根目录下的index文件 
注意：html页面中不能使用php语法 ，反之，php页面中可以使用HTML语法
 -->
php两种使用方式：
<?php
echo 123;
?>

<script language="php">
echo 456;
</script>

<?php
//php注释

// 基本输出测试命令:
echo "<hr>数值和字符串","<hr>"; //语法输出：支持简单数据类型,可以输出多个数据
@print(["aa","bb"]); //函数输出：支持简单数据类型,可以添加“@”忽略提示信息，只能输出一个数据

print_r(["aa","bb"]); //  print_r() 可以输出一些较为复杂的数据

var_dump(false);  //var_dump() 更详细的输出数据信息
var_dump(["aa","bb",false]);


//变量声明：用"$"声明，使用时记得要带符号一起
$a=5;
echo $a;

$b=&$a; //赋址（指向同一个地址的数据）
$b=6;
echo $b,$a,"<br>";


// 字符串
$str='hello';
$str123="word";
echo "$str<br>"; //双引号里面出现的变量会自动被其值替换
echo '$str<br>'; //单引号里面出现的变量则不会被其值替换
echo "456{$str}123"; // 只解析大括号范围内的变量


echo "<hr>";
// "+"号，只做加法运算，拼接效果用"."
print(123+"abc"."<br>");
print("123"."456"."<br>");

if($a>0){
	echo "正数<br>";
}

for($i=0;$i<5;$i++){
	echo $i."<br>";
}

//函数
function fn($val=666){
	echo "函数不支持重载,可以携带默认值".$val."<br>";
}
fn();


// 数组：索引数组（js数组）  关联数组（js对象）


// 索引数组（js数组）
$arr1=array("aa","bb","cc");
$arr2=["aa","bb","cc"];

var_dump($arr1);
var_dump($arr2);

var_dump(count($arr1));  //count() 读取数组长度



// 关联数组（js对象）
$obj1=array('name'=>'张三','age'=>18,'gen'=>"男");
$obj2=['name'=>'李四','age'=>18,'gen'=>"男"];
var_dump($obj1);
var_dump($obj2);

var_dump(count($obj1));  //count() 读取数组长度

echo $obj1['name']; //读取关联数组成员

// 遍历关联数组
foreach($obj2 as $x=>$y){
	echo $x.$y."<br>";
}


// php对象（js类）
class Test{
	public $m=5;
	function n(){
		echo "123456789";
	}
}
$abc=new Test();
echo $abc->m; //调用对象里面的值
$abc->n();//执行对象里面的函数

var_dump($abc);
?>







	</body>
</html>
