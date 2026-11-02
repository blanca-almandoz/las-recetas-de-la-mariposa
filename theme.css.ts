import { createTheme } from '@vanilla-extract/css'

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
