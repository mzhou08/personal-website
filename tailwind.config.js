/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ["Century\\ Gothic", "CenturyGothic", "AppleGothic", "sans-serif"],
      'body': ["Helvetica\\ Neue", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      inset: {
        "1/10": "10%",
      },
      padding: {
        '1/4': '25%',
        '1/2': '50%',
        full: '100%',
      },
      height: {
        '1/10': '10%',
      },
      colors: {
        'pastel-100': '#F6F6F6',
        'pastel-200': '#F1EFEB',
        'pastel-300': '#EDEDED',
        'pastel-400': '#576F72',
      },
    },
  },
  plugins: [],
}

