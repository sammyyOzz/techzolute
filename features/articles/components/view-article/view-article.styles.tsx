import styled from "styled-components";
import { color } from "@styles/theme.styles";

export const Root = styled.div`
  h1 {
    color: ${color("text", "main")};
  }

  & img {
    width: 100% !important;
    height: auto !important;
    object-fit: cover !important;
  }
`;
