/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        arnit: {
          red: '#CC0001',
          'red-dark': '#A80001',
          'red-light': '#E11B1C',
          black: '#111111',
          'black-deep': '#000000',
          gray: '#F8F9FA',
          'gray-border': '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
