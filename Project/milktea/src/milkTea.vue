<template>
	<div>
		<router-view></router-view>
		<footer v-if="$store.state.bool">
			<ul>
				<li v-for="v,i in $store.state.footerimg" :key="i" @click="change(i)">
					<router-link :to="v.to"><img :src="v.url">
						<p>{{v.tit}}</p>
					</router-link>
				</li>
			</ul>
		</footer>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			change(n) {
				for (let i = 0; i < this.$store.state.footerimg.length; i++) {
					this.$store.state.footerimg[i].url = this.$store.state.footerimg_w[i];
				}
				this.$store.state.footerimg[n].url = this.$store.state.footerimg_o[n];
			}
		}
	}
</script>

<style>
	html{
		font-size: 100px;
	}
	* {
		margin: 0;
		padding: 0;
	}

	body {
		font-size: 16px;
	}

	img {
		border: 0;
		display: block;
	}

	ul,
	ol {
		list-style: none;
		overflow: hidden;
	}

	a {
		text-decoration: none;
	}

	.box {
		width: 7.5rem;
		margin: 0 auto;
		overflow: hidden;
		background-color: white;
	}

	header {
		width: 7.5rem;
		height: .88rem;
		background-color: white;
		margin: 0 auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.head {
		width: 7.1rem;
		height: .88rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.head span {
		font-size: .32rem;
		color: #333;
		font-family: "苹方";
	}

	.mid {
		width: 7.5rem;
		margin: 0 auto;
		position: fixed;
		top: .88rem;
		bottom: 1rem;
		left: 0;
		overflow: scroll;
	}

	footer {
		width: 7.5rem;
		height: 1rem;
		margin: 0 auto;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: white;
	}

	footer ul {
		padding-top: .15rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: center;
	}

	footer ul li a {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer p {
		font-size: .2rem;
		font-weight: "苹方";
		color: #999;
	}

	footer ul li img {
		width: .5rem;
		height: .5rem;
	}
	@media screen and (max-width:375px) {
		html{
			font-size: 50px;
		}
	}
</style>
