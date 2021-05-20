import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
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
  button {
    cursor: pointer;
  }
  textarea {
    font-size: 16px;
    text-align: start;
    border: 1px solid;
    outline: none;
    border-radius: 3px;
    border-color: #ded9d9;
    margin-left: 15px;
    resize: none;

    font-family: inherit;
  }
`


