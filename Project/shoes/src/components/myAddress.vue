<template>
	<div class="address-box">
		<div class="address" v-for="v,i in local" :key="i">
			<div class="mid-content1" @click="Tobuy(i)">
				<div class="up">
					<p>{{v.name}}</p>
					<p>{{v.tel}}</p>
				</div>
				<div class="down">
					<span>{{v.province}}</span><span>{{v.city}}</span><span>{{v.county}}</span><span>{{v.addressDetail}}</span>
				</div>
			</div>
			<div class="mid-content2">
				<div class="content-box">
					<van-radio-group v-model="radio">
						<van-radio :name="i" checked-color="#ff5e46" icon-size="24px" ref="check">默认地址</van-radio>
					</van-radio-group>
					<div class="content-right">
						<div @click="edit(i)"><span class="iconfont icon-bianji"></span>编辑</div>
						<div @click="del(i)"><span class="iconfont icon-shanchu"></span>删除</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<button @click="newaddress">添加新地址</button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		RadioGroup,
		Radio
	} from 'vant';

	Vue.use(Radio);
	Vue.use(RadioGroup);
	export default {
		data() {
			return {
				checked: false,
				local: [],
				radio: '0',
			}
		},
		created() {
			this.local = [];
			if (localStorage.getItem("address")) {
				this.local = (JSON.parse(localStorage.getItem("address")))

			}
			this.$nextTick(() => {
				let index = this.local.findIndex(v => {
					return v.isDefault == true;
				})
				if (index >= 0) { //设置默认地址
					this.radio = this.$refs.check[index].name
				}
			})
			if(this.$route.params.obj){
				this.$store.state.data=this.$route.params.obj;
			}
		},
		methods: {
			newaddress() {
				this.$router.push({
					name: 'newads',
					params: {
						title: '我的收货地址',
					}
				})
			},
			edit(i) {
				this.$router.push({
					name: 'newads',
					params: {
						title: '我的收货地址',
						content: this.local[i],
						id: i
					}
				})
			},
			del(i) {
				this.local.splice(i, 1);
				localStorage.setItem("address", JSON.stringify(this.local))
			},
			Tobuy(i) {
				if (this.$store.state.data) {
					this.$router.replace({
						name: "settlement",
						params: {
							title: "确认订单",
							num: i,
							obj: this.$store.state.data
						}
					})
				}

			},
		},

	}
</script>

<style>
	.address-box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 90px;
		overflow: scroll;
	}

	.address {
		width: 750px;
		height: 230px;
		background-color: #eee;
	}

	.mid-content1 {
		box-sizing: border-box;
		width: 750px;
		height: 140px;
		border-bottom: 1px solid #EEE;
		background-color: #fff;
	}

	.up {
		width: 670px;
		height: 60px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.up p {
		font-size: 28px;
		color: #666;
	}

	.down {
		width: 670px;
		height: 80px;
		margin: 0 auto;
	}

	.down span {
		font-size: 24px;
		color: #666;
		font-family: "苹方";
		padding-right: 20px;
	}

	.mid-content2 {
		width: 750px;
		height: 70px;
		background-color: #fff;
	}

	.content-box {
		width: 670px;
		height: 70px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.content-box .van-radio-group {
		display: flex;
		align-items: center;
	}

	.content-box .van-radio__icon {
		height: 25px;
	}

	.content-box .van-radio__icon .van-icon {
		width: 25px;
		height: 25px;
		border: 1px solid #ff5e46;
	}

	.content-box .van-radio__label {
		font-size: 24px;
		color: #ff5e46;
	}

	.content-right {
		width: 185px;
		height: 70px;
		display: flex;
		justify-content: space-between;
	}

	.content-right div {
		width: 80px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		color: #666;
	}

	.content-right div span {
		font-size: 26px;
	}

	.footer {
		width: 750px;
		height: 90px;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.footer button {
		width: 750px;
		height: 90px;
		background-color: #ff5e46;
		border: none;
		font-size: 36px;
		color: white;
		font-family: "苹方";
	}
</style>
