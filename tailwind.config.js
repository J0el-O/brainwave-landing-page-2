/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        dmsans:["DM Sans"]
      },
      screens: {
        'widescreen':{ 'raw': '(min-aspect-ratio: 3/2)'}, 
        'tallscreen':{ 'raw': '(min-aspect-ratio: 1/2)'}, 
      } 
    },
  },
  plugins: [],
}

