const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1200px',
      'xl': '1400px',
      '2xl': '1920px'
    },
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        'bright-blue': {
          100: '#f5f6fe',
          150: '#C3C7EC',
          200: '#c9ccf8 ',
          300: '#898FE2',
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
          // fontWeight: theme('fontWeight.'),
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
        // '@media (min-width: 1920px)':{
        //   '.container':{
        //     maxWidth: '1880px'
        //   }
        // },
  
        '@media (max-width: 576px)':{
          '.container':{
            maxWidth: '540px'
          }
        },
        '@media (max-width: 768px)':{
          '.container':{
            maxWidth: '720px'
          }
        },
  
        '@media (min-width: 992px)':{
          '.container':{
            maxWidth: '960px'
          }
        },
        '@media (min-width: 1200px)':{
          '.container':{
            maxWidth: '1140px'
          }
        },
        '@media (min-width: 1400px)':{
          '.container':{
            maxWidth: '1320px'
          }
      }
    //   ,
    //   '@media (min-width: 1800px)':{
    //     '.container':{
    //       maxWidth: '1700px'
    //     }
    // },
      
      
    });
    })
  ]
};
