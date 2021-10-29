import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors, WebGlobalStyles } from "../../style.config";

export const WebLayout = ({ children }: WebLayoutProps): JSX.Element => {
  return (
    <Wrapper>
      <WebGlobalStyles />
      {children}
    </Wrapper>
  );
};

export interface WebLayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.back};
  color: ${colors.text};

  overflow: hidden;
`;
