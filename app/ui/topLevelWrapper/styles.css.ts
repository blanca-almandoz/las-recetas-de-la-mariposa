import { style } from '@vanilla-extract/css'

export const wrapperStyled = style({
  maxWidth: 1290,
  margin: '0 auto',
  paddingTop: 64,
})

export const wrapperContent = style({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  '@media': {
    'screen and (max-width: 1290px)': {
      justifyContent: 'center',
    },
  },
})
