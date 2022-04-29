<template>
	<div class="box">
		<ul>
			<!-- <li v-for="v,i in tabs" :key="i" :class="['lis',{on: msg === v.tab}]" @click="msg=v.tab">
				<router-link :to="v.ads">{{v.tab}}</router-link>
			</li> -->
			<router-link v-for="v,i in tabs" :key="i" :to="v.ads">
				<li :class="['lis',{on: msg === v.tab}]" @click="msg=v.tab">
					{{v.tab}}
				</li>
			</router-link>
		</ul>
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabs:[
					{
						tab:"首页",
						ads:"/"
					},
					{
						tab:"产品",
						ads:"/product"
					},
					{
						tab:"关于",
						ads:"/about"
					},
					{
						tab:"服务",
						ads:"/serve"
					},
				],
				msg:"首页"
			}
		},
		// computed:{
		// 	changeTab(){
		// 		return this.msg;
		// 	}
		// }
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.box{
		width: 1200px;
		height: auto;
		margin: 0 auto;
	}
	ul{
		width: 100%;
		height: 80px;
		margin: 0 auto;
		list-style: none;
		background-color: lightgreen;
	}
	.lis{
		width: 298px;
		height: 80px;
		font-size: 25px;
		float: left;
		text-align: center;
		line-height: 80px;
		border: 1px solid #EEEEEE;
	}
	.lis a{
		text-decoration: none;
	}
	.lis:hover{
		background-color: plum;
	}
	.lis.on{
			background-color: plum;
	}
	.text{
		width: 100%;
		height:500px;
		font-size: 18px;
		background-color: lavenderblush;
	}
</style>
