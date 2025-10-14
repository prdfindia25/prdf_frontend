/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "prdf-green": "#025c20",
        "prdf-blue": "#4e9fe5",
        "prdf-red": "#d21651",
        "prdf-yellow": "#f9ce19",
        "prdf-dark-blue": "#11237c",
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
