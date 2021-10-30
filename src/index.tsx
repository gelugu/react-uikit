import React from "react";
import { render } from "react-dom";
import { Button, ButtonsContainer } from "./components/button";
import { HeaderSize } from "./components/header";
import { WebLayout } from "./components/layout";
import { FloatView } from "./components/view";
import { View, ViewDirection } from "./components/view/View";
import { colors } from "./style.config";

const App = () => {
  return (
    <WebLayout>
      <FloatView border direction={ViewDirection.column} header="Buttons">
        <ButtonsContainer>
          <Button>Default</Button>
          <Button />
          <Button shadow={false}>Without shadow</Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button primary>Primary</Button>
          <Button primary />
          <Button primary shadow={false}>
            Without shadow
          </Button>
        </ButtonsContainer>
      </FloatView>
      <FloatView border direction={ViewDirection.row} header="Views">
        <View
          direction={ViewDirection.column}
          border
          header="column view"
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          direction={ViewDirection.row}
          border
          header="row view"
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          border
          direction={ViewDirection.row}
          header="color"
          headerColor={colors.primary}
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          direction={ViewDirection.row}
          header="without border"
          headerColor={colors.primary}
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
      </FloatView>
    </WebLayout>
  );
};

render(<App />, document.getElementById("app"));
