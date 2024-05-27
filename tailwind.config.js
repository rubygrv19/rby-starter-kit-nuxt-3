/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			screens: {
				xs: {
					min: '320px',
					max: '767px'
				},
				tablet: {
					max: '720'
				},
				mobile: {
					max: '820px'
				},
				desktop: {
					min: '1025px'
				},
			},
		},
	},
	plugins: [],
}