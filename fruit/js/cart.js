window.onload = function() {

	Read();

	function Read() { //读取本地存储
		var box = document.getElementsByClassName("list")[0]; //显示购物车商品的盒子
		var arr = JSON.parse(localStorage.getItem("shop")); //读取本地数据存入数组
		var car_num = document.getElementById("num"); //购物车数量
		var bill = document.getElementById("bill"); //去结算数量

		if (localStorage.length > 0) { //判断本地存储是否有数据
			var ul = "<ul>";
			for (var i = 0; i < arr.length; i++) {
				ul +=
					"<li><div class='point'><div class='checked'><img class='picture' src='./img/gouxuan.png' style='display:" +
					arr[i].display + "'></div></div><div class='r'><img src='" + arr[i].img +
					"'><div class='text'><h2>" + arr[i].tit + "</h2><div class='price'><span>￥<b>" + arr[i].price +
					"</b></span><div class='number'><input type='button' class='jian' value='—'><input readonly type='text' value='" +
					arr[i].num +
					" '/><input type='button' value='+' class='jia'></div></div></div></div><div class='del'>删除</div></li>";

			}
			ul += "</ul><div class='into'><img src='./img/weixin.png'><span>已同步至微信购物单</span></div>"
			box.innerHTML = ul;
			var allcheck = document.getElementsByClassName("checkall")[0].getElementsByTagName("img")[0]; // 全选显示
			car_num.style.display = "block";
			car_num.innerHTML = arr.length;
			var sum = 0;
			var p = document.getElementById("P"); //合计
			var img = [];
			for (let i = 0; i < arr.length; i++) {
				img[i] = arr[i].display;
				if (arr[i].display == "block") {
					sum = (sum * 10 + arr[i].num * (arr[i].price * 10)) / 10; //合计价格
				}
			}

			var res = img.some(v => v == "none");
			if (!res && img.length != 0) {
				allcheck.style.display = "block"; // 全选显示
			}
			p.innerHTML = "￥" + sum;

			var b = img.filter(v => v == "block"); //结算数量

			if (b.length != 0) {
				bill.style.display = "block";
				bill.innerHTML = "(" + b.length + ")";
			} else {
				bill.style.display = "none";
			}

		} else {
			ul = "<div class='bg'><img src='./img/car_bg.png'><p>购物车空空如也</p></div>";
			box.innerHTML = ul;
		}
	}

	var local = JSON.parse(localStorage.getItem("shop"));

	var minus = document.getElementsByClassName("jian"); //减
	var add = document.getElementsByClassName("jia"); //加
	var allchose = document.getElementsByClassName("checkall")[0]
	var allcheck = allchose.getElementsByTagName("img")[0]; //全选

	var car_num = document.getElementById("num"); //购物车数量

	var bill = document.getElementById("bill"); //去结算数量

	var RMB = document.getElementById("P"); //总价
	ADD()

	function ADD() {
		var block = document.getElementsByClassName("picture"); //商品选中
		var chose = document.getElementsByClassName("checked");


		var img = [];
		for (var i = 0; i < block.length; i++) {
			img.push(block[i].style.display);
		}

		//商品选中和取消选中
		for (let i = 0; i < chose.length; i++) {
			chose[i].onclick = function() {
				if (block[i].style.display == "block") {
					block[i].style.display = "none";
				} else {
					block[i].style.display = "block";
				}

				img[i] = block[i].style.display;
				local[i].display = block[i].style.display; //将选中状态记录到本地数据中
				localStorage.setItem("shop", JSON.stringify(local))
				var res = img.some(v => v == "none");
				if (!res) { //全选
					allcheck.style.display = "block"
				} else {
					allcheck.style.display = "none"
				}
				money()

				var b = img.filter(v => v == "block"); //结算数量
				if (b.length != 0) {
					bill.style.display = "block";
					bill.innerHTML = "(" + b.length + ")";
				} else {
					bill.style.display = "none";
				}
			}

		}
		//全选
		allchose.onclick = function() {
			if (allcheck.style.display == "block") {
				allcheck.style.display = "none";
				for (var i = 0; i < block.length; i++) {
					block[i].style.display = "none";

					img[i] = block[i].style.display;
					local[i].display = block[i].style.display; //将选中状态记录到本地数据中
					localStorage.setItem("shop", JSON.stringify(local))
				}
			} else {
				if (local.length != 0) {
					allcheck.style.display = "block";
					for (var i = 0; i < block.length; i++) {
						block[i].style.display = "block";

						img[i] = block[i].style.display;
						local[i].display = block[i].style.display; //将选中状态记录到本地数据中
						localStorage.setItem("shop", JSON.stringify(local))
					}
				}

			}
			var b = img.filter(v => v == "block"); //结算数量
			if (b.length != 0) {
				bill.style.display = "block";
				bill.innerHTML = "(" + b.length + ")";
			} else {
				bill.style.display = "none";
			}
			money()

		}
	}


	NumBer()
	//数量加减 
	function NumBer() {
		for (let i = 0; i < minus.length; i++) {
			minus[i].onclick = function() { //减
				if (this.nextSibling.value > 1) {
					this.nextSibling.value--;
				} else {
					this.nextSibling.value = 1;
				}
				local[i].num = this.nextSibling.value; //将数量存入本地
				localStorage.setItem("shop", JSON.stringify(local));
				money()
			}
			add[i].onclick = function() { //加
				this.previousSibling.value++;
				local[i].num = this.previousSibling.value; //将数量存入本地
				localStorage.setItem("shop", JSON.stringify(local));
				money()
			}
		}
	}


	//价格计算
	function money() {
		var sum = 0;
		for (let i = 0; i < local.length; i++) {
			if (local[i].display == "block") {
				sum = (sum * 10 + local[i].num * (local[i].price * 10)) / 10; //价格计算
			}
		}
		RMB.innerHTML = "￥" + sum;

	}


	//删除
	var lis = document.getElementsByClassName("list")[0].getElementsByTagName("li");
	var del = document.getElementsByClassName("del"); //删除

	Delete();

	function Delete() {
		for (let i = 0; i < lis.length; i++) {
			lis[i].ontouchstart = function() { //触屏事件  按下手指
				var finger = event.changedTouches[0]; //记录第一次按下手指的数据
				start = finger.clientX; //x轴的视口位置
			}
			lis[i].ontouchend = function() {

				var finger = event.changedTouches[0];
				end = finger.clientX; //手指移动后的视口位置
				if (Math.abs(start - end) >= 50) { //开始位置减结束位置长度大于等于50时，删除出现
					this.className = "on";

					del[i].ontouchstart = function() {
						var In = [];
						this.parentNode.remove();

						local.splice(i, 1);
						localStorage.setItem("shop", JSON.stringify(local));
						for (var j = 0; j < local.length; j++) {
							In[j] = local[j].display;
						}
						
						var res = In.some(v => v == "none");
						if (!res) { //全选
							if (local.length != 0) {
								allcheck.style.display = "block"; //全选

								car_num.innerHTML = local.length; //购物车数量

								// var b = In.filter(v => v == "block"); //结算数量
								// bill.style.display = "block";
								// bill.innerHTML = "(" + b.length + ")";
							} else {
								allcheck.style.display = "none"

								car_num.style.display = "none";

								localStorage.removeItem("shop")
								Read();
							}

						} else {
							allcheck.style.display = "none"

						}
						var b = In.filter(v => v == "block"); //结算数量
						if (b.length != 0) {
							bill.style.display = "block";
							bill.innerHTML = "(" + b.length + ")";
						} else {
							bill.style.display = "none";
						}

						ADD();
						NumBer();
						money();
						Delete();
					}
				} else {
					this.className = "";
				}
			}

		}
	}


}
