/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: '#dc2626',
        secondary: '#64748b',
        dark: '#171717',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

