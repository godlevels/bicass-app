/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        textPri: "#A6A6A6",
        textSec: "#191A15",
        mintGreen: '##52BDAA', 
        green: "#54BD95",
        whiteD: "#F8F8FA",
        blackD: "#000000",
        supBg: "#F9F8FE"
      },
      backgroundImage: {
        'gradient-to-b-mint': 'linear-gradient(to bottom, #ffffff, #54BD95)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}