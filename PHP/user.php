<?php
    @header("content-type:text/html;charset=utf8");
    $conne =@mysqli_connect("localhost","wmm","wmm123","login");
    $select =mysql_select_db("test",$conne);
    $utf = mysql_query("set names utf8");
    $username=$_REQUEST['username'];
    $pass = $_REQUEST['pass'];
    $arrays = array(array('one'=>'nameerror','two'=>'passerror'));
    $sqlname = mysql_query("select count(*) from user where username= '$username'");
    $row = mysql_fetch_row($sqlname);
    $num = $row[0];
    //查看用户是否存在
    if(!$num){
        echo json_encode($arrays[0]['one']);//不存在返回nameerror        
    }else{
        $sqlpass = mysql_query("select pass from user where username='$username'");//返回一个句柄；
        $passarray = mysql_fetch_row($sqlpass);//获得一个只有一行数据的数族
        $passval = $passarray[0];//这里才是对应用户的密码
        //判断该用户的密码是否正确
        if($passval!=$pass){
            echo json_encode($arrays[0]['two']);//不正确返回passerror
        }
    }
?>
<?php
@header("content-type:text/html;charset=uft8");
$conne = @mysqli_connect("localhost","wmm","wmm123","login");
$select = mysql_select_db("test",$conne)or die("数据库用户名或密码错误".@mysql_error());
$utf = mysql_query("set names utf8");
$username= $_REQUEST['username'];
$pass = $_REQUEST['pass'];
$arrays = array(array("one"=>'repeat','two'=>'success'));
$sql  = mysql_query("select count(*) from user where username='$username'");
$row = mysql_fetch_row($sql);
$num = $row[0];
//判断用户名是否已经被注册了
if($num == 1){
    echo json_encode($arrays[0]['one']);//被注册返回repeat
}else{
    mysql_query("insert into user(username,pass) values('$username','$pass')");
    echo json_encode($arrays[0]['two']);
}
?>