/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        violet: "#1d1e42",
        gray: "#e0e0e0",
        hoverGray: "#cdcdcd",
        grayBorder: "#9E9E9E",
        buttonViolet: "#624DE3",
        buttonVioletHover: "#6050c3",
        darkViolet: "#141432",
        lightViolet: "#f7f6fe",
        semiDarkViolet: "#26264f",
        redText: "#a30d11",
        redBg: "#fbe7e8",
        greenText: "#1f9254",
        greenBg: "#f7f6fe",
        orangeText: "#cd6200",
        orangeBg: "#fef2e5",
      },
    },
  },
  plugins: [],
}

