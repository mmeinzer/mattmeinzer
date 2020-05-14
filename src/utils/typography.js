import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 1.6,
  includeNormalize: true,
  headerFontFamily: ['Nunito Sans', 'serif'],
  headerWeight: '400',
  headerColor: 'hsl(0, 0%, 20%)',
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyWeight: '400',
  bodyColor: 'hsl(0, 0%, 28%)',
  googleFonts: [
    {
      name: 'Nunito Sans',
      styles: ['400'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
})

export default typography
