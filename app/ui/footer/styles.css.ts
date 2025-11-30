import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const footerWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: vars.color.primary.light,
  height: 64,
  marginTop: 1,
  paddingLeft: 16,
  '@media': {
    'screen and (min-width: 1400px)': {
      padding: 0,
    },
  },
})

export const footerContent = style({
  width: 1290,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  '@media': {
    'screen and (max-width: 887px)': {
      justifyContent: 'center',
    },
  },
})
