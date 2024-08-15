import { style } from '@vanilla-extract/css'

export const searchWrapper = style({
  marginTop: 32,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const searchComponent = style({
  display: 'inline-block',
  position: 'relative',
  '@media': {
    'screen and (max-width: 887px)': {
      width: '100%',
    },
  },
})

export const searchInput = style({
  padding: '8px 12px',
  borderRadius: 4,
  width: 700,
  backgroundColor: '#F5F5F5',
  '@media': {
    'screen and (max-width: 887px)': {
      width: '100%',
    },
  },
})

export const searchCloseButton = style({
  position: 'absolute',
  right: 10,
  fontSize: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
})
