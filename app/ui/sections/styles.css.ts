import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const sectionItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
  textDecoration: 'none',
  cursor: 'pointer',
})

export const sectionsContainer = style({
  display: 'flex',
  gap: 32,
  paddingTop: 4,
  paddingBottom: 8,
  '@media': {
    'screen and (max-width: 887px)': {
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      paddingLeft: 16,
      paddingRight: 16,
      gap: 16,
    },
  },
})

export const sectionTitle = style({
  fontSize: 14,
  fontWeight: 500,
  color: vars.color.primary.dark,
  textAlign: 'center',
  marginTop: 8,
})

export const sectionIlustration = style({
  border: `1px solid ${vars.color.primary.dark}`,
  borderRadius: '50%',
  height: 80,
  width: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: vars.color.white,
  transition: 'transform .18s, box-shadow .18s, background .18s',
  selectors: {
    [`${sectionItem}:hover &`]: {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 22px -12px rgba(111, 143, 114, .6)',
      background: vars.color.primary.light,
    },
  },
})
