import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const recipeWrapper = style({
  display: 'grid',
  gridTemplateColumns: '3fr 4fr',
  width: '100%',
  paddingBottom: 24,
  marginTop: 32,
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
})

export const recipeWrapperMobile = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 24,
  marginTop: 16,
  gap: 16,
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})

export const leftColumn = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: 16,
})
export const rightColumn = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: 32,
})

export const recipeTitle = style({
  fontSize: 40,
  fontWeight: 700,
  color: vars.color.body,
  letterSpacing: 3,
  '@media': {
    'screen and (max-width: 887px)': {
      fontSize: 28,
      marginLeft: 8,
    },
  },
})

export const recipeContentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 8,
  '@media': {
    'screen and (max-width: 639px)': {
      flexDirection: 'column-reverse',
      marginBottom: 0,
    },
  },
})

export const recipeContentText = style({
  flexBasis: '50%',
  paddingRight: 8,
  '@media': {
    'screen and (max-width: 639px)': {
      paddingRight: 0,
    },
  },
})

export const recipeContentImage = style({
  height: 349,
  '@media': {
    'screen and (max-width: 639px)': {
      width: '100%',
      height: 229,
    },
  },
})

export const recipeWrapperImage = style({
  display: 'flex',
  flexDirection: 'column',
  fontStyle: 'italic',
  width: '100%',
})

export const recipeCommentImage = style({
  backgroundColor: vars.color.primary.light,
  borderBottom: `1px solid ${vars.color.utility[300]}`,
  '@media': {
    'screen and (min-width: 768px)': {
      backgroundColor: 'transparent',
      borderBottom: 'none',
    },
  },
})

export const recipeImage = style({
  width: '100%',
  height: '100%',
  borderRadius: 4,
  objectFit: 'cover',
  '@media': {
    'screen and (max-width: 887px)': {
      borderRadius: 0,
    },
  },
})

export const listedSteps = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
  marginRight: 16,
  '@media': {
    'screen and (max-width: 887px)': {
      marginLeft: 8,
      marginRight: 8,
    },
  },
})

export const infoContent = style({
  display: 'flex',
  gap: 8,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '8px 0',
      gap: 0,
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  backgroundColor: vars.color.primary.light,
  width: 330,
  padding: 32,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      padding: '0 8px',
      gap: 0,
      alignItems: 'center',
    },
  },
})

export const infoText = style({
  fontWeight: 500,
  '@media': {
    'screen and (max-width: 887px)': {
      fontSize: 14,
      textAlign: 'center',
    },
  },
})
