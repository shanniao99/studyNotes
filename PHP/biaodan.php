<?php
// var_dump($_GET['q']);
// var_dump(htmlspecialchars($str));

$q = isset($_GET['q'])? htmlspecialchars($_GET['q']) : '';
//isset()检测变量是否声明
// 若变量不存在则返回 FALSE
// 若变量存在且其值为NULL，也返回 FALSE
// 若变量存在且值不为NULL，则返回 TURE
//htmlspecialchars()把预定义的字符转换成HTML实体

if($q) {
        if($q =='RUNOOB') {
                echo '菜鸟教程<br>http://www.runoob.com';
        } else if($q =='GOOGLE') {
                echo 'Google 搜索<br>http://www.google.com';
        } else if($q =='TAOBAO') {
                echo '淘宝<br>http://www.taobao.com';
        }
} else {
?>
<form action="" method="get"> 
    <select name="q">
    <option value="">选择一个站点:</option>
    <option value="RUNOOB">Runoob</option>
    <option value="GOOGLE">Google</option>
    <option value="TAOBAO">Taobao</option>
    </select>
    <input type="submit" value="提交">
    </form>
<?php
}
?>