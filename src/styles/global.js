import { createGlobalStyle } from 'styled-components';
import { $text, $darkBg, $white } from '@styles/colors';
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
    font-family: 'Inter Reg';
    color: ${$white};
    background: #151618;
    ${disableHighlight}
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
