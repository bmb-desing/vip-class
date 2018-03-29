/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	loading: 'components/Loading.vue',
	/*
  ** Headers of the page
  */
	head: {
		title: 'starter',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
  ** Global CSS
  */
	css: [
  	'~/assets/css/main.css',
	  { src: '~/assets/sass/main.sass', lang: 'sass' }
	],
	/*
  ** Add axios globally
  */
	build: {
		extractCSS: true,
		vendor: ['axios'],
		/*
    ** Run ESLINT on save
    */
		extend (config, ctx) {
			if (ctx.isClient) {
				/* config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				}) */
			}
		}
	}
}