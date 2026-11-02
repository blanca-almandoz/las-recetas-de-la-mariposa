import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const cardWrapper = style({
  backgroundColor: vars.color.white,
  borderRadius: 14,
  border: `1px solid ${vars.color.utility[200]}`,
  boxShadow: '0 10px 30px -18px rgba(41, 45, 68, .35)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform .2s, box-shadow .2s',
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 18px 38px -20px rgba(41, 45, 68, .45)',
    },
  },
})

export const cardImage = style({
  width: '100%',
  height: 200,
  position: 'relative',
  overflow: 'hidden',
})

export const stylesTitle = style({
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: 0.2,
  color: vars.color.body,
  margin: '0 0 20px',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  selectors: {
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 6,
      height: 20,
      borderRadius: 3,
      background: vars.color.primary.dark,
    },
  },
})

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 14,
})

export const cardTitle = style({
  fontWeight: 700,
  letterSpacing: 1,
  minHeight: 42,
  fontSize: 13.5,
  lineHeight: 1.35,
  color: vars.color.body,
})

export const cardInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const cardTimer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 500,
  fontSize: 14,
  color: vars.color.utility[500],
})
