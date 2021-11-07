import React, { ReactNode } from "react";
import styled from "styled-components";

export const ButtonsContainer = (props: ButtonsContainerProps): JSX.Element => {
  const { children, direction = "rows" } = props;

  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export interface ButtonsContainerProps {
  children: ReactNode;
  direction?: "columns" | "rows";
}

const Wrapper = styled.div<ButtonsContainerProps>`
  margin: 0.5rem;

  button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
`;
