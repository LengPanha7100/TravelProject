/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rd': '0px 2px 4px -2px rgba(0, 0, 0, 1)',
      }
    }
  },
  plugins: [],
}

