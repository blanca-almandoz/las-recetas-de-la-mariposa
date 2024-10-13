import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  backgroundColor: vars.color.utility[200],
  height: 8,
  borderRadius: 4,
  marginBottom: 8,
})
