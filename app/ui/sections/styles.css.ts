import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const sectionsContainer = style({
  display: 'flex',
  gap: 14,
  paddingTop: 4,
  paddingBottom: 8,
  '@media': {
    'screen and (max-width: 887px)': {
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      paddingLeft: 16,
      paddingRight: 16,
      gap: 12,
    },
  },
})

export const sectionItem = style({
  flex: '0 0 auto',
  width: 96,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  padding: '12px 8px 10px',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.utility[200]}`,
  borderRadius: 16,
  boxShadow: '0 10px 26px -18px rgba(41, 45, 68, .4)',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform .18s, box-shadow .18s',
  selectors: {
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 16px 30px -18px rgba(41, 45, 68, .5)',
    },
  },
})

export const sectionIlustration = style({
  width: 62,
  height: 62,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const sectionTitle = style({
  fontSize: 12,
  fontWeight: 600,
  color: vars.color.body,
  textAlign: 'center',
  lineHeight: 1.15,
})
