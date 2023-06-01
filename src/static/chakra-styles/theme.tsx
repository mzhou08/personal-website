import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Palatino', serif`,
    body: `'Palatino', serif`,
  },
  colors: {
    gray: {
        dark: '#373737',
    }
  },
  fontSizes: {
    h1: '64px',
    h2: '40px',
    paragraph: '32px',
  },
})

export default theme