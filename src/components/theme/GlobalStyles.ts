import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.typography.family.ui};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    font-size: ${({ theme }) => theme.typography.size.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.base};
     background: linear-gradient(112.04deg, #E1D8F9 11.43%, #E79FFF 95.88%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, textarea, select {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

   h1, h2, h3, h4, h5, h6 {
    margin: 0
  }

  button {
    cursor: pointer;
  }

  /* Remove chrome's autofill background color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export default GlobalStyles;
