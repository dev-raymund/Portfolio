/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rajdhani)", ...fontFamily.sans],
      },
      boxShadow: {
        'custom-1': '0 0 10px 0',
      },

    },
  },
  plugins: [],
}