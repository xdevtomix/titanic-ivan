import styled, { StyleSheetManager } from "styled-components";

import Home from "./components/Home";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Home />
      </Container>
    </StyleSheetManager>
  );
}

const Container = styled.div``;