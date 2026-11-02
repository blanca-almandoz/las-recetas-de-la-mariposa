import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 12,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
    },
  },
})

export const tile = style({
  position: 'relative',
  display: 'block',
  borderRadius: 16,
  overflow: 'hidden',
  aspectRatio: '16 / 10',
  textDecoration: 'none',
  transition: 'transform .18s, box-shadow .18s',
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(180deg, rgba(41, 45, 68, 0) 35%, rgba(41, 45, 68, .72))',
    },
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 14px 30px -18px rgba(41, 45, 68, .5)',
    },
  },
})

export const tileImg = style({
  position: 'absolute',
  inset: 0,
})

export const tileLabel = style({
  position: 'absolute',
  left: 12,
  bottom: 10,
  zIndex: 2,
  maxWidth: '85%',
  color: vars.color.white,
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1.15,
  letterSpacing: 0.3,
})
