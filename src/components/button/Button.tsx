import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { animationSpeed, colors } from "../../style.config";

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, primary = false, shadow = true } = props;

  return (
    <Wrapper primary={primary} shadow={shadow}>
      <Item primary={primary} shadow={shadow} {...props}>
        {children}
      </Item>
    </Wrapper>
  );
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  primary?: boolean;
  shadow?: boolean;
}

const Wrapper = styled.div<ButtonProps>`
  :hover {
    button {
      transform: scale(1.05);

      ${(props) => {
        if (!props.shadow) return "";

        const color = props.primary ? colors.primary : colors.secondary;

        return css`
          box-shadow: 0 0 0.35rem ${color};
        `;
      }};
    }
  }

  :active {
    button {
      transform: scale(0.95);

      ${(props) => {
        if (!props.shadow) return "";

        const color = props.primary ? colors.primary : colors.secondary;

        return css`
          box-shadow: 0 0 0.3rem ${color};
        `;
      }};
    }
  }

  transition: all ${animationSpeed} ease-in-out;
`;

const Item = styled.button<ButtonProps>`
  padding: 0.5rem;
  margin: 0.3rem;

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
      box-shadow: 0 0 0.3rem 0px ${color};
      margin: 0.5rem;
    `;
  }};

  transition: all ${animationSpeed} ease-in-out;
`;
