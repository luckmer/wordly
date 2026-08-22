/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#121212',
        text: '#E5E5E7',
        border: '#3A3A3C',
        notification: '#FF453A',

        primary: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#5B21B6',
        },

        key: {
          DEFAULT: '#6B6B6D',
          pressed: '#8E8E90',
          text: '#FFFFFF',
        },

        tile: {
          DEFAULT: '#0D0D0D',
          border: '#3A3A3C',
        },
      },
    },
  },
  plugins: [],
}
