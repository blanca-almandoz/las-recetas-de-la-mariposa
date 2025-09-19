import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const cardWrapper = style({
  backgroundColor: vars.color.white,
  borderRadius: 4,
  boxShadow: '8px 8px 90px 1px #edededff',
  display: 'flex',
  flexDirection: 'column',
})

export const cardImage = style({
  borderRadius: '4px 4px 0px 0px',
  width: '100%',
  height: '200px',
  position: 'relative',
  overflow: 'hidden',
})

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  marginBottom: 24,
})

export const cardTitle = style({
  fontWeight: 700,
  letterSpacing: 2,
  minHeight: 48,
  marginBottom: 8,
})

export const cardInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const cardTimer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 500,
})
