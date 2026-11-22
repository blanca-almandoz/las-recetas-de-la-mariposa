import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const backButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  padding: 4,
  marginLeft: -4,
  marginBottom: 4,
  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: 8,
    },
  },
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.primary.dark,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.primary.dark}`,
      outlineOffset: 2,
      borderRadius: 4,
    },
  },
})
