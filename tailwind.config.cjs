/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        'bright-blue-100': '#f5f6fe',
        'bright-blue-500': '#4550e6',
        'bright-blue-700': '#3740b8'
      },
      spacing: {
        17: '70px'
      }
    }
  },
  plugins: []
};
