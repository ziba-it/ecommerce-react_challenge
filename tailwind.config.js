/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    50: "#FCFCFC",
    100: "#E7E8EB",
    200: "#CDCED4",
    300: "#ABAEB7",
    400: "#90949F",
    500: "#757A88",
    600: "#5A5F70",
    700: "#3F4559",
    800: "#353A4B",
    900: "#1C202E",
    1000: "#2C2C2C",
  },
  complementary: {
    600: "#EA580C",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: colors.primary,
        complementary: colors.complementary,
      },
    },
  },
  plugins: [],
};
