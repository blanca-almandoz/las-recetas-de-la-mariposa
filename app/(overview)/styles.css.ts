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
  padding: 40,
  gap: 32,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const headerMobile = style({
  paddingTop: 64,
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
  gap: 16,
  padding: 16,
})
