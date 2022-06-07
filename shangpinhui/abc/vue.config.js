const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: []
		}
	},
	devServer: {
		proxy: {
			"/api": {
				target: "http://gmall-h5-api.atguigu.cn",
			},
		},
	},
})
