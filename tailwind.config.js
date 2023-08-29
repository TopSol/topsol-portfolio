/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: '#00B8F1',
          dark: '#00C3FF',
          darker: '#00D0FF',
          light: '#6DDCFF',
          lighter: '#98E7FF',
          blue:'#1976D2',
          gradientOne:'#0B234CE8',
          gradientTwo:'#6DDCFFEB',
          white:'#FFFFFF',
          gray:'#8E8E8E',
        },
        secondary: {
          DEFAULT: '#2B388F',
          light: '#7384F8',
          lighter: '#9CA8FF',
          lightest: '#C5CEFF',
          dark: '#4E5FD0',
          darker: '#2839A9',
        },
        textColors: "#000000"
      }
    },
  },
  plugins: [],
}
