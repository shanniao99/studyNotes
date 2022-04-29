window.onload = function() {

	// function animation(ele, target) {
	// 	clearInterval(ele.timer);

	// 	var step = target > ele.offsetLeft ? 20 : -20;

	// 	ele.timer = setInterval(function() {
	// 		ele.style.left = ele.offsetLeft + step + "px";

	// 		if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
	// 			ele.style.left = target + "px";
	// 			clearInterval(ele.timer);
	// 		}
	// 	}, 10);
	// }



	// var list_box = document.getElementById("list_box");
	// var list = document.getElementsByClassName("img_list")[0];
	// var lis = list.getElementsByTagName("li");
	// var pdivs = document.getElementsByClassName("yuandian")[0];
	// var point = pdivs.getElementsByTagName("li");
	// // var screenWidth = document.documentElement.offsetWidth; //屏幕宽度
	// var index = 1;
	// var timer = null;
	// var start = 0;
	// var list_boxW = list_box.offsetWidth; //轮播图盒子视口宽度
	// timer = setInterval(autoplay, 3000); //定时自动轮播
	// function autoplay() {
	// 	if (++index >= lis.length) {
	// 		index = 0;
	// 	}
	// 	for (var i = 0; i < lis.length; i++) {
	// 		lis[i].style.display = "none";
	// 		point[i].className = "";
	// 	}
	// 	lis[index].style.display = "block";
	// 	point[index].className = "on";
	// 	//执行动画（位移和过渡）
	// 	// point[index - 1].className = "";
	// 	// index++;
	// 	// list.style.transition = "1s";
	// 	// list.style.transform = "translateX(" + (-index * list_boxW) + "px)";
	// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// list_box.addEventListener("touchend", function(e) {
	// 	var endX = e.changedTouches[0].clientX;
	// 	if (start > endX) {
	// 		autoplay();
	// 	} else {
	// 		point[index - 1].className = "";
	// 		index--;
	// 		list.style.transition = "1s";
	// 		list.style.transform = "translateX(" + (-index * list_boxW) + "px)";
	// 	}
	// 	timer = setInterval(function() {
	// 		autoplay();
	// 	}, 3000);
	// })
	// list.addEventListener("transitionend", function() {
	// 	if (index > 2) {
	// 		index = 1;
	// 		list.style.transition = "";
	// 		list.style.transform = "translateX(" + (-index * list_boxW) + "px)";
	// 	}
	// 	if (index < 1) {
	// 		index = 2;
	// 		list.style.transition = "";
	// 		list.style.transform = "translateX(" + (-index * list_boxW) + "px)";
	// 	}
	// 	point[index - 1].className = "on";
	// })
	// list.addEventListener("touchmove", function(e) {
	// 	var moveX = e.changedTouches[0].clientX;
	// 	if (moveX > startX) {
	// 		point[index - 1].className = "";

	// 		list.style.transition = "";
	// 		list.style.transform = "translateX(" + (-index * list_boxW + Math.abs(moveX - startX)) + "px)";
	// 	} else {
	// 		point[index - 1].className = "";

	// 		list.style.transition = "";
	// 		list.style.transform = "translateX(" + (-index * list_boxW - Math.abs(moveX - startX)) + "px)";
	// 	}
	// })
}
