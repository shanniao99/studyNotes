window.onload=function(){
	var left=document.getElementsByClassName("left")[0];
	var lis=left.getElementsByTagName("li");
	for(let i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
			}
			this.className="on";
		}
	}
	
	var car_num=document.getElementById("num");//购物车数量
	var car=document.getElementsByClassName("img");//加入购物车图标
	var arr=JSON.parse(localStorage.getItem("shop"))||[];//存放数据的数组  没有数据时存放数据，有数据时用来判断重复
	for(let i=0;i<car.length;i++){
		car[i].onclick=function(){
			var img=document.getElementsByClassName("pic")[i].src;//商品图片
			var tit=document.getElementsByClassName("tit")[i].innerText;//商品名称
			var price=document.getElementsByClassName("p")[i].innerText;//商品价格
			var num=1;//商品数量
			var display="block";//选中状态
			var obj={
				img,
				tit,
				price,
				num,
				display
			}
			var res=arr.findIndex(v=>v.tit==tit);//遍历数组判断是否有重复数据  findIndex返回索引值
			if(res!=-1){
				arr[res].num++;
			}else{
				arr.push(obj);
			}
			localStorage.setItem("shop",JSON.stringify(arr));//存储本地数据
			console.log(localStorage.length)
			if(localStorage.length>0){
				car_num.style.display="block";
				car_num.innerHTML=arr.length;
			}else{
				car_num.style.display="none";
			}
			
		}
	}
	
	
	
}