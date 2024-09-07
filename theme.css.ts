import { createTheme, createGlobalTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'white',
    white: '#fff',
    primary: {
      light: '#D0DCD2',
    },
    starters: {
      dark: '#EED057',
      light: 'rgb(241, 227, 172, 0.5)',
    },
    main: {
      dark: '#93C9F2',
      light: 'rgb(188, 212, 230, 0.5)',
    },
    siders: {
      dark: '#618B4A',
      light: 'rgb(97, 139, 74, 0.2)',
    },
    desserts: {
      dark: '#F46036',
      light: 'rgb(244, 96, 54, 0.2)',
    },
  },
  space: {
    small: '4px',
    medium: '8px',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
  },
})

// TODO - now it is unused
createGlobalTheme(':root', {
  fontFamily: vars.fonts.primary,
  WebkitFontSmoothing: 'antialiased',
})
