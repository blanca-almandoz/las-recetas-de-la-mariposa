import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const sectionItem = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  ':hover': {
    cursor: 'pointer',
  },
})

export const sectionsContainer = style({
  display: 'flex',
  gap: 32,
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
  marginTop: 4,
})

export const sectionIlustration = style({
  border: `1px solid ${vars.color.primary.dark}`,
  borderRadius: '50%',
  height: 80,
  width: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
