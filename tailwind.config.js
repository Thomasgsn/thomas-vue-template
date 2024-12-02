/** @type {import('tailwindcss').Config} */
export default {
  purge: [".index/html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        "dark-background": "#18181b",
        "light-background": "#f1f5f9",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
