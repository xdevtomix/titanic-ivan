import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import TableContainer from './components/TableContainer';
import ChartsContainer from './components/ChartsContainer';

import 'antd/dist/antd.css';

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <div>
          <TableContainer />
          <ChartsContainer />
        </div>
      </Container>
    </StyleSheetManager>
  );
}

const Container = styled.div`

  >div {
    display: flex;
  }
`;