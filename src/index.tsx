import React from "react";
import { render } from "react-dom";
import { Button, ButtonsContainer } from "./components/button";
import { WebLayout } from "./components/layout";
import { FloatView } from "./components/view";

const App = () => {
  return (
    <WebLayout>
      <FloatView>
        <ButtonsContainer>
          <Button>aaaaaaaaa</Button>
          <Button primary>bbb</Button>
          <Button shadow={false} />
        </ButtonsContainer>
        <ButtonsContainer>
          <Button>aaaaaaaaa</Button>
          <Button primary>bbb</Button>
          <Button shadow={false} />
        </ButtonsContainer>
      </FloatView>
    </WebLayout>
  );
};

render(<App />, document.getElementById("app"));
