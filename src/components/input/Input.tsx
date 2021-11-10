import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { animationSpeed, colors } from "../../style.config";
import { Label } from "../label";
import { View } from "../view";

export const Input = (props: InputProps): JSX.Element => {
  const { label, labelPosition = "up" } = props;

  return (
    <Wrapper
      direction={labelPosition === "up" ? "row" : "column"}
      positionY="center"
    >
      {label && <Label>{label}</Label>}
      <Item {...props} />
    </Wrapper>
  );
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  labelPosition?: "up" | "left";
}

const Wrapper = styled(View)`
  padding: 0.5rem;
`;

const Item = styled.input<InputProps>`
  padding: 0.5rem;
  margin: 0.5rem;

  border-width: 0.1rem;
  border-radius: 0.5rem;
  border-style: solid;

  :hover {
    outline: none;
    box-shadow: 0 0 0.2rem 0px ${colors.text};
  }

  :focus {
    outline: none;
    box-shadow: 0.1rem 0.1rem 0.2rem 0px ${colors.text};
  }

  transition: all ${animationSpeed} ease-in-out;
`;
