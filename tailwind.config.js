const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif", "system-ui"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#f83157",
      secondary: "#3ba8d7",
      tertiary: "#fafafa",
      quaternary: "#374151",
      quinary: "#0b0c10",
      success: "#22bb33",
      warning: "#ffc107",
      danger: "#dc3545",
      muted: "#6c757d",
      hover: "rgba(255, 255, 255, 0.1)",
      black: colors.black,
      silver: "#c8c8c8",
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    zIndex: {
      neg50: -50,
      neg40: -40,
      neg30: -30,
      neg20: -20,
      neg10: -10,
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      100: 100,
      auto: "auto",
    },

    extend: {
      animation: {
        flash: "flash 0.5s linear 3 forwards 0.5s",
        borderFlash: "borderFlash 0.5s linear 3 forwards 0.5s",
      },
      keyframes: {
        flash: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        borderFlash: {
          "0%, 49%, 100%": { borderColor: "silver" },
          "50%, 99%": { borderColor: "transparent" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
