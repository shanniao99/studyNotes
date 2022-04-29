<template>
	<div>
		<!-- <iframe id="geoPage" width=0 height=0 frameborder=0 style="display:none;" scrolling="no"
			src="https://apis.map.qq.com/tools/geolocation?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"></iframe>
		<p>{{opp}}</p> -->
		<div class="hello">
			<div style="height:500px" id="container" tabindex="0"></div>
		</div>
	</div>
</template>

<script>
	import {location} from './map.js'
	import AMap from 'AMap'
	export default {
		data() {
			return {
				// opp:"",
			}
		},
		mounted() {
			this.getLocation(); // 调用获取地理位置
			// this.Tmap()
		},
		created() {
			console.log(location)
		},
		methods: {
			/**获取地图定位*/
			getLocation() {
				let _that = this;
				let geolocation = location.initMap("map-container"); //定位
				AMap.event.addListener(geolocation, "complete", result => {
					_that.lat = result.position.lat;
					_that.lng = result.position.lng;
					_that.province = result.addressComponent.province;
					_that.city = result.addressComponent.city;
					_that.district = result.addressComponent.district;
				});
			},

			// Tmap() {
			// 	window.addEventListener('message', function(event) {
			// 		var loc = event.data;
			// 		this.opp = loc.city;
			// 		console.log(event)
			// 		console.log(this.opp) // 显示你当前位置  到市
			// 	}, false);
			// }

		},
		// Tmap() {
		// 	window.addEventListener('message', function(event) {
		// 		var loc = event.data;
		// 		this.opp = loc.city;
		// 		console.log(this.opp) // 显示你当前位置  到市
		// 	}, false);

		// }
	}
</script>

<style scoped>
</style>
