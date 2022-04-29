window.onload = function() {
	var drink = document.getElementsByClassName("drink_left")[0];
	var lis = drink.getElementsByTagName("li");
	for (let i = 0; i < lis.length; i++) { //左边奶茶分类的点击事件
		lis[i].onclick = function() {
			for (var i = 0; i < lis.length; i++) {
				lis[i].className = "";
			}
			this.className = "en";
		}
	}

	var list = document.getElementsByClassName("list"); //右边奶茶列表
	var price = document.getElementsByClassName("rmb"); //奶茶单价
	var minus = document.getElementsByClassName("jian"); //数量减
	var add = document.getElementsByClassName("jia"); //数量加
	var T_price = document.getElementsByClassName("money")[0].getElementsByTagName("span")[0]; //总价
	
	
	for (let i = 0; i < add.length; i++) {
		add[i].onclick = function() { //数量的加
			if(!this.previousSibling.value){  //判断数量是否为空
				minus[i].style.display="block";
				this.previousSibling.value=1;
			}else{
				this.previousSibling.value++;
			}
			T_price.innerHTML="￥"+RMB();
		}
		minus[i].onclick=function(){
			if(this.nextSibling.value>1){
				this.nextSibling.value--;
			}else{
				this.nextSibling.value="";
				this.style.display="none";
			}
			T_price.innerHTML="￥"+RMB();
		}

	}
	
	function RMB(){
		var sum=0;
		var arr=[];
		
		for(let i=0;i<add.length;i++){
			arr=price[i].innerText.match(/\d/ig);
			var num=Number(arr.join(""));
			sum+=add[i].previousSibling.value*num;
		}
		return sum;
	}

}
