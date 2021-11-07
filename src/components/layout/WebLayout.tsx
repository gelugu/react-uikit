import React from "react";
import styled, { css } from "styled-components";
import { ViewProps } from "../view";
import { colors, WebGlobalStyles } from "../../style.config";

export const WebLayout = (props: ViewProps): JSX.Element => {
  const { children, direction = "columns" } = props;

  return (
    <Wrapper direction={direction}>
      <WebGlobalStyles />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<ViewProps>`
  width: 100vw;
  height: 100vh;

  ${(props) => css`
    grid-template-${props.direction}: repeat(
      ${React.Children.count(props.children)},
      1fr
    );
  `}

  background-color: ${colors.back};
`;
