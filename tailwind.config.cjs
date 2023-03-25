/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu, sans-serif'],
        cursive: ['Train One, cursive'],
      },
      screens: {
        'phone': '820px',
        '3xl': '1550px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}