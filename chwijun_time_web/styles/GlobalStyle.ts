import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: "NixgonFont";
    font-weight: 200;
    src: url('/fonts/NIXGONFONTS M 2.0.OTF');
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: --apple-system,  NixgonFont, sans-serif
  }
 


  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`


