import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 40,
})

export const wrapper = style({
  position: 'relative',
  height: 200,
  width: 500,
  marginBottom: -100,
})
