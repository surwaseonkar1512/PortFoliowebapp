/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Permanent Marker', 'cursive'],
        base2:['Yeseva One', 'cursive'],
        base3:['Lobster', 'cursive'],
        base4:['Roboto', 'sans-serif']
      },
      backgroundImage: {
        bg1:"url('https://img.freepik.com/free-vector/couple-chatting-dating-website_74855-7098.jpg?w=996&t=st=1689915957~exp=1689916557~hmac=b82465163944b94febf21b89a4e582707a9b77e37e211f2578bc6ea971bbdca9')",
        bg2:"url('assets/1876.jpg')",
      }
    },
  },
  plugins: [],
}
