window.onload=function(){
	var banner=document.getElementsByClassName("banner")[0];
	var ul=banner.getElementsByTagName("ul")[0]
	var lis=ul.getElementsByTagName("li");
	var point=banner.getElementsByTagName("ol")[0].getElementsByTagName("li");
	var index=0,timer;
	
	
	timer=setInterval(start,3000);
	
	function start(){
		index++
		if(index>=point.length){
			index=0;
		}
		for(var i=0;i<point.length;i++){
			point[i].className="";
		}
		point[index].className="on";
		ul.style.left=-7.5*index+"rem";
	}
	
}