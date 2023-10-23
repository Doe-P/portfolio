/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Notosan lao', 'sans-serif'],
      mono: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        primaryTitle: '#127369',
        primaryContent: '#4C5958',
        primarySubContent: '#8AA6A3',
        primaryBase: '#4C5958',
        primaryAccent: '#10403B',
        primaryBg: '#BFBFBF',
      }
    },
  },
  plugins: [],
}
