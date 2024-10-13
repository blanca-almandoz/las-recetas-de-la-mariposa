import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'fixed',
  alignItems: 'center',
  zIndex: 2,
  backgroundColor: vars.color.white,
  boxShadow: '0px 6px 9.9px -3px rgba(42,32,32,0.09)',
})

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 64,
  paddingLeft: 8,
  paddingRight: 8,
  '@media': {
    'screen and (min-width: 887px)': {
      maxWidth: 1200,
      padding: 0,
    },
    'screen and (min-width: 887px) and (max-width: 1200px)': {
      paddingRight: 16,
      paddingLeft: 16,
    },
  },
})

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const menuMobile = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 887px)': {
      display: 'block',
    },
  },
})
export const logo = style({})

export const contentItems = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

export const contentItemsLinksContainer = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: 16,
  '@media': {
    'screen and (max-width: 887px)': {
      display: 'none',
    },
  },
})

export const navbarItem = style({
  color: vars.color.primary.dark,
  fontWeight: 500,
  padding: '8px 10px',
  ':hover': {
    backgroundColor: vars.color.primary.light,
    borderRadius: 4,
  },
})

export const navBarItemSelected = style({
  borderRadius: 4,
  backgroundColor: vars.color.primary.dark,
  color: vars.color.white,
})

export const navBarItemMobile = style({
  display: 'block',
  fontWeight: 500,
  padding: '8px 12px',
})

export const navBarIcon = style({
  padding: 8,
  ':hover': {
    backgroundColor: vars.color.primary.light,
    borderRadius: 4,
  },
})
