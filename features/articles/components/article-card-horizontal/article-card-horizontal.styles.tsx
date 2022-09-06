import styled from "styled-components";

export const Root = styled.div<any>`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    flex-direction: ${(p) => (p.large ? "column" : "row")};
  }
`;

export const Image = styled.img<{ large?: boolean }>`
  width: ${(p) => (p.large ? "290px" : "120px")};
  height: ${(p) => (p.large ? "190px" : "90px")};
  object-fit: cover;
  margin-right: 20px;

  @media only screen and (max-width: 600px) {
    width: ${(p) => p.large && "100%"};
    margin: ${(p) => p.large && "0 0 30px 0"};
    height: ${(p) => p.large && "auto"};
    max-height: ${(p) => p.large && "250px"};
  }
`;

export const Body = styled.div`
  & > .title {
    font-weight: bold;
    margin-bottom: 7px;
  }

  & > .excerpt {
    font-size: 15px;
    color: #c7c2c2;
    margin-bottom: 7px;
  }

  & > .date-and-author {
    color: #8a8a8b;
    font-size: 13px;
  }
`;
