import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { animationSpeed } from "../../style.config";
import { View, ViewProps } from "./View";

export const FloatView = (props: FloatViewProps): JSX.Element => {
  const { children } = props;

  const random = () => {
    const rand = Math.floor(Math.random() * 100);
    return rand % 2 ? rand : -rand;
  };

  const [styles, setStyles] = useState({
    transform: `translate(${random()}vw, ${random()}vh)`,
  });

  useEffect(() => setStyles({ transform: "translate(0, 0)" }), []);

  return (
    <Wrapper style={styles}>
      <View {...props}>{children}</View>
    </Wrapper>
  );
};

export interface FloatViewProps extends ViewProps {
  children: ReactNode;
}

const Wrapper = styled.div``;
