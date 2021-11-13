import React, { InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../style.config";
import { LineType } from "../blocks";
import { Header, HeaderSize } from "../header";

export const View = (props: ViewProps): JSX.Element => {
  const {
    children,
    direction = "column",
    positionX = "start",
    positionY = "start",
    border = false,
    borderColor,
    header,
    headerSize = HeaderSize.medium,
    headerColor = colors.text,
    headerLineType = LineType.solid,
  } = props;

  return (
    <Wrapper
      border={!!borderColor || border}
      borderColor={borderColor || headerColor}
    >
      {header && (
        <Header size={headerSize} color={headerColor} lineType={headerLineType}>
          {header}
        </Header>
      )}
      <Content
        direction={direction}
        positionX={positionX}
        positionY={positionY}
      >
        {children}
      </Content>
    </Wrapper>
  );
};

export interface ViewProps extends InputHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  direction?: "column" | "row";
  positionX?: "start" | "center" | "end";
  positionY?: "start" | "center" | "end";

  border?: boolean;
  borderColor?: string;

  header?: string;
  headerSize?: HeaderSize;
  headerColor?: string;
  headerLineType?: LineType;
}

const Wrapper = styled.div<ViewProps>`
  margin: 1rem;

  ${(props) => {
    if (!props.border) return "";

    return css`
      padding: 1rem;

      border-color: ${props.borderColor};
      border-style: solid;
      border-width: 0.2rem;
      border-radius: 1rem;
    `;
  }}
`;

const Content = styled.div<ViewProps>`
  display: grid;
  grid-auto-flow: ${(props) => props.direction};
  justify-items: ${(props) => props.positionX};
  align-items: ${(props) => props.positionY};
`;
