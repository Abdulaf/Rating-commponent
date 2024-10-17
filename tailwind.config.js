module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "100px",
      md: "354px",
      lg: "1020px",
      xl: "1440px",
      xsm: "552px",
      mobile: "410px",
    },
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "#262E38",
        "medium-blue": "#181E27",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
