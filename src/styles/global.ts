import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #eeeeee80;

    --button-green: #90EE9090;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  /* extra */
  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
`;
