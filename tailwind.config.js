// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        'royalBlue': '#4753d6',
        'pink': '#d02561',
        'softPink': '#ff79a8',
        'gray': '#848198',
        'dark-blue': '#04091a',
        'softBlue': '#d4dee1'
      },

      width: {
        500: '500px'
      },

      height: {
        90: '90vh',
        1000: '1000px'
      },

      inset: {
        21: '21px'
      },
      
      screens: {

        'sm': '0px',

        'md': '499px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '760px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1024px',

        '2xl': '1500px'
  
      },

      boxShadow: {
        def: '0 0 0 6px #04091a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}