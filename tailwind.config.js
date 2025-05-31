/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing:{
       '13': '3.25rem',
      },
      fontFamily:{
        noto: ['Noto Serif Display']
      },
      colors:{
        bjir: '#932013'
      },
      animation:{
        'spin-fast': 'spin 0.1s linear infinite',
        'wiggle' : 'wiggle 1s ease-in-out infinite'
      },
      keyframes:{
        wiggle: {
          '0%, 100%' : {
            transform: 'rotate(-3deg)'
          },
          '50%' : {
            transform: 'rotate(3deg)'
          }
        }
      }
    },
  },
  plugins: [],
}

