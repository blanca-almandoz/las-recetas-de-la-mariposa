import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const header = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  paddingTop: 64,
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
