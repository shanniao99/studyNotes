$(function() {

	var arr = []; //放图标的显示状态  显示inline  隐藏 none
	arr = dis();
	$(".cir").each(function() {
		$(this).attr("checked", true) //给盒子添加checked属性
	})
	$(".cir").click(function() { //单选
		if ($(this).attr("checked")) {
			$(this).attr("checked", false);
			$(this).children("span").hide();
		} else {
			$(this).attr("checked", true);
			$(this).children("span").show();
		}
		arr = dis(); //每点击一次做一次遍历
		var res = arr.some(v => v == "none")
		if (res) { //判断是否全选
			$("#checkall").hide();
		} else {
			$("#checkall").show();
		}
		Money()
		Num()
	})


	//全选
	$(".check").attr("checked", true);
	$(".check").click(function() {
		if ($(this).attr("checked")) {
			$(this).attr("checked", false);
			$(this).children("span").hide();
			$(".cir").each(function() {
				$(this).attr("checked", false) //给盒子添加checked属性
				$(this).children("span").hide();
			})

		} else {
			$(this).attr("checked", true);
			$(this).children("span").show();
			$(".cir").each(function() {
				$(this).attr("checked", true) //给盒子添加checked属性
				$(this).children("span").show();
			})

		}
		arr = dis(); //每点击一次做一次遍历
		Num()
		Money()

	})

	//数量加减
	$(".inp button").click(function() {
		if ($(this).text() == "-") {
			if ($(this).next().val() > 1) {
				$(this).next().val($(this).next().val() - 1);
			} else {
				$(this).next().val(1);
			}
		} else {
			$(this).prev().val(Number($(this).prev().val()) + 1);
		}

		if ($(this).parents("li").find(".cir").attr("checked")) {
			Money();
		}

		// console.log($(this).parent(".inp").index());

	})

	//删除选中
	$("#del").click(function() {
		$("li").each(function() {
			if ($(this).find(".cir").attr("checked") == "checked") {
				$(this).remove();
				Money()
				if ($(this).parents("li").length <= 0) {
					$(".check").attr("checked", false);
					$(".check span").hide();
				}

			}
		})
		Num()
	})

	//结算数量
	Num()

	function Num() {
		var num = 0;
		$(".cir").each(function() {
			if ($(this).attr("checked")) {
				num++;
			}
		})
		if (num == 0) {
			$("#num").hide();
		} else {
			$("#num").show();
			$("#num").text("(" + num + ")");
		}

	}

	Money()
	//价格计算
	function Money() {
		var sum = 0;
		// for(let i=0;i<arr.length;i++){
		// 	if(arr[i]!="none"){
		// 		sum+=$(".price").eq(i).text().match(/\d+(.\d+)?/g)*$(".inp input").eq(i).val();
		// 	}
		// }

		$("li").each(function() {
			if ($(this).find(".cir").attr("checked") == "checked") {
				sum += $(this).find(".price").text().match(/\d+(.\d+)?/g) * $(this).find("input").val();
			}

		})
		sum = sum.toFixed(2); //保留两位小数
		$("#money").text(sum);
		return sum;
	}

	function dis() { //遍历图标显示状态  以便判断全选
		var arr = [];
		$(".cir span").each(function() {
			arr.push($(this).css("display"));
		})
		return arr;
	}
})
