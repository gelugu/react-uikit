import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors, WebGlobalStyles } from "../../style.config";

export const WebLayout = (props: WebLayoutProps): JSX.Element => {
  const {
    children,
    direction = "row",
    positionX = "center",
    positionY = "center",
  } = props;

  return (
    <Wrapper direction={direction} positionX={positionX} positionY={positionY}>
      <WebGlobalStyles />
      {children}
    </Wrapper>
  );
};

export interface WebLayoutProps {
  children?: ReactNode;

  direction?: "column" | "row";
  positionX?: "start" | "center" | "end";
  positionY?: "start" | "center" | "end";
}

const Wrapper = styled.div<WebLayoutProps>`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-auto-flow: ${(props) => props.direction};
  justify-items: ${(props) => props.positionX};
  align-items: ${(props) => props.positionY};

  background-color: ${colors.back};
`;
