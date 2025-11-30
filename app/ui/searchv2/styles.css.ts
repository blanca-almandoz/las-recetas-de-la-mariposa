import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const searchContainer = style({
  display: 'flex',
  height: 64,
  padding: 8,
  gap: 16,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.utility[100]}`,
  borderRadius: 8,
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 639px)': {
      margin: '0 16px',
    },
  },
})

export const searchInput = style({
  flexGrow: 1,
  height: 48,
  outline: 'none',
})
