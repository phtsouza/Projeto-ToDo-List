import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 1.5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .button-add {
    transition:filter .2s ;
    :hover {
      cursor: pointer;
      filter: brightness(0.5);
    }
  }
`;

export const Title = styled.h1`
  color: var(--text-title);
`;