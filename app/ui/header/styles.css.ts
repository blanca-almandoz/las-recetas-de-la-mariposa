import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const bar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  padding: '22px 16px 16px',
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.utility[200]}`,
})

export const brand = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  textDecoration: 'none',
})

export const bfly = style({
  display: 'block',
  width: 40,
  height: 40,
})

export const wordmark = style({
  position: 'relative',
  display: 'block',
  width: 240,
  height: 15,
  maxWidth: '78%',
  '@media': {
    'screen and (min-width: 768px)': {
      width: 340,
      height: 21,
    },
  },
})

export const catNav = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: 6,
  columnGap: 24,
  marginTop: 8,
  maxWidth: 560,
})

export const catItem = style({
  color: vars.color.body,
  fontWeight: 500,
  fontSize: 13.5,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  paddingBottom: 3,
  borderBottom: '2px solid transparent',
  transition: 'color .15s, border-color .15s',
  selectors: {
    '&:hover': {
      color: vars.color.primary.dark,
      borderBottomColor: vars.color.primary.light,
    },
  },
})

export const catItemActive = style({
  color: vars.color.primary.dark,
  fontWeight: 600,
  borderBottomColor: vars.color.primary.dark,
})

export const searchBar = style({
  marginTop: 4,
  width: '100%',
  maxWidth: 520,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.utility[200]}`,
  borderRadius: 14,
  padding: '11px 14px',
  boxShadow: '0 6px 18px -14px rgba(41, 45, 68, .4)',
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
