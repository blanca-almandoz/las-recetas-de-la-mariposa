import { createTheme, createGlobalTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    white: '#fff',
    primary: {
      light: '#D0DCD2',
      dark: '#6F8F72',
    },
    body: '#292D44',
    utility: {
      500: '#7F818F',
      400: '#A9ABB5',
      300: '#E0E0E0',
      200: '#EAEAEA',
      100: '#FAFAFA',
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
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
})

// TODO - now it is unused
createGlobalTheme(':root', {
  fontFamily: vars.fonts.primary,
  WebkitFontSmoothing: 'antialiased',
})
