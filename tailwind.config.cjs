/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors:{
				'main': '#ffcf8e',
			},
			backgroundImage: {
				'bgimg': "url('/img/background.jpg')"
			}
		},
	},

	plugins: [
        require('flowbite/plugin')
	],
}
