/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				facebook: '#1778F2',
				linkedIn: '#0072b1',
				twitter: '#00acee',
			},
			backgroundImage: {
				instagram: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
			},
			animation: {
				type: "typing 1.5s steps(40, end), blink .75s step-end infinite"
			},
			keyframes: {
				typing: {
					"from": { width: 0 },
					"to": { width: "100%" }
				},
				blink: {
					"from, to": { borderColor: "transparent" },
					"50%": { borderColor: "#21212155" }
				}
			},
			fontFamily: {
				primary: "'Fira Code'",
				secondary: "'Days One'",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
