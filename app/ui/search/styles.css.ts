import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const searchWrapper = style({
  width: '100%',
  height: 64,
  display: 'flex',
  justifyContent: 'center',
})

export const searchComponent = style({
  display: 'inline-block',
  position: 'relative',
  width: '100%',
})

export const searchInput = style({
  height: '100%',
  padding: '8px 12px',
  width: '100%',
  backgroundColor: 'transparent',
  color: vars.color.body,
  ':focus': {
    outline: 'none',
    boxShadow: 'none',
  },
})

export const searchCloseButton = style({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
})
