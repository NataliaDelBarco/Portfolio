/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins-Regular', 'sans-serif'],
				serif: ['Bukowski-Regular', 'Times New Roman'],
				bold: ['Poppins-Bold', 'sans-serif'],
				med: ['Poppins-Medium', 'sans-serif'],
				black: ['Poppins-Black', 'sans-serif']
			},
			boxShadow: {
				lofi: '7px 8px 0px 0px rgba(0,0,0,1)'
			},
			animation: {
				rotateText: 'rotateText 10s linear infinite'
			},
			keyframes: {
				rotateText: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			}
		}
	}
}
