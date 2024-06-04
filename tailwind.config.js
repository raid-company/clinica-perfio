/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'mobile-1': '#999999',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}}