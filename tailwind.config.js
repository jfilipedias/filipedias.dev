/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,md}",
    "./layouts/**/*.html",
    "./assets/css/*.css",
  ],
  plugins: [require("@tailwindcss/typography")],
};
