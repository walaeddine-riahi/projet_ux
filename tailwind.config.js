/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-red': '#A50B0B',
        'light-pink': '#FFEEEE',
        'light-gray': '#FFFBFB',
        'border-gray': '#DBCBCB',
        'text-gray': '#665C5C',
        'dark-gray': '#1F2937',
        'stroke-gray': '#767676',
        'line-gray': '#B4A9A9',
      },
      boxShadow: {
        'custom': '0px 10px 20px rgba(0, 0, 0, 0.2)',
        'light': '0px 0px 8px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
