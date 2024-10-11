/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      background: "#1e2127",
      primary: "#282c34",  
      secondary: "#21252b",
      highlight: "#abb2bf",
      accent: "#6fffe9",
      white: "#f5f5f5",
    },
    extend: {
      fontFamily: {
        'rub': ["Rubik", "sans-serif"],
        'code': ["VT323", "sans-serif"]
      },
    },
  },
  plugins: [],
}

