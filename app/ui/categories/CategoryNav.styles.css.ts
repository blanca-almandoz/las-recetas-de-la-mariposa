import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const strip = style({
  width: '100%',
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.utility[200]}`,
})

export const inner = style({
  maxWidth: 1400,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  padding: '9px 16px',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  '@media': {
    'screen and (max-width: 639px)': {
      justifyContent: 'flex-start',
      gap: 16,
    },
  },
})

export const item = style({
  flex: '0 0 auto',
  color: vars.color.body,
  fontWeight: 500,
  fontSize: 13,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'color .15s',
  selectors: {
    '&:hover': {
      color: vars.color.primary.dark,
    },
  },
})

export const itemActive = style({
  color: vars.color.primary.dark,
  fontWeight: 600,
})
