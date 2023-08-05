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
        'pastel-100': '#FCF8ED',
        'pastel-200': '#D5DDD4',
        'pastel-300': '#825E6F',
        'pastel-400': '#32414A',
        'pastel-500': '#181925',
      },
    },
  },
  plugins: [],
}

