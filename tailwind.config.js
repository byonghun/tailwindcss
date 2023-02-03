/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // adding a customization removes the default themes
    // but extend writes on top of default Tailwind
    container: {
      // centers containers
      center: true
    },
    extend: {
      screens: {
        sm: '480px',
        // => @media (min-width: 480px) {...}
        md: '768px',
        // => @media (min-width: 768px) {...}
        lg: '976px',
        // => @media (min-width: 976px) {...}
        xl: '1440px'
        // => @media (min-width: 1440px) {...}
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '20px',
        '5': '24px'
      },
      fontSize: {
        base: '18px', // default is 16px which is 1rem
      },
      colors: {
        green: {
          '400': '#49e659'
        }
      }
    },
  },
  plugins: [],
}
