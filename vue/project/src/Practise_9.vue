<template>
	<div>
		<van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
			:search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
			@delete="onDelete" @change-detail="onChangeDetail" />
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		AddressEdit,
		Toast,
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
				searchResult: [],
			};
		},
		methods: {
			onSave() {
				Toast('save');
			},
			onDelete() {
				Toast('delete');
			},
			onChangeDetail(val) {
				if (val) {
					this.searchResult = [{
						name: '',
						address: '',
					}, ];
				} else {
					this.searchResult = [];
				}
			},
		},
	};
</script>

<style>
</style>
