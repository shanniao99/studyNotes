$(document).ready(function(){
	$(".left>ul>li").click(function(){
		// for(let i=0;i<$(".left>ul>li").length;i++){
		// 	$(".left>ul>li").eq(i).removeAttr("class")
		// }
		$(".left>ul>li").each(function(){  //遍历清除所有类名
			$(this).removeAttr("class")
		})
		$(this).addClass("on");
	})
})