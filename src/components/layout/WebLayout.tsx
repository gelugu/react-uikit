import React from "react";
import styled from "styled-components";
import { View, ViewProps } from "../view";
import { colors, WebGlobalStyles } from "../../style.config";

export const WebLayout = (props: ViewProps): JSX.Element => {
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

const Wrapper = styled(View)`
  width: 100vw;
  height: 100vh;

  background-color: ${colors.back};
`;
