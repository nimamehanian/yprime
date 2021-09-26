import { createGlobalStyle } from 'styled-components';
import { $text, $darkBg } from '@styles/colors';
import { disableHighlight } from '@styles/mixins';

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
    font-family: 'Andes Reg', sans-serif;
    color: ${$text};
    background: ${$darkBg};
    ${disableHighlight}
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
