// 模板引擎 art-template
// npm install art-template -s
let at=require("art-template")


// 可以将对象形式的数据，通过{{}}的形式渲染到html模板中显示
let obj={
	tit:"123",
	arr:["aa","bb","cc"],
	num:-66,
	bool:false,
	list:[
		{tit:456},
		{tit:789}
	]
}

let html=`
<h2>{{tit}}</h2>

{{if bool}}

<ul>
<li>{{arr[1]}}</li>
<li>{{num>0?"大于0":tit}}</li>
<li>{{list[1].tit}}</li>
</ul>

{{else}}

<ul>
{{each arr as v,i}}
<li>{{i}}--{{v}}</li>
{{/each}}
</ul>

{{/if}}



<hr>
`

var res=at.render(html,obj)
console.log(res)
