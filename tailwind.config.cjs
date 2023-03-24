/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      segoe: ["Noto Sans", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        darkest: "#000000",
        darker: " #1B1B1B",
        dark: " #2E2E2E",
        primary: " #FCA311",
        info: "#F9AF13",
        secondary: "#FAFBBF",
        primaryGradient:
          "linear-gradient(180deg, #FCA311 0%, rgba(252, 163, 17, 0) 100%)",
      },
    },
  },
  plugins: [],
};
