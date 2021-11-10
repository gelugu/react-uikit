import React, { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { animationSpeed } from "../../style.config";

export const FloatAnimation = (props: FloatAnimationProps): JSX.Element => {
  const random = () => {
    const rand = Math.floor(Math.random() * 100);
    return rand % 2 ? rand : -rand;
  };

  const {
    children,
    fromPosition = {
      x: random(),
      y: random(),
    },
  } = props;

  const [position, setPosition] = useState(fromPosition);

  useEffect(() => setPosition({ x: 0, y: 0 }), []);

  return <Wrapper fromPosition={position}>{children}</Wrapper>;
};

export interface FloatAnimationProps {
  children: ReactNode;
  fromPosition?: Coord2d;
}

export interface Coord2d {
  x: number;
  y: number;
}

const Wrapper = styled.div<FloatAnimationProps>`
  ${(props) =>
    props.fromPosition &&
    css`
      transform: translate(
        ${props.fromPosition.x}vw,
        ${props.fromPosition.y}vh
      );
    `}

  transition: all ${animationSpeed} ease-in-out;
`;
