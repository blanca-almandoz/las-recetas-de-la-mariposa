import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const cardWrapper = style({
  position: 'relative',
  height: 332,
  borderRadius: 14,
  overflow: 'hidden',
  boxShadow: '0 10px 30px -18px rgba(41, 45, 68, .45)',
  transition: 'transform .18s, box-shadow .18s',
  '@media': {
    'screen and (max-width: 639px)': {
      height: 242,
    },
  },
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
      boxShadow: '0 16px 30px -18px rgba(41, 45, 68, .5)',
    },
  },
})

export const cardImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: vars.color.primary.light,
})

export const cardContent = style({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '0 14px 12px',
  zIndex: 2,
})

export const cardTitle = style({
  fontWeight: 700,
  letterSpacing: 0.5,
  fontSize: 20,
  lineHeight: 1.2,
  color: '#fff',
  textShadow: '0 1px 4px rgba(0, 0, 0, .45)',
  paddingBottom: 6,
  borderBottom: '1px solid rgba(255, 255, 255, .55)',
  '@media': {
    'screen and (max-width: 639px)': {
      fontSize: 16,
    },
  },
})

export const cardInfo = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 10,
  paddingTop: 8,
})

export const cardDot = style({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: '#fff',
  flexShrink: 0,
})

export const cardTimer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontWeight: 600,
  fontSize: 14,
  color: '#fff',
  textShadow: '0 1px 4px rgba(0, 0, 0, .45)',
})

export const cardDifficulty = style({
  fontWeight: 600,
  fontSize: 14,
  color: '#fff',
  textShadow: '0 1px 4px rgba(0, 0, 0, .45)',
})

export const stylesTitle = style({
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: 0.2,
  color: vars.color.body,
  margin: '0 0 8px',
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
