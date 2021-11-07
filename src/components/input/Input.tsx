import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../style.config";

export const Input = (props: InputProps): JSX.Element => {
  return <Wrapper {...props} />;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  primary?: boolean;
}

const Wrapper = styled.input<InputProps>`
  padding: 0.5rem;
  margin: 0.3rem;

  border-width: 0.1rem;
  border-radius: 0.5rem;
  border-style: solid;

  :focus {
    outline: none;
    box-shadow: 0.1rem 0.1rem 0.2rem 0px ${colors.text};
  }
`;
