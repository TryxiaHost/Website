/** @type {import('tailwindcss').Config} */
// npm install -D tailwindcss
// npx tailwindcss init
// npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
module.exports = {
  content: [
    "./*.{html,js}",
    "./js/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dcccff",
          200: "#ba99ff",
          300: "#9766ff",
          400: "#7533ff",
          500: "#5200ff",
          600: "#4200cc",
          700: "#310099",
          800: "#210066",
          900: "#100033"
},
      }
    },
  },
  plugins: [],
}

