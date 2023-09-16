/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope']
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

