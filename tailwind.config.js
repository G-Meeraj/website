/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			  },
			  keyframes: {
				float: {
				  '0%, 100%': { transform: 'translateY(0)' },
				  '50%': { transform: 'translateY(-10px)' },
				}
			  },
			  transitionTimingFunction: {
				'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			  }
			
			
		  },
		},
	plugins: [],
}
