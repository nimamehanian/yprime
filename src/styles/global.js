import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    display: flex;
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: '';
    src: url('');
  }
`;

export default GlobalStyles;
