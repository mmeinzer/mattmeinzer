import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 1.6,
  includeNormalize: true,
  headerFontFamily: ['Roboto', 'sans-serif'],
  headerWeight: '500',
  headerColor: 'hsl(0, 0%, 20%)',
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyWeight: '400',
  bodyColor: 'hsl(0, 0%, 28%)',
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '500'],
    },
  ],
})

export default typography
