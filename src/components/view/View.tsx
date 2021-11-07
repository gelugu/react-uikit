import React, { InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../style.config";
import { LineType } from "../blocks";
import { Header, HeaderSize } from "../header";

export const View = (props: ViewProps): JSX.Element => {
  const {
    children,
    direction = "columns",
    border = false,
    header,
    headerSize = HeaderSize.medium,
    headerColor = colors.text,
    headerLineType = LineType.solid,
  } = props;

  return (
    <Wrapper border={border} borderColor={headerColor}>
      {header && (
        <Header size={headerSize} color={headerColor} lineType={headerLineType}>
          {header}
        </Header>
      )}
      <Content direction={direction}>{children}</Content>
    </Wrapper>
  );
};

export interface ViewProps extends InputHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  direction?: "columns" | "rows";

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

  ${(props) => css`
    grid-template-${props.direction}: repeat(
    ${React.Children.count(props.children)},
      1fr
    );
  `}

  justify-content: flex-start;
`;
