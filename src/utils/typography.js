import Typography from 'typography';

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ['Crete Round', 'serif'],
  headerWeight: '400',
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Crete Round',
      styles: [
        '400',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '400',
      ],
    },
  ],
});

export default typography;