/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ["Century\\ Gothic", "CenturyGothic", "AppleGothic", "sans-serif"],
      'body': ["Optima", "Segoe", "Segoe UI", "Candara", "Calibri", "Arial", "sans-serif"],
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
        'pastel-200': '#DCDED5',
        'pastel-300': '#B899C7',
        'pastel-400': '#5B74D7',
        'pastel-500': '#181925',
        'pastel-text': '#181925',
      },
      keyframes: {
        rolodex: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%, 50%': { transform: 'translateY(-25%)' },
          '50%, 75%': { transform: 'translateY(-50%)' },
          '75%': { transform: 'translateY(-75%)' },
        }
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(.75,0,.25,1)',
      },
      animation: {
        rolodex: 'rolodex 16s ease-expo infinite',
      },
    },
  },
  plugins: [],
}

