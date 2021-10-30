import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../style.config";

export const HorizontalLine = (props: HorizontalLineProps): JSX.Element => {
  const { size = 0.1, color = colors.text, type = LineType.solid } = props;

  return <Wrapper size={size} color={color} type={type} />;
};

export interface HorizontalLineProps
  extends InputHTMLAttributes<HTMLHRElement> {
  size?: number;
  color?: string;
  type?: LineType;
}

export enum LineType {
  duoble = "double",
  dashed = "dashed",
  dotted = "dotted",
  groove = "groove",
  ridge = "ridge",
  solid = "solid",
}

const Wrapper = styled.hr<HorizontalLineProps>`
  border: none;
  border-top-color: ${(props) => props.color};
  border-top-width: ${(props) => props.size}rem;
  border-top-style: ${(props) => props.type};
  color: ${(props) => props.color};
  overflow: visible;
  text-align: center;

  ::after {
    content: ${(props) => props.size};
    color: white;
    background-color: black;
  }
`;
