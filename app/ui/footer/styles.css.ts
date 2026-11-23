import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const footerWrapper = style({
  backgroundColor: vars.color.primary.light,
  color: vars.color.body,
  padding: '56px 64px',
  boxSizing: 'border-box',
  '@media': {
    'screen and (max-width: 639px)': {
      padding: '32px 24px',
    },
  },
})

export const footerContent = style({
  maxWidth: 1290,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
})

export const footerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 48,
  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
    },
  },
})

export const brandCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  maxWidth: 420,
})

export const brandRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  minWidth: 0,
})

export const brandWordmark = style({
  width: 340,
  maxWidth: '100%',
  height: 'auto',
  flexShrink: 1,
  minWidth: 0,
  '@media': {
    'screen and (max-width: 639px)': {
      width: 240,
    },
  },
})

export const brandText = style({
  margin: 0,
  fontSize: 16,
  lineHeight: 1.75,
})

export const navRow = style({
  display: 'flex',
  gap: 96,
  '@media': {
    'screen and (max-width: 639px)': {
      gap: 48,
    },
  },
})

export const navCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const navTitle = style({
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 1,
  textTransform: 'uppercase',
})

export const navLink = style({
  fontSize: 16,
  color: 'inherit',
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },
})

export const bottomRow = style({
  borderTop: '1px solid rgba(41, 45, 68, .25)',
  paddingTop: 20,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 16,
  fontSize: 14,
})
