/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: {
            static: 'rgb(245 245 245)',
            hover: 'rgb(212 212 212)',
            secondary: {
              static: 'rgb(229 229 229)',
              hover: 'rgb(255,255,255)',
            },
          },
          text: {
            static: 'rgb(64 64 64)',
            hover: 'rgb(10 10 10)',
          },
        },
        dark: {
          bg: {
            static: 'rgb(23 23 23)',
            hover: 'rgb(64 64 64)',
            secondary: {
              static: 'rgb(38 38 38)',
              hover: 'rgb(10 10 10)',
            },
          },
          text: {
            static: 'rgb(212 212 212)',
            hover: 'rgb(245 245 245)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
