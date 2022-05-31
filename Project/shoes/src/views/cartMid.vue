<template>
	<div class="cart_box">
		<van-checkbox-group v-model="checkeds" ref="checkboxGroup">
			<van-swipe-cell v-for="v,i in arr" :key="i" :before-close="beforeClose" :aira-index="i">
				
				<van-checkbox :name="v.id+i" ref="checkbox" checked-color="#ff5e46" @click="trigger(i)"></van-checkbox>
				
				<van-card :price="(v.price*100/100).toFixed(2)" :desc="det[i]" :title="v.txt" class="goods-card"
					:thumb="v.img" />
				<div class="stepper">
					<van-stepper :ref="'step'+i" disable-input @plus="plus(i)" @minus="minus(i)" />
				</div>
				<template #right>
					<van-button square text="删除" type="danger" class="delete-button" />
				</template>
				
			</van-swipe-cell>
			
		</van-checkbox-group>
		
		<div class="car-nav">
			<van-checkbox checked-color="#ff5e46" type="primary" @click="checkAll" v-model="checked">全选</van-checkbox>
			<div class="total"><span>合计：</span>
				<div class="tatal-box">￥<input type="text" ref="money" value="0.00" readonly></div>
			</div>
			<button @click="Tobuy">去结算</button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		SwipeCell,
		Cell,
		Button,
		Card,
		Checkbox,
		CheckboxGroup,
		Dialog
	} from 'vant';

	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(SwipeCell);
	Vue.use(Cell);
	Vue.use(Button);
	Vue.use(Card);
	Vue.use(Dialog);
	export default {
		data() {
			return {
				arr: [],
				det: [],
				checkeds: [],
				checked: false,
				checktrigger: [],

			}
		},
		created() {

			this.arr = JSON.parse(localStorage.getItem("info"));
			this.arr.forEach((v, i) => {
				let dec = v.color + "  " + v.size;
				this.det.push(dec);  //颜色和尺码
				let val = "step" + i;
				this.$nextTick(() => {
					this.$refs[val][0].currentValue = v.num;
					this.checktrigger.push(this.$refs['checkbox'][i].checked); //选中状态
				})
			})
			
		},
		methods: {
			intoStorage(i) { //数量添加或减少,存入本地存储
				let val = "step" + i;
				let num = this.$refs[val][0].currentValue;
				this.arr[i].num = num;
				localStorage.setItem("info", JSON.stringify(this.arr));
			},
			totalPrice() { //根据选中状态计算总价
				let sum = 0;
				for (let i = 0; i < this.checktrigger.length; i++) {
					if (this.checktrigger[i]) {
						sum += Number(this.arr[i].price) * Number(this.arr[i].num);
					}
				}
				return (sum*100/100).toFixed(2)
			},
			
			selectAll(arr){  //判断是否全选
				let res = arr.some(v => {
					return v == false
				})
				if (!res&&this.arr.length>0) { //判断是否全选
					this.checked = true;
				} else {
					this.checked = false;
				}
				this.$refs['money'].value = this.totalPrice();
			},
			

			checkAll() { //点击全选和取消全选
				if (this.checked) {
					this.$refs.checkboxGroup.toggleAll(true);
					this.checktrigger = this.checktrigger.map(v => {
						return v = (v ? true : true)
					})
					this.$refs['money'].value = this.totalPrice(); //全选计算总价

				} else {
					this.$refs.checkboxGroup.toggleAll(false);
					this.checktrigger = this.checktrigger.map(v => {
						return v = (v ? false : false)
					})
					this.$refs['money'].value = this.totalPrice(); //取消全选计算总价
				}

			},
			plus(i) { //数量增加时  总价的计算
				this.intoStorage(i)
				this.$refs['money'].value = this.totalPrice();
			},
			minus(i) { //数量减少时  总价的计算
				this.intoStorage(i)
				this.$refs['money'].value = this.totalPrice();
			},
			trigger(i) { //点击切换选中状态
				this.checktrigger[i] = this.$refs['checkbox'][i].checked;
				// let res = this.checktrigger.some(v => {
				// 	return v == false
				// })
				// if (!res) { //判断是否全选
				// 	this.checked = true;
				// } else {
				// 	this.checked = false;
				// }
				// this.$refs['money'].value = this.totalPrice();
				this.selectAll(this.checktrigger);
			},
			beforeClose({position,instance}) {   //删除操作
				switch (position) {
					case 'right':
						Dialog.confirm({
							message: '确定删除该商品吗？'
						}).then(() => {  //确定  删除商品  （getAttribute()：js获取自定义属性节点函数）
							
							let ele=instance.$refs.right.parentElement.parentElement;
							let i=ele.getAttribute('aira-index')
							
							this.arr.splice(i,1);  //删除arr中的对应数据，再存入本地存储实现删除
							localStorage.setItem("info",JSON.stringify(this.arr));
							
							this.checktrigger.splice(i,1);
							
							this.arr.forEach((v,i)=>{
								this.checktrigger[i]=this.$refs['checkbox'][i].checked
							})
							
							this.selectAll(this.checktrigger)  //判断全选
							
							
							instance.close();
						}).catch(()=>{
							instance.close();
						});
						break;
				}
			},
			Tobuy(){
				let data=[];
				this.checktrigger.forEach((v,i)=>{
					if(v){
						data.push(this.arr[i]);
					}
				})
				this.$router.push({
					name: "settlement",
					params: {
						title: "确认订单",
						obj:data,
					}
				})
			}
		}
	}
</script>

<style>
	.cart_box {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 200px;
		overflow: scroll;
	}

	.van-swipe-cell {
		border-bottom: 1px solid #eee;
		position: relative;
	}

	.van-checkbox {
		width: 70px;
		height: 240px;
		justify-content: center;
		float: left;
	}

	.van-checkbox__icon .van-icon {
		width: 32px;
		height: 32px;
		line-height: 32px;
		font-size: 30px;
	}

	.van-card {
		float: right;
		background-color: white;
	}

	.van-card,
	.van-card__header {
		width: 680px;
		height: 240px;
	}

	.van-card__header {
		align-items: center;
	}

	.van-card__thumb {
		width: 200px;
		height: 200px;
	}

	.van-card__title,
	.van-card__desc {
		width: 465px;
		height: 75px;
		max-height: 75px;
		line-height: 40px;
	}

	.van-card__title {
		font-size: 28px;
		color: #666666;
	}

	.van-card__desc {
		font-size: 22px;
		color: #999;
		line-height: 100px;
	}

	.van-card__bottom,
	.van-card__price {
		width: 150px;
		height: 40px;
		font-size: 32px;
		color: #ff5e46;
		line-height: 40px;
	}

	.van-card__price-integer {
		font-size: 32px;
	}

	.van-swipe-cell__right,
	.van-swipe-cell__right .van-button {
		width: 160px;
		height: 240px;
	}

	.van-swipe-cell__right .van-button {
		font-size: 36px;
		color: white;
	}

	.car-nav {
		width: 750px;
		height: 90px;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
		position: fixed;
		bottom: 110px;
		left: 0;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.car-nav .van-checkbox {
		width: 150px;
		height: 90px;
	}

	.stepper {
		width: 160px;
		height: 40px;
		position: absolute;
		right: 40px;
		top: 190px;
		border: 1px solid #eee;
	}

	.stepper .van-stepper {
		width: 100%;
		height: 100%;
	}

	.stepper .van-stepper__minus,
	.van-stepper__plus {
		width: 40px;
		height: 40px;
		border: 1px solid #eee;
		background: none;
	}

	.stepper .van-stepper__input {
		width: 80px;
		height: 40px;
		margin: 0;
		font-size: 32px;
		color: #333;
		background: none;
	}

	.total {
		width: 380px;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.tatal-box {
		width: 70%;
		display: flex;
		align-items: center;
		font-size: 32px;
		color: #ff5e46;
	}

	.total span {
		font-family: "苹方";
		font-size: 32px;
		color: #333333;
	}

	.total input {
		width: 100%;
		height: 90px;
		border: none;
		outline: none;
	}

	.car-nav button {
		width: 215px;
		height: 90px;
		background-color: #ff5e46;
		border: none;
		color: white;
		font-size: 32px;
	}
	.van-dialog{
		width: 300px;
		height: 200px;
	}
	.van-dialog__content--isolated{
		width: 100%;
		height: 100px;
		min-height: 100px;
	}
	.van-dialog__message{
		font-size: 24px;
		color: #333;
	}
	.van-dialog__footer{
		width: 100%;
		height: 100px;
	}
	.van-button{
		width: 50%;
		height: 100px;
		font-size: 22px;
		color: #333;
	}
	.van-dialog__confirm, .van-dialog__confirm:active{
		color: #ff5e46;
	}
</style>
