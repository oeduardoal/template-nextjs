import { globalCss } from 'stitches.config'

export const GlobalStyles = globalCss({
  body: {
    backgroundColor: '$black',
    color: '$white',
    fontFamily: 'Roboto',
    margin: 0,
  },

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  '::selection': {
    backgroundColor: 'Orange',
    color: '#FFFFFF',
  },
})
