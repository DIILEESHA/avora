/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        customBackground: 'rgba(30, 30, 45, 1)',
        customyellow:'rgba(255, 144, 1, 1)'
      }
    },
  },
  plugins: [],
}

