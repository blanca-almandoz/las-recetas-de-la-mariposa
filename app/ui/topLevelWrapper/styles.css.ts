import { style } from '@vanilla-extract/css'

export const wrapperStyled = style({
  maxWidth: 1400,
  margin: '0 auto',
  paddingTop: 64,
  paddingRight: 50,
  paddingLeft: 50,
  '@media': {
    'screen and (max-width: 639px)': {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
})

export const wrapperContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
  gap: 16,
  width: '100%',
  '@media': {
    'screen and (max-width: 1290px)': {
      justifyContent: 'center',
    },
  },
})
