import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color, Theme } from "./theme.styles";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  body {
    font-family: Inter, Sans-Serif;
    color: ${color('text', 'main')};
    background-color: ${color('background', 'main')}
  }

  a {
    color: ${color('text', 'main')};
  }
`;
