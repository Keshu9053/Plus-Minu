/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'grey-blur': 'rgba(255, 255, 255, 0.15)',
        'grey-border': 'rgba(255, 255, 255, 0.25)'
      }
    },
  },
  plugins: [],
}
