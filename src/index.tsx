import React from "react";
import { render } from "react-dom";
import { Button, ButtonsContainer } from "./components/button";
import { Input } from "./components/input";
import { HeaderSize } from "./components/header";
import { WebLayout } from "./components/layout";
import { View } from "./components/view";
import { colors } from "./style.config";
import { FloatAnimation, OpacityAnimation } from "./components/animation";

const App = () => {
  return (
    <WebLayout direction="column" positionX="center" positionY="center">
      <FloatAnimation>
        <Input label="simple input" labelPosition="up" />
      </FloatAnimation>
      <FloatAnimation>
        <Button>:</Button>
      </FloatAnimation>
      <FloatAnimation>
        <Input label="simple input" labelPosition="up" />
      </FloatAnimation>
    </WebLayout>
  );
};

render(<App />, document.getElementById("app"));
