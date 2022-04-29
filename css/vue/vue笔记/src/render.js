export default {
	props:["xy"],
	render:function(createElement){
		return createElement("h1","标题"+this.xy)
	}
}