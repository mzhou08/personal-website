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
      margin: {
        '1/6': '16.666%'
      },
      padding: {
        '1/4': '25%',
        '1/2': '50%',
        full: '100%',
      },
      height: {
        '1/10': '10%',
      },
    },
  },
  plugins: [],
}

