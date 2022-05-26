<template>
	<div>
		<heads :title="$route.params.title"></heads>
		<div class="newads">
			<van-address-edit :area-list="areaList" show-set-default show-search-result ref="ads"
				:area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" />
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		AddressEdit,
		Toast
	} from 'vant';
	import {
		areaList
	} from '@vant/area-data';

	Vue.use(AddressEdit);
	Vue.use(Toast);
	export default {
		data() {
			return {
				areaList,
				addres: [],
			}
		},
		created() {

			this.addres = [];
			if (localStorage.getItem("address")) {
				this.addres = (JSON.parse(localStorage.getItem("address")))
			}
			console.log(this.$route.params.id)
			if (this.$route.params.id != undefined) {
				this.$nextTick(() => {
					this.$refs.ads.addressInfo.addressDetail = this.$route.params.content.addressDetail
					this.$refs.ads.addressInfo.areaCode = this.$route.params.content.areaCode
					this.$refs.ads.addressInfo.city = this.$route.params.content.city
					this.$refs.ads.addressInfo.country = this.$route.params.content.country
					this.$refs.ads.addressInfo.county = this.$route.params.content.county
					this.$refs.ads.addressInfo.isDefault = this.$route.params.content.isDefault
					this.$refs.ads.addressInfo.name = this.$route.params.content.name
					this.$refs.ads.addressInfo.postalCode = this.$route.params.content.postalCode
					this.$refs.ads.addressInfo.province = this.$route.params.content.province
					this.$refs.ads.addressInfo.tel = this.$route.params.content.tel
				})
			}


		},
		methods: {
			onSave(e) {
				if (this.$route.params.id != undefined&&this.$route.params.id >= 0) {
					this.addres[this.$route.params.id] = e;
				} else {
					this.addres.unshift(e);
				}
				localStorage.setItem("address", JSON.stringify(this.addres))

				this.$router.replace({
					name: 'list',
					params: {
						title: "我的地址",
						is: "addres",
					}
				})
			},
		},
		components: {
			heads: () => import("../components/headTit.vue"),
		},
	}
</script>

<style>
	.newads {
		width: 750px;
		position: fixed;
		top: 88px;
		left: 0;
		bottom: 0;
		overflow: scroll;
	}

	.newads .van-address-edit {
		width: 710px;
		margin: 0 auto;
		padding: 0;
	}

	.newads .van-address-edit__fields {
		width: 710px;
		height: 515px;
	}

	.van-cell {
		line-height: 90px;
	}

	.van-field__error-message {
		font-size: 28px;
	}

	.van-address-edit-detail {
		height: 150px;
		border-bottom: 0.02667rem solid #ebedf0;
	}

	.van-field__label {
		font-size: 32px;
		color: #333;
		font-family: "苹方";
	}

	.van-field__control {
		font-size: 32px;
		color: #999;
	}

	.van-address-edit__default {
		margin: 0;
		font-size: 32px;
		color: #333;
	}

	.van-switch {
		width: 70px;
		height: 45px;
	}

	.van-switch__node {
		width: 45px;
		height: 45px;
	}

	.van-switch--on {
		background-color: #ff5e46;
	}

	.van-address-edit__buttons {
		width: 710px;
		height: 200px;
		margin: 0 auto;
		padding: 0;
		display: flex;
		align-items: center;
	}

	.van-button {
		width: 710px;
		height: 70px;
		margin: 0;
		background-color: #ff5e46;
		border: none;
		font-size: 32px;

	}
</style>
