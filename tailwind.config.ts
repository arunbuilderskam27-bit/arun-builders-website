/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f4',
          100: '#e1efe6',
          200: '#c5e0d0',
          300: '#9bc8b1',
          400: '#6ba98d',
          500: '#478c6f',
          600: '#347057',
          700: '#2b5a47',
          800: '#24483a',
          900: '#1e3c31',
          950: '#0f221b',
        },
        gold: {
          50: '#fbf8ea',
          100: '#f6efcd',
          200: '#efdf9b',
          300: '#e5c960',
          400: '#deb637',
          500: '#d19e24',
          600: '#b47b1c',
          700: '#905b19',
          800: '#78491c',
          900: '#653c1b',
          950: '#3a200c',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
