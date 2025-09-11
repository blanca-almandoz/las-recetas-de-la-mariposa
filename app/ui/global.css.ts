import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

globalStyle('body', {
  fontFamily: vars.fonts.primary,
  WebkitFontSmoothing: 'antialiased',
  color: vars.color.body,
  backgroundColor: vars.color.utility[100],
  margin: 0,
  padding: 0,
})
