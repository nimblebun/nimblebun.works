module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    // './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
      display: ["Pangolin", "cursive"],
    },

    colors: {
      transparent: "transparent",

      "nbw-primary": {
        DEFAULT: "#0b0a0a",
      },

      "nbw-primary-invert": {
        DEFAULT: "#fff",
        faint: "#898989",
      },

      "nbw-gray": {
        DEFAULT: "#898989",
      },
    },

    container: {
      center: true,
    },

    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
