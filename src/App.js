import styled, { StyleSheetManager } from "styled-components";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        home placeholder
      </Container>
    </StyleSheetManager>
  );
}

const Container = styled.div``;