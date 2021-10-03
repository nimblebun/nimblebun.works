module.exports = {
  mode: 'jit',

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: [ 'Montserrat', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif' ],
      display: [ 'Pangolin', 'cursive' ],
    },

    colors: {
      transparent: 'transparent',

      'nbw-primary': {
        DEFAULT: '#000'
      },

      'nbw-primary-invert': {
        DEFAULT: '#fff',
        faint: '#979797',
      },

      'nbw-gray': {
        DEFAULT: '#bebebe',
      },
    },

    container: {
      center: true
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
  },
};
