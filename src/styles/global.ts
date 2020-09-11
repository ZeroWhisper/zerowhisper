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
    font-family: ${fonts.roboto}, ${fonts.general}, Helvetica, sans-serif;
    /* font-family: 'Courier New', Courier, monospace; */
    letter-spacing: 1.6px;
    font-weight: 100;
  }

  body {
    /* Geek */
    /* background-color: #181A1B; */
    /* background-color: ${colors.background.weak}; */
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
    /* background-image: linear-gradient(45deg, #30384B, #323FFF, #30384B); */
    background-image: linear-gradient(90deg, #104A70, #30384B);
    /* display: flex; */
    /* flex: 1; */
    /* width: 100%; */
    /* height: 100vh; */
  }

  a, u {
    text-decoration: none;
  }

  a {
    /* color: #0060B6; */
    color: #eaeaea;
    text-decoration: none;
  }

  a:hover {
    /* color:#00A0C6; */
    text-decoration:none;
    cursor:pointer;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;
