/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors:{
        primary: "#C1DCDC",
        secondary: "rgba(30, 30, 30, 0.50)",
      }
    },
  },
  plugins: [],
}
