import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`,
  },
  colors: {
    gray: {
        dark: '#373737',
    }
  },
  fontSizes: {
    heading: '40px',
  },
})

export default theme