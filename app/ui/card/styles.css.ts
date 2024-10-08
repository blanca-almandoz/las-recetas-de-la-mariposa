import { style } from '@vanilla-extract/css'

export const cardWrapper = style({
  width: 330,
  minHeight: 330,
  backgroundColor: '#EFEAE6',
  borderRadius: 4,
  margin: 16,
  boxShadow: '8px 8px 90px 1px #A6A6A6',
  '@media': {
    'screen and (min-width: 768px)': {
      width: 387,
    },
  },
})

export const cardImage = style({
  borderRadius: '4px 4px 0px 0px',
  width: '100%',
  height: 229,
})

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 16,
  minHeight: 101,
})

export const cardTitle = style({
  fontWeight: 700,
  color: '#292D44',
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
