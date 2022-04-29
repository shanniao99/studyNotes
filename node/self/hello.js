var a=1;
function add(){
	return ++a;
}
exports.add=add;

let foo='hello';
function add2(x,y){
	return x+y;
}
exports.add2=add2; //如果不在hello.js中挂载，则在main.js中运行窗口时得不到结果
exports.foo=foo;
module.exports.add2=add2;
module.exports.foo=foo;  //结果同上exports