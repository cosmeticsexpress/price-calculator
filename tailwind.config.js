/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"FbSpoiler Regular"', ...fontFamily.sans],
        rubik: ['Rubik'],
      },
      colors: {
        gold: {
          300: '#e6c462',
          400: '#D7AD50',
          500: '#876628',
          900: '#231F20',
        },
      },
      screens: {
        mobile: '425px',
        container: '672px',
      },
    },
  },
  plugins: [],
};
