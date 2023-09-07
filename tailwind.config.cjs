/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    daisyui: {
        themes: [
            {
                mytheme: {



                    "primary": "#F2EEE9",



                    "secondary": "#1F1811",



                    "accent": "#BD941E",



                    "neutral": "#FFFFFF",

                },
            },
        ],
    },
    theme: {
		extend: {},
	},
    plugins: [require("daisyui")],
}
