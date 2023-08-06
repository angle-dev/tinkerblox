export default {
	theme: {
		fontFamily: {
			sans: ['Rubik', 'ui-sans-serif', 'system-ui']
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#002C49',

					secondary: '#A1499C',

					accent: '#00A7E5',

					neutral: '#040707',

					'base-100': '#F6F6F6',

					info: '#E76120',

					success: '#36d399',

					warning: '#fcd34d',

					error: '#f87272'
				}
			}
		]
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
