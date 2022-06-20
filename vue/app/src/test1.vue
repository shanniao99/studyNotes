<template>
	<div>
		vue使用watch监听
		<div>
			<input type="text" placeholder="搜索" v-model.trim="keyword">
		</div>
		<div v-show="keyword">
			<ul>
				<li v-for="v in cityList" :key="v.id" @click="hand(item.name)">
					{{v}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	const delay=(function(){
		let timer=null;
		return function(callback,ms){
			clearTimeout(timer);
			timer=setTimeout(callback.ms)
		}
	})()
	export default{
		data(){
			return{
				keyword:'',
				cityList:[],
				timer:null,
				jsonData:[
					{id:1,name:"北京"},
					{id:2,name:"上海"},
					{id:3,name:"广州"},
					{id:4,name:"深圳"},
				]
			}
		},
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timer);
				}
				if(!this.keyword){
					this.cityList=[];
					return
				}
				this.timer=setTimeout(()=>{
					const res=[];
					this.jsonData.forEach(v=>{
						if(v.name.indexOf(this.keyword)>-1){
							res.push(v.name)
						}
					})
					this.cityList=res;
					console.log(this.cityList)
				},100)
			}
		}
	}
</script>

<style>
</style>