/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#0C2949',
        gradientEnd: '#051425',
      },
    },
  },
  plugins: [],
}