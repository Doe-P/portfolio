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
        primaryTitle: '#2ECC71',
        primaryHeader: '#fff',
        primaryContent: '#95A5A6',
        primarySubContent: '#232D3F',
        primarySubContent2:'#497f9e',
        primaryBase: '#a9b5b4',
        primaryAccent: '#27ae60',
        primaryBg: '#000',
      }
    },
  },
  plugins: [],
}
