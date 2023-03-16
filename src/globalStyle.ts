import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }

  #root:not(:empty) ~ #loading {
    display: none;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000;
  }

  body {
    overscroll-behavior: none;
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .canvas {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 100vh !important;
  }

  .view {
    width: 100%;
    height: 100%;
  }

  .scene {
    position: relative;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
`;
