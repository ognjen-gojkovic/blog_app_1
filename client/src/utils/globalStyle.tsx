import { css, createGlobalStyle } from "styled-components";

const Reset = css`
  // variables
  :root {
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Indie Flower", sans-serif;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    height: 100%;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::selection {
    background-color: #f5f5dc;
  }
`;

const BaseStyle = createGlobalStyle`
    ${Reset}
`;

export const GlobalStyle = () => <BaseStyle />;
