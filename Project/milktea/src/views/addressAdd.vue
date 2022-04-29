<template>
	<div class="box">
		<header>
			<div class="head">
				<div><span class="iconfont icon-zuojiantou" @click="turn"></span><span>添加地址</span></div>
				<right></right>
			</div>
		</header>
		<div class="mid">
			<van-address-edit :area-list="areaList" show-set-default show-search-result :search-result="searchResult"
				:area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" />

		</div>
	</div>
</template>

<script>
	import {
		areaList
	} from '@vant/area-data';
	import Vue from 'vue';
	import {
		AddressEdit,
		Toast
	} from 'vant';

	Vue.use(AddressEdit);
	Vue.use(Toast);
	export default {
		data() {
			return {
				areaList,
				searchResult: [],
				pla: ["用于取餐时对您的称呼", "您的联系方式", "选择收货地址"],
				val: {
					name: "",
					phone: "",
					address: "",
					Adefault: false
				},
			};
		},
		mounted() { //
			var pla = document.getElementsByClassName("van-field__control");
			for (let i = 0; i < pla.length - 1; i++) {
				pla[i].placeholder = this.pla[i];
			}
			if(this.$route.params){
				var btn = document.getElementsByClassName("van-switch")[0]; //是否默认
				pla[0].value = this.$route.params.username;
				pla[1].value = this.$route.params.phone;
				pla[2].value = "湖南省/" + this.$route.params.address.substring(0, this.$route.params.address.indexOf("市") + 1) +
					"/" + this.$route.params.address.substring(this.$route.params.address.indexOf("市") + 1, this.$route.params
						.address.indexOf("区") + 1);
				pla[3].value = this.$route.params.address.substring(this.$route.params.address.substring(this.$route.params
					.address.indexOf("区") + 1));
				btn.ariaChecked = this.$route.params.Adefault;
			}

		},
		updated() { // 更新数据后

		},
		components: {
			right: () => import("../components/rightIcon.vue")
		},
		methods: {
			turn() {
				this.$router.go(-1);
				this.$store.state.bool = false;
			},
			onSave() {
				var pla = document.getElementsByClassName("van-field__control");
				var btn = document.getElementsByClassName("van-switch")[0]; //是否默认
				this.val.name = pla[0].value;
				this.val.phone = pla[1].value;
				var str = pla[2].value.split("/").splice(1, 2).join("");
				this.val.address = str + pla[3].value;
				this.val.Adefault = btn.ariaChecked;
				if (this.$route.params.index) {
					this.$store.state.delivers[this.$route.params.index] = this.val;
				} else {
					this.$store.state.delivers.push(this.val);
				}
				this.$router.push({
					name: "teaAddress"
				});
			},
		}
	}
</script>

<style>
	@import url("../font/font_icon/iconfont.css");

	.van-cell {
		width: 7.1rem;
		height: .8rem;
		margin: 0 auto;
	}

	.van-address-edit__fields .van-field__label {
		width: 1.9rem;
		height: .4rem;
		line-height: .4rem;
	}

	.van-field__label span,
	.van-cell__title span {
		font-size: .26rem;
		color: #333333;
	}

	.van-field__body input,
	.van-field__body textarea {
		font-size: .24rem;
	}
</style>
