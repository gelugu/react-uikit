import React, { InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { animationSpeed, colors } from "../../style.config";

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, primary = false, shadow = true } = props;

  return (
    <Wrapper>
      <Item primary={primary} shadow={shadow}>
        {children}
      </Item>
    </Wrapper>
  );
};

export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  primary?: boolean;
  shadow?: boolean;
}

const Wrapper = styled.div`
  padding: 0.2rem;
  padding-top: 0.5rem;

  :hover {
    button {
      transform: translateY(-0.1rem);
    }
  }

  :active {
    transform: translateY(-0.3rem);
  }

  transition: transform ${animationSpeed} ease-in-out;
`;

const Item = styled.button<ButtonProps>`
  padding: 0.3rem;

  min-height: 3rem;
  min-width: 3rem;

  border-color: ${(props) =>
    props.primary ? colors.primary : colors.secondary};
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.5rem;

  ${(props) => {
    if (!props.shadow) return "";

    const color = props.primary ? colors.primary : colors.secondary;

    return css`
      box-shadow: 0.1rem 0.1rem 0.2rem 0px ${color};
    `;
  }};
`;
