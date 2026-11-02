import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  paddingTop: 30,
  paddingLeft: 16,
  paddingRight: 16,
})

export const bfly = style({
  display: 'block',
  width: 52,
  height: 52,
})

export const wordmark = style({
  position: 'relative',
  width: 280,
  height: 18,
  maxWidth: '78%',
  '@media': {
    'screen and (min-width: 768px)': {
      width: 340,
      height: 22,
    },
  },
})

export const searchBar = style({
  marginTop: 16,
  width: '100%',
  maxWidth: 360,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.utility[200]}`,
  borderRadius: 14,
  padding: '12px 14px',
  boxShadow: '0 8px 22px -16px rgba(41, 45, 68, .4)',
})

export const searchInput = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: 14,
  color: vars.color.body,
  backgroundColor: 'transparent',
})
