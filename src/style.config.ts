import { createGlobalStyle } from "styled-components";

export const colors = {
  back: "#3d405b",
  text: "#f4f1de",
  primary: "#81b29a",
  secondary: "#f2cc8f",
  warn: "#e07a5f",
};

export const WebGlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    background-color: ${colors.back};
    color: ${colors.text};
  }
`;
