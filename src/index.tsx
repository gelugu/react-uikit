import React from "react";
import { render } from "react-dom";
import { Button, ButtonsContainer } from "./components/button";
import { HeaderSize } from "./components/header";
import { WebLayout } from "./components/layout";
import { FloatView } from "./components/view";
import { View } from "./components/view/View";
import { colors } from "./style.config";

const App = () => {
  return (
    <WebLayout>
      <FloatView border direction="rows" header="Buttons">
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
      <FloatView border direction="columns" header="Views">
        <View
          direction="columns"
          border
          header="column view"
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          direction="rows"
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
          direction="rows"
          header="color"
          headerColor={colors.primary}
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          direction="rows"
          header="without border"
          headerColor={colors.primary}
          headerSize={HeaderSize.small}
        >
          <Button />
          <Button />
          <Button />
        </View>
        <View
          border
          direction="rows"
          headerSize={HeaderSize.small}
        >
          View withou header
        </View>
      </FloatView>
    </WebLayout>
  );
};

render(<App />, document.getElementById("app"));
