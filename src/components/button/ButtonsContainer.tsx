import React, { ReactNode } from "react";
import styled from "styled-components";

export const ButtonsContainer = ({
  children,
}: ButtonsContainerProps): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export interface ButtonsContainerProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  display: flex;
  align-items: center;
`;
