<template>
	<div>
		<!-- 
		状态管理vuex
		使用步骤：
		1.安装vuex ：npm install vue@版本号 -s
		2.在src目录下创建store目录，并新建index.js文件
		3.在main.js文件中配置import store from 'store'
		4.页面中，通过$store调用vuex数据
		-->

		<button @click="$store.state.bool=!$store.state.bool">切换</button>
		<div v-if="$store.state.bool">Hello vue</div>
		<ul>
			<li v-for="val in $store.state.list" :key="val.tlt">{{val.tit}}</li>
		</ul>
		<div v-for="val in $store.state.news" :key="val.tit">
			<h2>{{val.tit}}</h2>
			<span>{{val.time}}</span>
			<p>{{val.body}}</p>
		</div>
		<hr>
		getters做属性引用
		<div v-for="val,i in $store.getters.timer" :key="i">
			<h2>{{val.tit}}</h2>
			<span>{{val.time}}</span>
			<p>{{val.body}}</p>
		</div>
		<hr>
		getters做函数引用
		<div v-for="v in $store.getters.n('上海疫情')" :key="v.time">
			<h2>{{v.tit}}</h2>
			<span>{{v.time}}</span>
			<p>{{v.body}}</p>
		</div>
		<hr>
		<button @click="tong">同步</button>
		<ul>
			<p>{{$store.state.bool}}</p>
			<li v-for="val in $store.state.list" :key="val.tlt">{{val.tit}}</li>
		</ul>
		<hr>
		<button @click="yi">异步</button>
		<ul>
			<li v-for="val in $store.state.list" :key="val.tlt">{{val.tit}}</li>
		</ul>
		<hr><hr>
		调用modules里面的数据<br>
		<table border="1" cellspacing="0" cellpadding="0" style="text-align: center;">
			<col width="50px">
			<col width="50px">
			<col width="50px">
			<tr>
				<td>姓名</td>
				<td>性别</td>
				<td>年龄</td>
			</tr>
			<tr v-for="v in $store.state.other.people" :key="v.age">
				<td>{{v.name}}</td>
				<td>{{v.sex}}</td>
				<td>{{v.age}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			tong(){
				//调用vuex中mutations里面的同步方法,修改其中的数据
				this.$store.state.bool=!this.$store.state.bool;
				this.$store.commit("change","分类")//调用mutations中的同步方法，修改其中的数据
			},
			yi(){
				this.$store.dispatch("yibu","综艺") //调用actions中的异步方法修改数据
			}
		},
		created(){
			console.log(this.$store.state.other.people)//调用modules里面的数据
		}
	}
</script>

<style>
</style>
