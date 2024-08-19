import { style } from '@vanilla-extract/css'

export const recipeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 24,
  padding: 24,
  boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  borderRadius: '0px 0px 4px 4px',
  '@media': {
    'screen and (max-width: 887px)': {
      padding: 0,
      paddingBottom: 24,
      borderRadius: 0,
    },
  },
})

export const recipeActions = style({
  display: 'flex',
  width: '100%',
  gap: 8,
})

export const recipeGoBackAction = style({
  color: '#A0846A',
  height: 24,
  width: '100%',
})

export const recipeTitle = style({
  fontSize: 40,
  fontWeight: 700,
  color: '#292D44',
  letterSpacing: 3,
  marginBottom: 24,
  '@media': {
    'screen and (max-width: 887px)': {
      padding: 8,
      marginBottom: 8,
    },
  },
})

export const recipeContent = style({
  display: 'flex',
  flexDirection: 'column',
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
  width: 590,
  height: 349,
  '@media': {
    'screen and (max-width: 639px)': {
      width: '100%',
      height: 229,
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
  gap: 16,
  marginTop: 48,
  '@media': {
    'screen and (max-width: 887px)': {
      marginLeft: 8,
      marginTop: 16,
    },
  },
})

export const iconAndLabelWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  '@media': {
    'screen and (max-width: 639px)': {
      justifyContent: 'center',
      paddingRight: 8,
      gap: 4,
    },
  },
})

export const recipeContentTextHeaders = style({
  display: 'flex',
  gap: 64,
  minWidth: 300,
  marginBottom: 16,
  '@media': {
    'screen and (max-width: 887px)': {
      marginLeft: 8,
      marginTop: 16,
      marginBottom: 24,
    },
  },
})
