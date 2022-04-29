< script type = "text/javascript" >
	window.onload = function() {
		var num = document.getElementsByClassName("but"); //num数组存放元素对象
		var scr = document.getElementsByClassName("screen")[0]; //获取屏幕对象
		for (var i = 0; i < num.length; i++) //通过for循环为每个按钮添加onclick事件
		{
			num[i].onclick = function() {
				if (this.value == "AC") { //如果点击AC，则清空屏幕
					scr.value = "";
				} else if (this.value == "+/-") { //如果点击“+/-”按钮有两种情况
					//第一种情况，如果此时屏幕为空，则什么也不显示
					if (scr.value == "") {
						scr.value = "";
					}
					//如果屏幕不为空，就判断最后两个元素是不是运算符加数字的结构
					else if (isNaN(scr.value.charAt(scr.value.length - 1)) == false && isNaN(scr.value.charAt(scr
							.value.length - 2)) == true) {
						//给最后一个数字加括号并变为负数 
						scr.value = scr.value.substr(0, scr.value.length - 1) + "(" + "-" + scr.value.charAt(scr
							.value.length - 1) + ")";
					}
				}
				//当屏幕不为空时，判断点击的是不是退格键
				else if (this.value == "<—" && this.value != "") {
					//将最后一个元素截掉
					scr.value = scr.value.substr(0, scr.value.length - 1);
				}
				//当屏幕为空时判断是否点击的是小数点
				else if (scr.value == "" && this.value == ".") {
					scr.value = "0.";
				}
				//当点击等于号时，用eval函数计算表达式的结果并显示到屏幕上
				else if (this.value == "=") {
					scr.value = eval(scr.value);
				}
				//当屏幕为空时，点击+、-、*、/时不做反应
				else if (scr.value == "" && (this.value == "+" || this.value == "-" || this.value == "*" || this
						.value == "/")) {
					scr.value == "";
				} else {
					scr.value += this.value;
				}
			}
		}
	} 
</script>
