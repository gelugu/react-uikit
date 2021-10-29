import React from "react";
import styled from "styled-components";

export const ButtonsContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
