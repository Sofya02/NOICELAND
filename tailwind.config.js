/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'source-serif': ['Source Serif 4', 'serif'],
        'libre-franklin': ['Libre Franklin', 'sans-serif'],
        'tenor-sans': ['Tenor Sans', 'sans-serif'],
      },
	    width: {
        '6xlg': '1200px',
      },
    },
  },
  plugins: [],
}