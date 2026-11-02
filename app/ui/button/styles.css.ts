import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: vars.color.primary.dark,
  height: 48,
  borderRadius: 8,
  padding: '0 16px',
  color: vars.color.white,
  '@media': {
    'screen and (max-width: 639px)': {
      display: 'none',
    },
  },
})
