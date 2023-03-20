const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px'
    },
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
        },
        '.container': {
          width: '100%',
          marginRight: 'auto',
          marginLeft: 'auto'
        },
        '@media (min-width: 1920px)':{
          '.container':{
            minWidth: '1880px'
          }
        },
        '@media (min-width: 1536px)':{
          '.container':{
            minWidth: '1420px'
          }
        },
        '@media (min-width: 1280px)':{
          '.container':{
            minWidth: '1160px'
          }
        },
        '@media (min-width: 768px)':{
          '.container':{
            maxWidth: '700px'
          }
        },

        '@media (max-width: 767px)':{
          '.container':{
            maxWidth: '500px'
          }
        },
      });
    })
  ]
};
