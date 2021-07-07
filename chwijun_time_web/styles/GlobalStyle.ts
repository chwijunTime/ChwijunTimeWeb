import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: NixgonFont, --apple-system, sans-serif
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  textarea {
    text-align: start;
    outline: none;
    border-radius: 5px;
    border: 1px solid #878787;
    resize: none;

    font-size: 15px;
    font-family: inherit;
    padding-left: 5px;
    padding-top: 5px;
  }
`


