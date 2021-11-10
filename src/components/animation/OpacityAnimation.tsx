import React, { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { animationSpeed } from "../../style.config";

export const OpacityAnimation = (props: OpacityAnimationProps): JSX.Element => {
  const { children, start = 0, end = 1 } = props;

  const [opacity, setOpasity] = useState(start);

  useEffect(() => setOpasity(end), []);

  return <Wrapper end={opacity}>{children}</Wrapper>;
};

export interface OpacityAnimationProps {
  children: ReactNode;
  start?: number;
  end?: number;
}
const Wrapper = styled.div<OpacityAnimationProps>`
  ${(props) =>
    css`
      opacity: ${props.end};
    `}

  transition: all ${animationSpeed} ease-in-out;
`;
