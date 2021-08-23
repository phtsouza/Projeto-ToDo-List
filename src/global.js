import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
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
    background: var(---background);
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