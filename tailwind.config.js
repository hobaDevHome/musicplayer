const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        madimi: ['"Madimi One"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        show: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1 },
        },
        hide: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateX(-70px)" },
        },
      },
      animation: {
        show: "show 300ms ease-in-out",
        hide: "hide 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
