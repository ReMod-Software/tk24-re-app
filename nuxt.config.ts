// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		'@nuxt/image',
	],
	css: [
		"~/assets/css/main.css",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	image: {
		inject: true
	  },
	runtimeConfig: {
		firebase: {
			apiKey: "AIzaSyAYjZmseIlXNXpvTl0RIvHAEvsuKsku2VE",
			authDomain: "beacon-735fe.firebaseapp.com",
			projectId: "beacon-735fe",
			storageBucket: "beacon-735fe.appspot.com",
			messagingSenderId: "456606038445",
			appId: "1:456606038445:web:c418d4d6ae19aa86a24924",
			measurementId: "G-G0R6Y96HZD",
		},
		pocketbaseUrl: process.env.POCKETBASE_URL,
	},
})
