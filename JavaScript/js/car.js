window.onload = function() {
	create();

	function create() { //本地存储读取
		var span = "<span class='iconfont icon-yixuanzhong' style='color:white'></span>" //选中框
		var box = document.getElementsByClassName("box")[0];
		//判断本地存储是否有值
		if (localStorage.length > 0) {
			var result = "<table border='1'>";
			result +=
				"<tr><th></th><th>商品</th><th>名称</th><th>单价(元)</th><th>数量</th><th>总价(元)</th><th>操作</th></tr>"; //表头
			var str = JSON.parse(localStorage.getItem("text")); //用JSON.parse()将本地存储的字符串转换成数组对象
			for (var i = 0; i < str.length; i++) {
				result += "<tr><td  class='head'>" + span + "</td><td><img src='" + str[i].img + "'</td>" +
					"<td>" + str[i].txt + "</td><td class='price'>" + str[i].price +
					"</td><td><input type='button' value='-' class='down' /><input type='text' value=" + str[i]
					.num +
					" class='number' /><input class='up' type='button' value='+'></td><td class='zong'>" + str[i]
					.price * str[i].num + "</td><td><button class='del'>删除</button</td></tr>";
			}
			box.innerHTML = result;

		} else {
			result = "<span class='none'>购物车空空如也~~~<br>去逛一逛吧~~~</span>"
			box.innerHTML = result;
		}
	}


	//商品单选和取消单选功能
	var head = document.getElementsByClassName("head");
	var all_dis = document.getElementsByClassName("all")[0].getElementsByTagName("span")[0]; //全选
	var arr = []; //span图标记录颜色的数组
	var arr_a = []
	for (var i = 0; i < head.length; i++) {
		arr_a.push(head[i]); //每行第一个单元格写入数组arr_a中
		arr.push(head[i].getElementsByTagName("span")[0].style.color);
	}
	arr_a.forEach(function(v, i) { //遍历每行第一个单元格  给其添加点击事件
		v.onclick = function() {
			var span = v.getElementsByTagName("span")[0];
	
	
			
			var index=Index(span.parentNode.parentNode)
			
			
			
			
			if (span.style.color == "white") {
				span.style.color = "blue";
				arr[index-1] = span.style.color; //将span图标颜色存入数组以便后面遍历判断是否全选
				console.log(arr)
				dateNum(); //数量的加减和总价计算
				// allMoney()
				money.innerHTML = Number(money.innerText) + Number(zong[index-1].innerText)
			} else {
				span.style.color = "white";
				arr[index-1] = span.style.color; //将span图标颜色存入数组以便后面遍历判断是否全选
				console.log(arr)
				money.innerHTML = Number(money.innerText) - Number(zong[index-1].innerText)
				// allMoney()
				
			}

			// arr[i] = span.style.color; //将span图标颜色存入数组以便后面遍历判断是否全选
			// console.log(arr)

			var res = arr.some(function(val) { //遍历arr数组，如果有图标颜色为white，就返回true
				return val == "white";
			})
			var count = 0;
			arr.forEach(function(v, i) { //遍历数组，记住被选中的span图标的数量
				return v == "blue" ? count++ : count;
			})
			if (!res && arr.length == count && arr.length == head
				.length) { //判断数组遍历后的结果，当结果为false且数组长度等于图标选中数量时全选被选上
				all_dis.style.color = "blue";
			} else {
				all_dis.style.color = "white";
			}
		}

	})


	//全选功能
	all_dis.onclick = function() {
		if (all_dis.style.color == "white") {
			all_dis.style.color = "blue";
			// var sum = 0;
			arr_a.forEach(function(v, i) {
				var span = v.getElementsByTagName("span")[0];
				
				var index=Index(span.parentNode.parentNode)
				
				
				span.style.color = "blue";
				arr[index-1] = span.style.color;
				
				// count = arr.length;
				// sum += Number(zong[i].innerText);
			})
			// money.innerHTML = sum;
			console.log(arr)
			allMoney()
		} else {
			all_dis.style.color = "white";
			arr_a.forEach(function(v, i) {
				var span = v.getElementsByTagName("span")[0];
				
				var index=Index(span.parentNode.parentNode)
				
				span.style.color = "white";
				arr[index-1] = span.style.color;

			})
			money.innerHTML = 0;
		}

	}



	//数量的加减
	var local = JSON.parse(localStorage.getItem("text"));
	
	var down = document.getElementsByClassName("down"); //数量-
	var up = document.getElementsByClassName("up"); //数量+
	var num = document.getElementsByClassName("number"); //商品数量
	var zong = document.getElementsByClassName("zong"); //总价
	var price = document.getElementsByClassName("price"); //单价
	var money = document.getElementById("money"); //合计

	var dels = document.getElementsByClassName("del"); //删除

	var jia = []; //加
	var jian = []; //减
	var n = [];
	// var del = [];
	for (var i = 0; i < down.length; i++) {
		jian.push(down[i]); //加法数组
		jia.push(up[i]); //减法数组
		n.push(zong[i].innerText); //总价数组
		// del.push(dels[i]); //删除数组
	}


	dateNum();

	function dateNum() {
		//加
		jia.forEach(function(v, i) {
			v.onclick = function() {
				num[i].value = Number(num[i].value) + 1;
				local[i].num = num[i].value; //更改后的数量存入本地存储
				localStorage.setItem("text", JSON.stringify(local)); //刷新本地存储的数据
				zong[i].innerHTML = Number(num[i].value) * Number(price[i].innerText); //总价计算

				n[i] = zong[i].innerText; //每改变一次数量，总价也跟着改变，再存入总价数组中
				allMoney(); //总价计算

			}

		})

		//减
		jian.forEach(function(v, i) {
			v.onclick = function() {
				num[i].value--;
				if (Number(num[i].value) <= 1) {
					num[i].value = 1;
				}
				local[i].num = num[i].value; //更改后的数量存入本地存储
				localStorage.setItem("text", JSON.stringify(local)); //刷新本地存储的数据
				zong[i].innerHTML = Number(num[i].value) * Number(price[i].innerText);
				n[i] = zong[i].innerText;
				allMoney()
			}
		})
	}

	function allMoney() { //总价计算
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == "blue") {
				sum += Number(n[i]);
			}

		}
		money.innerHTML = sum;
		return sum;
	}




	//删除功能

	// del.forEach(function(v, i) {
	// 	v.onclick = function() {
	// 		var tr =this.parentNode.parentNode;
	// 		tr.remove();//找到对应的行 点击删除
	// 		console.log(i)
	// 		// for(var j=i;j<local.length-1;j++){
	// 		// 	local[j]=local[j+1];
	// 		// 	arr[j]=arr[j+1];

	// 		// }
	// 		arr.splice(i,1);
	// 		console.log(arr);
	// 		local.splice(i,1); //删除对应行的本地存储数据
	// 		localStorage.setItem("text", JSON.stringify(local)); //刷新本地存储的数据
	// 		allMoney();

	// 	}
	// })



	for (var i = 0; i < dels.length; i++) {
		// dels[i].index = i;
		dels[i].onclick = function() {
			var tr = this.parentNode.parentNode; //查找到要删除的行
			// tr.remove();
			// for (var j = this.index; j < local.length-1; j++) {
			// 	local[j] = local[j + 1];
			// 	arr[j] = arr[j + 1];
			// 	n[j]=n[j+1];
			// }
			// local = local.splice(0, local.length - 1);
			// arr = arr.splice(0, arr.length - 1);
			// n = n.splice(0, n.length - 1);
			
			
			// local.splice(this.index, 1);
			// arr.splice(this.index, 1);
			// n.splice(this.index,1);
			// console.log(arr)
			
			var index=Index(tr)
			
			tr.remove();  //删除当前行
			// dom=[...tbody.getElementsByTagName("tr")]
			// console.log(dom)
			local.splice(index-1, 1);//index-1 整个表格第一行为表头部分  不参与删除操作
			arr.splice(index-1, 1);
			n.splice(index-1,1);
			
			var count=0;
			var res = arr.some(function(val) { //遍历arr数组，如果有图标颜色为white，就返回true
				return val == "white";
			})
			arr.forEach(function(v, i) { //遍历数组，记住被选中的span图标的数量
				return v == "blue" ? count++ : count;
			})
			if (!res && arr.length == count && arr.length == head
				.length&&arr.length!=0) { //判断数组遍历后的结果，当结果为false且数组长度等于图标选中数量时全选被选上
				all_dis.style.color = "blue";
			} else {
				all_dis.style.color = "white";
			}
			localStorage.setItem("text", JSON.stringify(local)); //刷新本地存储的数据
			allMoney()
			
			
		}
	}
	
	function Index(tr){   //更新索引值
		var tbody=tr.parentNode;//找到行所在的父元素
		dom=[...tbody.getElementsByTagName("tr")];//获取tbody里面的所有行
		
		var index=dom.findIndex(function(v,i){  //获取第一个满足条件的索引值
			return v==tr;
		})
		return index;
		
	}

}
