import React, { ReactNode } from "react";
import styled from "styled-components";

export const Label = ({ children }: LabelProps): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export interface LabelProps {
  children: ReactNode;
}

const Wrapper = styled.label`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;
