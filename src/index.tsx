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
    <WebLayout positionX="start">
      <View direction="row" header="Inputs">
        <FloatAnimation>
          <Input label="simple input" labelPosition="up" />
        </FloatAnimation>
        <Input label="left label" labelPosition="left" />
      </View>
      <View direction="row" header="Buttons">
        <OpacityAnimation>
          <ButtonsContainer>
            <Button>Default</Button>
            <Button />
            <Button shadow={false}>Without shadow</Button>
          </ButtonsContainer>
        </OpacityAnimation>
        <FloatAnimation>
          <ButtonsContainer>
            <Button primary>Primary</Button>
            <Button primary />
            <Button primary shadow={false}>
              Without shadow
            </Button>
          </ButtonsContainer>
        </FloatAnimation>
      </View>
      <View direction="column" header="Views">
        <View
          direction="column"
          header="column view"
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View direction="row" header="row view" headerSize={HeaderSize.small}>
          <Button />
          <Button />
          <Button />
        </View>
        <View
          direction="row"
          header="color"
          headerColor={colors.primary}
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          direction="row"
          header="with border"
          border
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View direction="row" headerSize={HeaderSize.small}>
          View withou header
        </View>
      </View>
    </WebLayout>
  );
};

render(<App />, document.getElementById("app"));
