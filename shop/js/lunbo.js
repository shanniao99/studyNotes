window.onload = function() {
	var box=document.getElementById("list_box");
	var ul=document.getElementById("list");
	var lis=ul.getElementsByTagName("li");
	var point=document.getElementsByClassName("yuandian")[0];
	var yuan=point.getElementsByTagName("li");
	var timer;
	index=0;
	
	if(timer){
		clearInterval(timer);
		timer=null;
	}
	
	
	timer=setInterval(autoplay,3000);//定时轮播
	
	function autoplay(){
		index++;
		if(index>=yuan.length){
			index=0;
		}
		changeImg(index);
	}
	
	function changeImg(val){ //图片和圆切换
		for(var i=0;i<yuan.length;i++){
			yuan[i].className="";
		}
		yuan[val].className="on";
		ul.style.left=-7.5*val+"rem";
		index=val;
	}
	
	for(var i=0;i<yuan.length;i++){
		yuan[i].id=i;
		yuan[i].onmouseover=function(){  //鼠标悬停在圆点上时显示到对应的图片
			clearInterval(timer);
			changeImg(this.id);
		}
	}
	
	box.onmouseout=function(){  //鼠标移出盒子时继续轮播
		timer=setInterval(autoplay,3000);
	}
}
