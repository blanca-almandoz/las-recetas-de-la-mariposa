import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const recipeWrapper = style({
  display: 'grid',
  gridTemplateColumns: '3fr 4fr',
  gap: 40,
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
  gap: 24,
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
  gap: 24,
})
export const rightColumn = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: 24,
})

export const recipeTitle = style({
  fontSize: 30,
  fontWeight: 700,
  color: vars.color.body,
  letterSpacing: 1.5,
  lineHeight: 1.1,
  '@media': {
    'screen and (max-width: 887px)': {
      fontSize: 24,
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
  width: '100%',
})

export const recipeCommentImage = style({
  fontSize: 13,
  fontStyle: 'italic',
  color: vars.color.utility[500],
  marginTop: 8,
  '@media': {
    'screen and (max-width: 887px)': {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },
})

export const recipeImage = style({
  width: '100%',
  height: '100%',
  borderRadius: 14,
  objectFit: 'cover',
  '@media': {
    'screen and (max-width: 887px)': {
      borderRadius: 0,
    },
  },
})

/* ---- Listas de ingredientes y pasos ---- */
export const listGroups = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const groupTitle = style({
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 1,
  textTransform: 'uppercase',
  color: vars.color.primary.dark,
  margin: '0 0 12px',
  paddingBottom: 7,
  borderBottom: `1px solid ${vars.color.utility[200]}`,
})

export const bulletList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
})

export const bulletItem = style({
  position: 'relative',
  paddingLeft: 20,
  fontSize: 15,
  lineHeight: 1.5,
  color: vars.color.body,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 2,
      top: 8,
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: vars.color.primary.dark,
    },
  },
})

export const stepList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
})

export const stepItem = style({
  display: 'flex',
  gap: 12,
  alignItems: 'flex-start',
  fontSize: 15,
  lineHeight: 1.55,
  color: vars.color.body,
})

export const stepNum = style({
  flex: '0 0 auto',
  width: 26,
  height: 26,
  borderRadius: '50%',
  background: vars.color.primary.light,
  color: vars.color.primary.dark,
  fontWeight: 700,
  fontSize: 13,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 1,
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

/* ---- Caja de información ---- */
export const infoContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
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
  gap: 14,
  backgroundColor: vars.color.primary.light,
  borderRadius: 16,
  width: 330,
  padding: '22px 24px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      padding: '12px 8px',
      gap: 0,
      alignItems: 'center',
    },
  },
})

export const infoText = style({
  fontWeight: 600,
  '@media': {
    'screen and (max-width: 887px)': {
      fontSize: 14,
      textAlign: 'center',
    },
  },
})
