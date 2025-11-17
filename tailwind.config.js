/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "prdf-primary": "#1E5631",
        "prdf-secondary": "#A4C639",
        "prdf-accent": "#E8B86D",
        // Supporting Colors
        "prdf-cta": "#3D7A57",
        "prdf-footer": "#2B3D2F",
        // Background & Surface
        "prdf-bg-light": "#F9F7F2",
        "prdf-surface": "#FFFFFF",
        // Text Colors
        "prdf-text-dark": "#2E2E2E",
        "prdf-text-muted": "#6E6E6E",
        // Legacy aliases for backward compatibility (will be removed gradually)
        "prdf-green": "#1E5631",
        "prdf-blue": "#3D7A57",
        "prdf-red": "#d21651",
        "prdf-yellow": "#E8B86D",
        "prdf-dark-blue": "#2B3D2F",
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
