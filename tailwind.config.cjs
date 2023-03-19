const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        'bright-blue': {
          100: '#f5f6fe',
          500: '#4550e6',
          700: '#3740b8'
        }
      },
      spacing: {
        17: '70px'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme('backgroundColor.bright-blue.500'),
          '&:hover': {
            backgroundColor: theme('backgroundColor.bright-blue.700'),
            boxShadow: theme('boxShadow.lg')
          }
        },
        '.btn-secondary': {
          backgroundColor: theme('backgroundColor.gray.500'),
          '&:hover': {
            backgroundColor: theme('backgroundColor.gray.600'),
            boxShadow: theme('boxShadow.lg')
          }
        }
      });
    })
  ]
};
