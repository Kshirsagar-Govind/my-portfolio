/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'pure': '#FFFFFF',
        'secondary': '#00B4D8',
        'primary': '#323232',
        'dark-primary': '#17275c',
        'dark-pure': '#17275c',
      },
        boxShadow: {
        '4xl': '0px 34px 21px -12px rgba(0, 0, 0, 0.16);',
        'dark-shadow': '0px 18px 15px -3px rgba(0, 0, 0, 0.18);'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
