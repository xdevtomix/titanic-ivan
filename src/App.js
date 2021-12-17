import styled, { StyleSheetManager } from "styled-components";

import NetworkPanel from "./components/NetworkPanel";
import TableContainer from "./components/TableContainer";

import 'antd/dist/antd.css';

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <NetworkPanel />
        <TableContainer />
      </Container>
    </StyleSheetManager>
  );
}

const Container = styled.div``;