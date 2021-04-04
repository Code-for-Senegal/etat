module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#59F368',
      secondary: '#FEC821',
      gray: {
        darkest: '#131313',
        dark: '#212121',
        white: '#F9F9F9',
        light: '#808080',
        lightest: '#BCBCBC',
      }
    },
    backgroundColor: theme => ({
      'black': '#0D0D0D',
      'darkest': '#131313',
      'lightest': '#BCBCBC',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
