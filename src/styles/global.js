import { createGlobalStyle } from 'styled-components';
import { $text, $darkBg, $white } from '@styles/colors';
import { disableHighlight } from '@styles/mixins';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 16px;
    font-family: 'Inter Reg';
    color: ${$white};
    background: #151618;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: 'Inter Reg';
    src: url('/typefaces/inter/inter-reg.woff2');
  }

  @font-face {
    font-family: 'Inter Med';
    src: url('/typefaces/inter/inter-med.woff2');
  }
`;

export default GlobalStyles;
