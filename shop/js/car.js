window.onload = function() {

	var down = document.getElementsByClassName("jian"); // 减
	var add = document.getElementsByClassName("add"); // 加

	var box = document.getElementsByClassName("sm_box"); //单选
	var all_box = document.getElementsByClassName("all_box")[0]; //全选

	var price = document.getElementsByClassName("price"); //单价

	var jian = []; //减
	var jia = []; //加
	var spans = []; //单选
	for (var i = 0; i < add.length; i++) {
		jian.push(down[i]);
		jia.push(add[i]);
		spans.push(box[i].style.backgroundColor);
	}

	//加
	jia.forEach(function(v, i) {
		v.onclick = function() {
			//previousElementSibling 属性返回指定元素的前一个兄弟元素（相同节点树层中的前一个元素节点）
			this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1;
			money();
		}
	})

	//减
	jian.forEach(function(v, i) {
		v.onclick = function() {
			//nextElementSibling 属性返回指定元素之后的下一个兄弟元素（相同节点树层中的下一个元素节点）
			if (this.nextElementSibling.value <= 1) {
				this.nextElementSibling.value = 1;
			} else {
				this.nextElementSibling.value--;
			}
			money();
		}
	})

	//商品选中（单选）
	for (let i = 0; i < box.length; i++) {
		box[i].onclick = function() {
			if (this.style.backgroundColor == "white") {
				this.style.backgroundColor = "#FF5E46";
			} else {
				this.style.backgroundColor = "white";
			}
			spans[i] = this.style.backgroundColor; //将颜色存入数组 ，方便全选的判断
			money();
			var res = spans.some(function(v, i) {
				return v == "white";
			})
			if (!res) {
				all_box.style.backgroundColor = "#FF5E46";
			} else {
				all_box.style.backgroundColor = "white";
			}
		}
	}

	//全选
	all_box.onclick = function() {
		if (all_box.style.backgroundColor == "white") {
			all_box.style.backgroundColor = "#FF5E46";
			for (var i = 0; i < box.length; i++) {
				box[i].style.backgroundColor = "#FF5E46";
				spans[i] = box[i].style.backgroundColor;
			}

		} else {
			all_box.style.backgroundColor = "white";
			for (var i = 0; i < box.length; i++) {
				box[i].style.backgroundColor = "white";
				spans[i] = box[i].style.backgroundColor;
			}
		}
		money();
	}

	function money() { //合计价格计算
		var m = 0;
		for (var i = 0; i < box.length; i++) {
			if (box[i].style.backgroundColor != "white") {
				m += Number(price[i].value) * Number(jia[i].previousElementSibling.value);
			}
		}

		document.getElementById("all").value = "￥" + m;
		return m;
	}

	var b = document.getElementsByClassName("mid_body")[0];
	var lis = b.getElementsByTagName("li");


	//删除
	//  touchstart 按下手指时，触发ontouchstart       touchend移走手指时，触发ontouchend
	for (let i = 0; i < lis.length; i++) {
		lis[i].ontouchstart = function() { //给li标签添加按下手指时，触发ontouchstart事件
			// event.preventDefault(); // 阻止浏览器默认行为

			var finger = event.changedTouches[0]; // event.changedTouches所有移动的接触点  记录按下第一次手指的数据
			start = finger.clientX; //获取手指x轴的位置（视口位置）

		}

		lis[i].ontouchend = function() { //触屏结束		
			var finger = event.changedTouches[0];
			last = finger.clientX; //触屏结束时手指x轴的位置
			if (Math.abs(last - start) >= 50) { //开始触屏和结束触屏时两者距离如果大于等于50,删除按钮出现，点击删除时整行数据删除
				this.className = "on";
				var ul = this.parentNode;
				var del = this.getElementsByClassName("del")[0];
				del.ontouchstart = function() {
					del.parentNode.remove();
					
					for(var j=i;j<spans.length-1;j++){ //根据存放的选中状态判断全选问题
						spans[j]=spans[j+1];
					}
					spans=spans.splice(0,spans.length-1);
					console.log(spans)
					var res = spans.some(v => v == "white");
					if (!res) {
						if (spans.length != 0) {
							all_box.style.backgroundColor = "#FF5E46";
						} else {
							all_box.style.backgroundColor = "white";
						}

					} else {
						all_box.style.backgroundColor = "white";
					}
					money()
				}
			} else {
				this.className = "";
			}
		}
	}

	//键盘输入商品数量
	var num = document.getElementsByClassName("num");
	for (var i = 0; i < num.length; i++) {
		num[i].index = i;
		num[i].onblur = function() {
			var rag = /^[0-9.]$/ig
			if (!rag.test(num[this.index].value)) { //判断输入的数据是否是数字，或带小数点
				alert("请输入数字哦");
				num[this.index].value = 1
			}
		}

	}
}
