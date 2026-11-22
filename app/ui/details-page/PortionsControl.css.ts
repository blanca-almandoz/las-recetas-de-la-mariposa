import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const portionsControl = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  alignSelf: 'flex-start',
  padding: '6px 6px 6px 14px',
  borderRadius: 999,
  backgroundColor: vars.color.primary.light,
})

export const portionsLabel = style({
  fontSize: 14,
  fontWeight: 600,
  color: vars.color.body,
})

export const optionGroup = style({
  display: 'flex',
  gap: 4,
})

export const optionButton = style({
  minWidth: 36,
  height: 32,
  padding: '0 10px',
  borderRadius: 999,
  border: `1px solid ${vars.color.primary.dark}`,
  backgroundColor: 'transparent',
  color: vars.color.primary.dark,
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.primary.dark,
      color: vars.color.primary.light,
    },
    '&[aria-checked="true"]': {
      backgroundColor: vars.color.primary.dark,
      color: vars.color.primary.light,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.primary.dark}`,
      outlineOffset: 2,
    },
  },
})
