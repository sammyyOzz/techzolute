import styled from "styled-components";
import { space, color, displayFont } from "@styles/theme.styles";

export const Root = styled.div`
  margin-top: ${space(12)};

  .paginate {
    display: flex;
    list-style-type: none;

    & > li {
      & > a {
        color: ${color("text", "main")};
        width: ${space(10)};
        border: 1px solid ${color("text", "main")};
        padding: ${space(2)};
        margin: ${space(3)};
        border-radius: 15px;
      }

      &.active > a {
        color: red;
        border-color: red;
      }
    }
  }
`;
