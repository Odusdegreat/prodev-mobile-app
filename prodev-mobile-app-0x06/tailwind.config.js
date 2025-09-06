/** @type {import('tailwindcss').Config} */
import tailwindcss from "@tailwindcss/vite";
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss()],
};
