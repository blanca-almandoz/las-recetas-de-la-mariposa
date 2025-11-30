import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 40,
})

export const wrapperDesktop = style({
  position: 'relative',
  height: 200,
  width: 500,
  marginBottom: -100,
  '@media': {
    'screen and (max-width: 887px)': {
      display: 'none',
    },
  },
})

export const wrapperMobile = style({
  position: 'relative',
  height: 100,
  width: 200,
  marginTop: 32,
  marginBottom: -60,
  '@media': {
    'screen and (min-width: 887px)': {
      display: 'none',
    },
  },
})
