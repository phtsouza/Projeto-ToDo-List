import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  max-width: 350px;
  background: var(--background-card);
  padding: 1.25rem;
  margin: 0 1rem 1rem;
  border-radius: 1rem;
  position: relative;

  & .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0 0 0;
  }

  & .checkbox {
    width: 20px;
    height: 20px;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 1px solid #333;
    transition: all .2s;
    :hover {
      cursor: pointer;
    }
    svg {
      transition: opacity .2s;
      opacity: 0;
    }
  }
  & .checked {
    background: var(--check);
    svg {
      opacity: 1;
    }
  }

  & input {
    display: none;
  }
`;

export const Title = styled.h2`
  transition: all .2s;
  text-decoration: ${props => props.checkboxIsCheck ? "line-through" : ""};
`;

export const Text = styled.p`
  transition: all .2s;
  text-decoration: ${props => props.checkboxIsCheck ? "line-through" : ""};
`;

export const Categories = styled.div`
  display: flex;
`;

export const Colors = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 0 .5rem 0 0;
    background-color: ${props => props.color};

`;