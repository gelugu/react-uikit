import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../style.config";
import { HorizontalLine, LineType } from "../blocks";

export const Header = (props: HeaderProps): JSX.Element => {
  const {
    children,
    size = HeaderSize.small,
    color = colors.text,
    lineType = LineType.solid,
  } = props;

  const HearedElement = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <Wrapper color={color}>
      <HearedElement>{children}</HearedElement>
      <HorizontalLine color={color} type={lineType} />
    </Wrapper>
  );
};

export interface HeaderProps {
  children: ReactNode;
  size?: HeaderSize;
  color?: string;
  lineType?: LineType;
}

export enum HeaderSize {
  small = 3,
  medium = 2,
  large = 1,
}

const Wrapper = styled.div<HeaderProps>`
  margin-bottom: 1rem;

  h1 {
    font-size: 5rem;
    color: ${(props) => props.color};
  }

  h2 {
    font-size: 3rem;
    color: ${(props) => props.color};
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.color};
  }
`;
