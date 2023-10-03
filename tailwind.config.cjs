/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
