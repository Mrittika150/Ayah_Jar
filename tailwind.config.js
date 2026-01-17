/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2C5F2D',
        'secondary': '#97BC62',
        'accent': '#F4A460',
        'dark': '#1A1A2E',
        'light': '#F8F9FA',
      },
      fontFamily: {
        'arabic': ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}