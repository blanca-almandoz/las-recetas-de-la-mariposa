import { style } from '@vanilla-extract/css'

export const searchWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: 32,
})

export const searchInput = style({
  padding: '8px 12px',
  borderRadius: 4,
  width: 700,
  backgroundColor: '#F5F5F5',
  '@media': {
    'screen and (max-width: 887px)': {
      width: '100%',
      margin: '0px 24px',
    },
  },
})
