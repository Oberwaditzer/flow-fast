/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		'w-screen',
		'h-4',
		'h-8',
		'h-16',
		'p-8',
		'text-white',
		'text-black',
		{
			pattern: /text-[a-zA-Z]*-500$/,
		}],
};
