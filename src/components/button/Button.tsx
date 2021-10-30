import React, { InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { animationSpeed, colors } from "../../style.config";

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, primary = false, shadow = true } = props;

  return (
    <Wrapper primary={primary} shadow={shadow}>
      {children}
    </Wrapper>
  );
};

export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  primary?: boolean;
  shadow?: boolean;
}

const Wrapper = styled.button<ButtonProps>`
  padding: 0.5rem;

  min-height: 3rem;
  min-width: 3rem;

  border-color: ${(props) =>
    props.primary ? colors.primary : colors.secondary};
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.5rem;

  ${(props) =>
    props.shadow
      ? css`
          box-shadow: 0.1rem 0.1rem 8px 0px
            ${props.primary ? colors.primary : colors.secondary};
        `
      : ""};

  :hover {
    transform: translateY(-5%);
  }

  transition: transform ${animationSpeed} ease-in-out;
`;
