import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  gap: 40,
  flexDirection: 'column',
  justifyContent: ' center',
  color: 'rgba(31, 41, 55)',
  fontSize: 32,
  fontWeight: 800,
  minWidth: '100%',
  minHeight: '100vh',
  backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('/images/cocina-desktop.jpg')`,
  '@media': {
    'screen and (max-width: 887px)': {
      backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url('/images/cocina-mobile.jpg')`,
    },
  },
  backgroundSize: 'cover',
})
