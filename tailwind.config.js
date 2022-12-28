/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.ejs",
  ],
  theme: {
    extend: {
      fontFamily: {

        vazir: ["Vazirmatn"]
      },

      colors:{
        gray:{
          150:'#f4f5f7',
          210:'#eceeef'
        }
      }
    }
  },
  plugins: [],
}
