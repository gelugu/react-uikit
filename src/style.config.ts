import { createGlobalStyle } from "styled-components";

export const colors = {
  back: "#3d405b",
  text: "#f4f1de",
  primary: "#f2cc8f",
  secondary: "#81b29a",
  warn: "#e07a5f",
};

export enum Fonts {
  ZenAntiqueSoft = "'Zen Antique Soft', serif",
  Ubuntu = "'Ubuntu', sans-serif",
  SourceCodePro = "'Zen Antique Soft', serif",
}

export const animationSpeed = "200ms";

export const WebGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400&family=Ubuntu:ital,wght@0,400;0,700;1,400&family=Zen+Antique+Soft&display=swap');

  * {
    margin: 0;
    padding: 0;

    background-color: ${colors.back};
    color: ${colors.text};

    font-size: 1rem;

    font-family: ${Fonts.Ubuntu};

    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 0.5rem ${colors.secondary};
      border-radius: 0.5rem;
    }
  }
`;
