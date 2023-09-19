/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],

      },
      colors: {
        primary: {
          DEFAULT: "#00B8F1",
          dark: "#00C3FF",
          darker: "#00D0FF",
          light: "#6DDCFF",
          lighter: "#98E7FF",
          blue: "#1976D2",
          gradientOne: "#0B234CE8",
          gradientTwo: "#6DDCFFEB",
          white: "#FFFFFF",
          gray: "#8E8E8E",

          navbarBg: "#0B234C",
          navItemBg: " #000a4c",
          darkGray: "#555555",
          cardBg: "#F7F7F7",
          smCardBorder: "#F4F4F4",
        },
        secondary: {
          DEFAULT: "#2B388F",
          light: "#7384F8",
          lighter: "#9CA8FF",
          lightest: "#C5CEFF",
          dark: "#4E5FD0",
          darker: "#2839A9",
        },
        textColors: "#000000",
        light_Grey: "#707070",
        light_Black: "#3D3D3D",

        pageBorder: "#F9F9F9",
        formInput: "#FBFBFB",
        formBorder: "#E8E8E8",

      },
    },
  },
  plugins: [],
};
