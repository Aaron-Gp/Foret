/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e732e',
        },
        secondary: {
          DEFAULT: '#6c0',
        },
      },
      backgroundPosition: {
        pos1: 'center top 0, center top 61px',
        pos2: 'center top -50px, center top 0',
      },
    },
  },
  plugins: [],
}

