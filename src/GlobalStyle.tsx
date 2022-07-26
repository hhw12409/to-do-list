import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface ITheme {
  textColor: string;
  bgColor: string;
  accentColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration:none;
  }
`;

export default GlobalStyle;
