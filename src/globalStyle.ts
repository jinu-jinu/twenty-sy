import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @keyframes bounce {
    0%{
      transform: translateY(0)
    }

    100%{
      transform: translateY(8px)
    }
  }

  * {
    box-sizing: border-box;
  }


  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000;
    font-family: 'Apple SD Gothic Neo','Malgun Gothic',arial,sans-serif;
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


  .svg-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #fff;

    & p {
      font-weight: bold;
      font-size: 0.75rem;
    }

    & .box {
      text-align: center;
      margin-bottom: 1rem;
    }

    & .arrow-svg-wrapper{
  animation: bounce 0.5s ease-in alternate infinite;
  }

 
}

`;
