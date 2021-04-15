module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#12a213",
          dark: "#0fa9e6",
          DEFAULT: "#456187",
        },
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};

// 2,87MB
