import { style } from '@vanilla-extract/css'

export const wrapperStyled = style({
  maxWidth: 1400,
  margin: '0 auto',
  paddingTop: 64,
  paddingRight: 50,
  paddingLeft: 50,
  '@media': {
    'screen and (max-width: 639px)': {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 24,
    },
  },
})

export const wrapperContent = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
  gap: 16,
  width: '100%',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const horizontalScroll = style({
  '@media': {
    'screen and (max-width: 1290px)': {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      padding: '0 8px 8px 8px',
    },
    'screen and (max-width: 639px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})

export const mobileSidePadding = style({
  '@media': {
    'screen and (max-width: 639px)': {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },
})

export const horizontalItem = style({
  flex: '0 0 270px',
})
