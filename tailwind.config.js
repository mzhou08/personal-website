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
      padding: {
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

