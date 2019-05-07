import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: [
        '200',
        '400',
      ],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerWeight: '200',
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  // See below for the full list of options.
})

export default typography