// import '../styles/globals.css'
import { Layout } from "@features/ui/layout/layout.component";
import { store } from "@store/store";
import { GlobalStyle } from "@styles/global.styles";
import { darkTheme, lightTheme } from "@styles/theme.styles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
