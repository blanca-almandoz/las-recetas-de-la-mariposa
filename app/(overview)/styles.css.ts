import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const header = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  paddingTop: 64,
  '@media': {
    'screen and (max-width: 887px)': {
      display: 'none',
    },
  },
})

export const headerImage = style({
  gridColumn: 'span 7',
  position: 'relative',
  height: '100%',
  width: '100%',
})

export const headerText = style({
  gridColumn: 'span 5',
  backgroundColor: vars.color.primary.light,
  padding: '80px 60px',
})

export const headerMobile = style({
  marginTop: 48,
  padding: '24px 16px',
  backgroundColor: vars.color.primary.light,
  '@media': {
    'screen and (min-width: 887px)': {
      display: 'none',
    },
  },
})

export const contentMobile = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  padding: 16,
})
