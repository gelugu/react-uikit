import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { animationSpeed } from "../../style.config";

export const FloatAnimation = (props: FloatAnimationProps): JSX.Element => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const randomCoord = () => {
    const randX = Math.floor(Math.random() * 100);
    const randY = Math.floor(Math.random() * 100);
    return { x: randX % 2 ? randX : -randX, y: randY % 2 ? randY : -randY };
  };

  const { children, fromPosition = randomCoord(), toPosition } = props;

  const [position, setPosition] = useState(fromPosition);
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);

  useEffect(() => setPosition({ x: 0, y: 0 }), []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    if (wrapperRef.current.offsetLeft < 0) {
      setDiffX(wrapperRef.current.offsetLeft);
    }
    if (
      wrapperRef.current.parentElement &&
      wrapperRef.current.offsetLeft >
        wrapperRef.current.parentElement.offsetWidth
    ) {
      setDiffX(
        -(
          wrapperRef.current.parentElement.offsetWidth -
          wrapperRef.current.offsetLeft
        ),
      );
    }

    if (wrapperRef.current.offsetTop < 0) {
      setDiffX(wrapperRef.current.offsetTop);
    }
    if (
      wrapperRef.current.parentElement &&
      wrapperRef.current.offsetTop >
        wrapperRef.current.parentElement.offsetHeight
    ) {
      setDiffY(
        -(
          wrapperRef.current.parentElement.offsetHeight -
          wrapperRef.current.offsetTop
        ),
      );
    }
  }, [wrapperRef.current, toPosition]);

  return (
    <Wrapper
      fromPosition={position}
      toPosition={toPosition}
      ref={wrapperRef}
      diffX={diffX}
      diffY={diffY}
    >
      {children}
    </Wrapper>
  );
};

export interface FloatAnimationProps {
  children: ReactNode;
  fromPosition?: Coord2d;
  toPosition?: Coord2d;
}

interface FloatAnimationPropsInner {
  diffX?: number;
  diffY?: number;
}

export interface Coord2d {
  x: number;
  y: number;
}

const Wrapper = styled.div<FloatAnimationProps & FloatAnimationPropsInner>`
  ${(props) =>
    props.fromPosition &&
    css`
      transform: translate(
        ${props.fromPosition.x}vw,
        ${props.fromPosition.y}vh
      );
    `}

  ${(props) =>
    props.toPosition &&
    css`
      position: fixed;
      left: calc(${props.toPosition.x}vh + ${props.diffX}px) !important;
      top: calc(${props.toPosition.y}vh + ${props.diffY}px) !important;
    `}

  transition: all ${animationSpeed} ease-in-out;
`;
