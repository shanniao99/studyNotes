<template>
	<div>
		<button type="button" @click="btn">点击</button>
		<div>{{msg}}</div>
		<input type="text" v-model="lastname">
		<input type="text" v-model="firstname">
		<input type="text" v-model="fullname">
		<hr>
		<input type="text" v-model="str">
		<hr>
		<div :class="cla">class绑定</div>
		<div :class="[one,two]">class 数组形式绑定</div>
		<div :class="{box:bool1,on:bool2}">class 对象形式绑定</div>

		<div :style="sty">style绑定</div>
		<ul>
			<li v-for="v in arr" :key="v">{{v}}</li>
		</ul>
		<ul>
			<template v-for="v,i in arr">
				<li :key="i">{{i}}</li>
				<li :key="v">{{v}}</li>
			</template>
		</ul>
		<hr>
		表单数据绑定
		<input type="text" v-model="msg">
		<p>您输入的是：{{msg}}</p>
		复选框中改变的是checked属性值
		<input type="checkbox" v-model="checked">
		<label>{{checked}}</label>
		<br />

		<hr />
		多个复选框，绑定到同一个数组
		<br />
		<input type="checkbox" value="张三" v-model="checkeds">
		<label>张三</label>
		<input type="checkbox" value="李四" v-model="checkeds">
		<label>李四</label>
		<input type="checkbox" value="王五" v-model="checkeds">
		<label>王五</label><br>
		<span>选中的是：{{checkeds}}</span>
		<hr>
		单选按钮使用change事件改变<br />
		<input type="radio" value="男" v-model="radio" />
		<label>男</label><br>
		<input type="radio" value="女" v-model="radio" />
		<label>女</label><br>
		<span>选择的是：{{radio}}</span>
		<hr>
		select 字段将 value 作为 prop 并将 change 作为事件<br>
		<select v-model="select">
			<option disabled value="">请选择</option>
			<option>天心区</option>
			<option>开福区</option>
			<option>芙蓉区</option>
			<option>雨花区</option>
			<option>望城区</option>
		</select>
		<span>您所处的区域是：{{select}}</span>
		<hr>
		用v-for渲染的动态选项<br>
		<select v-model="selects">
			<option v-for="v,i in selected" :key="i" :value="v.value">
				{{v.num}}
			</option>
		</select>
		<span>您选择的菜系是：{{selects}}</span>
		
		<hr>
		<input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
		<label>{{toggle}}</label><br>
		<input type="radio" :value="男" v-model="radio" />
		<label>男</label><br>
		<input type="radio" :value="女" v-model="radio" />
		<label>女</label><br>
		<span>选择的是：{{radio}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				toggle:"no",
				msg: "Hello Vue.js",
				firstname: "起灵",
				lastname: "张",
				str: "abcdefg",
				cla: ["box", "on"],
				one: "box",
				two: "on",
				bool1: true,
				bool2: false,
				sty: "fontSize:26px;color:red",
				arr: ["11", "22", "33", "44", "55"],
				checked: false,
				checkeds: [],
				radio: "",
				select: '',
				selects:'红烧肘子',
				selected: [{
						num: 1,
						value: "红烧肘子"
					},
					{
						num: 2,
						value: "蚂蚁上树"
					},
					{
						num: 3,
						value: "开水白菜"
					},
					{
						num: 4,
						value: "松鼠鳜鱼"
					},
					{
						num: 5,
						value: "鱼香肉丝"
					}
				]
			}
		},
		methods: { //调用几次就执行几次
			btn() {
				this.msg = "Hi";
			}
		},
		computed: { //只执行一次，数据更新时才会再执行一次
			fullname: {
				get: function() {
					return this.lastname + " " + this.firstname
				},
				set: function(val) {
					this.lastname = val.split(" ")[0]; //用空格分割字符串成数组
					this.firstname = val.split(" ")[1];
				}
			}
		},
		watch: { //侦听器
			str: function(newdata, old) { //两个值：newdata 改变后的值  old:改变前的值
				console.log("str由" + old + "变成了" + newdata);
			}
		}
	}
</script>

<style>
	.box {
		width: 300px;
		height: 100px;
		background-color: lightgreen;
	}

	.on {
		font-size: 30px;
		color: #315EFB;
		text-align: center;
		line-height: 100px;
	}
</style>
