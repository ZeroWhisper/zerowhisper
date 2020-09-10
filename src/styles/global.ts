import { createGlobalStyle, css } from 'styled-components';

import colors from './colors';
import fonts from './fonts';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    ${css`
      height: 100%;
      /* border: 10px solid red; */
    `}
  }

  /*
  #root {
    ${
      process.env.HEIGHT_PAGE === 'static'
        ? css`
            height: 100%;
          `
        : css`
            display: flex;
            flex: 1;
          `
    }
  }
  */

  body, input, button {
    font-size: 16px;
    font-family: ${fonts.general}, Roboto, Helvetica, sans-serif;
    /* letter-spacing: 2.5px; */
    font-weight: 100;
  }

  body {
    /* Geek */
    /* background-color: #181A1B; */
    background-color: ${colors.background.weak};
    color: ${colors.fonts.primary};

    /* background-color: #eaeaea; */
    /* background-color: #07A98A; */

    /* background-color: #39ff14; */
    /* background-color: #69ff46; */
    /* background-color: #AA00FF; */
    /* background-color: #ff00ff; */
    /* background-color: #F8397E; */
    /* background-color: #ffa340; */
    /* background-color: #fb4a21; */
    /* background-color: #fcf133; */
    /* background-color: #ff3a40; */
    -webkit-font-smoothing: antialiased;
    /* display: flex; */
    /* flex: 1; */
    /* width: 100%; */
    /* height: 100vh; */
  }

  a, u {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;
