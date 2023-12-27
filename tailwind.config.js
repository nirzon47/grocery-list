import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				neon: ['Tilt Neon', 'monospace'],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['garden'],
	},
}
