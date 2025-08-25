/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        xss:"430px", // custom for <400
        smx: "500px", // custom for >=500
      },
    },
  },
  plugins: [],
}

