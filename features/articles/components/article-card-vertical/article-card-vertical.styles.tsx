import styled from "styled-components";

export const Root = styled.div`
  cursor: pointer;
  min-width: 230px;
  /* max-width: 600px; */

  /* &:first-of-type > img {
        border-radius: 20px 0 0 20px;
    } */
`;

export const Image = styled.img`
  /* height: 100px; */
  width: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  box-sizing: border-box;
  padding: 10px;

  & > .title {
    font-weight: bold;
    margin-bottom: 7px;
  }

  & > .date-and-author {
    color: #8a8a8b;
    font-size: 13px;
  }
`;
