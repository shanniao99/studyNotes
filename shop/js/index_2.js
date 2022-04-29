window.onload = function() {
	var box = document.getElementById("list_box");
	var list = document.getElementById("list");  //装图片的ul 
	var lis = list.getElementsByTagName("li");  //装图片的ul下面的li
	var pdivs = document.getElementsByClassName("yuandian")[0];  //装小圆点的盒子
	var point = pdivs.getElementsByTagName("li");  //装小圆点的li
	var screenWidth = document.documentElement.offsetWidth; //屏幕宽度
	//初始三个li固定的位置
	var left = lis.length - 1;
	var center = 0;
	var right = 1;
	setTransform();//图片归位
	var timer = null;
	var startX = 0; // 手指落点
	var startTime = null; // 开始触摸时间
	//调用定时器
	timer = setInterval(autoplay, 3000);
     //轮播图切换下一张
	function autoplay() {   //轮播图的切换（过渡）
		left = center;
		center = right;
		right++;
		if (right > lis.length - 1) {
			right = 0;
		}
		//添加过渡
		setTransition(1,1,0);
		setTransform();//图片回归盒子
		setpoint();//小圆点切换
	}
//小圆点跟随图片的切换改变类名实现透明度的更换
	function setpoint() {
		for (var i = 0; i < point.length; i++) {
			point[i].className="";
		}
		point[center].className="on";
	}
	
	//轮播图切换上一张
	function autoPrev(){
		right=center;
		center=left;
		left--;
		if(left<0){
			left=lis.length-1;
		}
		setTransition(0,1,1)
		setTransform();
		setpoint();
	}
	
	//开始触屏
	list.ontouchstart=function(event){
		clearInterval(timer);
		startTime=Data.now();
		startX=event.changedTouches[0].clientX;		
	}
	
	//持续滑动
	list.ontouchmove=function(event){
		var dx=event.changedTouches[0].clientX=startX;
		setTransition(0,0,0);
		setTransform(dx);
	}
	//结束触屏
	list. ontouchend=function(){
		var dx=event.changedTouches[0].clientX=startX;
		var dTime=Date.now()-startTime;
		if(Math.abs(dx)>screenWidth/3||(dTime<300&&Math.abs(dx)>30)){
			if(dx>0){
				autoPrev();
			}else{
				autoplay();
			}
		}else{
			setTransition(1,1,1)
			setTransform();
			
		}
	}
	// 设置过渡
	function setTransition(a, b, c) {
	  if (a) {
	    lis[left].style.transition = 'transform 1s';
	  } else {
	   lis[left].style.transition = 'none';
	  }
	  if (b) {
	    lis[center].style.transition = 'transform 1s';
	  } else {
	    lis[center].style.transition = 'none';
	  }
	  if (c) {
	    lis[right].style.transition = 'transform 1s';
	  } else {
	    lis[right].style.transition = 'none';
	  }
	}
	
	//　归位
	function setTransform(dx) {
	  dx = dx || 0;
	  lis[left].style.transform = 'translateX(' + (-screenWidth + dx) + 'px)';
	  lis[center].style.transform = 'translateX(' + dx + 'px)';
	  lis[right].style.transform = 'translateX(' + (screenWidth + dx) + 'px)';
	}
}
