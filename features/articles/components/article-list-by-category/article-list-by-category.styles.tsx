import styled from "styled-components";

export const Title = styled.h2`
  & span {
    display: flex;
    align-items: center;
    cursor: pointer;
    /* background-color: red; */
  }
`;

export const VerticalCardsContainer = styled.div`
  padding: 0 80px 0 0;
  overflow-x: scroll;
  display: flex;
  gap: 15px;
  justify-content: space-between;

  /* hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 415px) {
    padding: 0 50px 0 50px;
  }
`;

export const ViewAll = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  width: 100px;
`;
