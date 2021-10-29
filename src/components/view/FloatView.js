import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const FloatView = (props) => {
  const { children } = props;

  const random = () => {
    const rand = Math.floor(Math.random() * 100);
    return rand %2 ? rand : -rand;
  }

  const [styles, setStyles] = useState({
    transform: `translate(${random()}vw, ${random()}vh)`,
  });

  useEffect(() => {
    setStyles("translate(0, 0)");
  }, []);

  return <Wrapper style={styles}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 200ms ease-in-out;
`;
