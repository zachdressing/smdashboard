/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      'main': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'lightBG1': 'hsl(225, 100%, 98%)',
        'darkBG1': 'hsl(230, 17%, 14%)',
        'darkBG2': 'hsl(232, 19%, 15%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'youtube': ' hsl(348, 97%, 39%)',
        'insta1': 'hsl(37, 97%, 70%)',
        'insta2': 'hsl(329, 70%, 58%)',
        'cardBG': 'hsl(227, 47%, 96%)',
        'cardText': 'hsl(228, 12%, 44%)',
        'cardText2': 'hsl(230, 17%, 14%)',
        'darkCardBG': 'hsl(228, 28%, 20%)',
        'darkCardText': 'hsl(228, 34%, 66%)',
        'green': 'hsl(163, 72%, 41%)',
        'red': 'hsl(356, 69%, 56%)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

