import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['business']
	}
} satisfies Config;
