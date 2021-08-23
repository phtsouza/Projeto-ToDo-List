import styled from "styled-components";

export const Container = styled.div`
  & ul {
    list-style: none;
    width: 200px;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 1rem 0;
  & div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 0 .5rem 0 0;
    background-color: ${props => props.color};
  }

  & span {
    font-size: 1.25rem;
  }
`;