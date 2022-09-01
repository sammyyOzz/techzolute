// import '../styles/globals.css'
import { GlobalStyle } from '@styles/global.styles'
import { darkTheme, lightTheme } from '@styles/theme.styles'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
