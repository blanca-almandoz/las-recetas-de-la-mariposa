import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

const mobilePad = {
  '@media': {
    'screen and (max-width: 639px)': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
} as const

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  paddingTop: 8,
  ...mobilePad,
})

export const backBtn = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
})

export const title = style({
  fontSize: 26,
  fontWeight: 600,
  letterSpacing: 0.3,
  color: vars.color.body,
  margin: 0,
  '@media': {
    'screen and (max-width: 639px)': {
      fontSize: 22,
    },
  },
})

export const stage = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(300px, 420px) 1fr',
  gap: 40,
  marginTop: 24,
  '@media': {
    'screen and (max-width: 860px)': {
      gridTemplateColumns: '1fr',
      gap: 20,
    },
    'screen and (max-width: 639px)': {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
})

export const figure = style({
  position: 'sticky',
  top: 24,
  alignSelf: 'start',
  '@media': {
    'screen and (max-width: 860px)': {
      position: 'static',
    },
  },
})

export const figureImg = style({
  position: 'relative',
  background: vars.color.primary.light,
  borderRadius: 24,
  aspectRatio: '1 / 0.92',
  '@media': {
    'screen and (max-width: 860px)': {
      aspectRatio: '16 / 11',
      maxWidth: 460,
      margin: '0 auto',
    },
  },
})

export const figureCanvas = style({
  position: 'absolute',
  inset: 24,
})

export const figureHint = style({
  fontSize: 12,
  color: vars.color.utility[500],
  textAlign: 'center',
  margin: '12px 4px 0',
  fontStyle: 'italic',
})

export const marker = style({
  position: 'absolute',
  width: 30,
  height: 30,
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  border: `2px solid ${vars.color.white}`,
  background: vars.color.primary.dark,
  color: vars.color.white,
  fontFamily: 'inherit',
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1,
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 10px -2px rgba(41, 45, 68, .5)',
  transition: 'transform .18s, background .18s',
  selectors: {
    '&:hover': {
      background: '#A78D76',
      transform: 'translate(-50%, -50%) scale(1.18)',
    },
  },
})

export const markerHot = style({
  background: '#A78D76',
  transform: 'translate(-50%, -50%) scale(1.18)',
})

export const content = style({})

export const intro = style({
  fontSize: 15.5,
  lineHeight: 1.6,
  color: '#2F3441',
  margin: '0 0 24px',
  maxWidth: '62ch',
})

export const cuts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
})

export const cut = style({
  background: vars.color.white,
  border: `1px solid ${vars.color.utility[200]}`,
  borderRadius: 16,
  padding: '18px 20px',
  outline: 'none',
  transition: 'transform .18s, box-shadow .18s, border-color .18s',
  selectors: {
    '&:hover': {
      borderColor: vars.color.primary.dark,
      boxShadow: '0 14px 30px -18px rgba(41, 45, 68, .45)',
      transform: 'translateY(-2px)',
    },
  },
})

export const cutHot = style({
  borderColor: vars.color.primary.dark,
  boxShadow: '0 14px 30px -18px rgba(41, 45, 68, .45)',
  transform: 'translateY(-2px)',
})

export const cutHead = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
})

export const badge = style({
  flex: '0 0 auto',
  width: 28,
  height: 28,
  borderRadius: '50%',
  background: vars.color.primary.dark,
  color: vars.color.white,
  fontWeight: 700,
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const badgeNone = style({
  background: vars.color.utility[200],
  color: vars.color.utility[500],
})

export const cutTitle = style({
  fontSize: 17,
  fontWeight: 600,
  lineHeight: 1.2,
  margin: 0,
  color: '#1F2430',
})

export const chips = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 7,
  margin: '12px 0 0',
  paddingLeft: 40,
  '@media': {
    'screen and (max-width: 639px)': { paddingLeft: 0 },
  },
})

export const chip = style({
  fontSize: 12,
  fontWeight: 600,
  color: vars.color.primary.dark,
  background: vars.color.primary.light,
  borderRadius: 999,
  padding: '4px 11px',
})

export const chipPrice = style({
  background: '#EFE7DD',
  color: '#8A6F55',
})

export const lead = style({
  fontSize: 14.5,
  lineHeight: 1.55,
  color: '#2F3441',
  margin: '12px 0 0',
  paddingLeft: 40,
  '@media': {
    'screen and (max-width: 639px)': { paddingLeft: 0 },
  },
})

export const bullets = style({
  margin: '10px 0 0',
  padding: '0 0 0 40px',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 7,
  '@media': {
    'screen and (max-width: 639px)': { paddingLeft: 0 },
  },
})

export const bulletItem = style({
  position: 'relative',
  paddingLeft: 18,
  fontSize: 14,
  lineHeight: 1.5,
  color: '#2F3441',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 2,
      top: 9,
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: vars.color.primary.dark,
    },
  },
})
