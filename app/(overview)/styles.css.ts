import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const headerOuter = style({
  maxWidth: 1400,
  margin: '64px auto 64px',
  paddingLeft: 50,
  paddingRight: 50,
  '@media': {
    'screen and (max-width: 887px)': {
      display: 'none',
    },
  },
})

export const header = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  borderRadius: 24,
  overflow: 'hidden',
  minHeight: 460,
})

export const headerImage = style({
  gridColumn: 'span 7',
  position: 'relative',
  height: '100%',
})

export const headerText = style({
  gridColumn: 'span 5',
  backgroundColor: vars.color.primary.light,
  padding: '56px 52px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: 15.5,
  lineHeight: 1.8,
  color: vars.color.body,
})

export const headerMobile = style({
  marginTop: 40,
  marginBottom: 40,
  paddingLeft: 16,
  paddingRight: 16,
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
  gap: 20,
  backgroundColor: vars.color.primary.light,
  borderRadius: 20,
  padding: 24,
})

export const mobileImage = style({
  borderRadius: 16,
  overflow: 'hidden',
  lineHeight: 0,
})

export const mobileText = style({
  fontSize: 15,
  lineHeight: 1.75,
  color: vars.color.body,
})
