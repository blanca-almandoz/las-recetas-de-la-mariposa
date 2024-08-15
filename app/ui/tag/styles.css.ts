import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const tagWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 30,
  borderRadius: 10,
  padding: '4px 8px',
  fontSize: 14,
  fontWeight: 500,
  color: vars.color.white,
})
