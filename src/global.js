import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --background-card: #FFDAB9;
    --check: #333;
    --blue: #5429CC;
    --blue-light: #9633FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // front-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720) {
      font-size: 87.5%; // 14px
    }
  }
  // REM = 1rem = 16px => sempre usaremos rem para responsividade
  
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disbbled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 1.25rem auto 0;
  display: flex;
  align-items: flex-start;
`;