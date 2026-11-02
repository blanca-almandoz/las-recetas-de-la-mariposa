import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

// Bloque de color neutro para imágenes, iconos y áreas grandes
export const skeletonBlock = style({
  backgroundColor: vars.color.utility[200],
  borderRadius: 4,
})

// Línea de texto. El ancho y el alto se pasan en cada uso.
export const skeletonLine = style({
  backgroundColor: vars.color.utility[200],
  borderRadius: 4,
  height: 12,
  marginBottom: 8,
})
