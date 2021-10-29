import React, { ReactNode } from "react";
import styled from "styled-components";

export const Button = ({ children }: ButtonProps): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export interface ButtonProps {
  children?: ReactNode;
}

const Wrapper = styled.button``;
