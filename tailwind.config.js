module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.tsx'],
  },
  theme: {
    textColor: {
      primary: '#32AFB2',
      white: '#ffffff',
      secondary: '#298f91',
      third: '#555E70',
    },
  },
  variants: {},
  plugins: [],
}
