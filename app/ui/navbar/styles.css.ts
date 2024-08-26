import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  width: '100%',
  position: 'fixed',
  zIndex: 2,
  justifyContent: 'center',
  backgroundColor: '#1F2937',
})

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 64,
  width: 1200,
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
  color: vars.color.white,
  fontWeight: 500,
  padding: '8px 10px',
  ':hover': {
    backgroundColor: '#49505c',
    borderRadius: 4,
  },
})

export const navBarItemSelected = style({
  borderRadius: 4,
  backgroundColor: '#111827',
})
