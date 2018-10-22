import React from 'react';
import Header from '../Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(25, 31, 46);
`

const App = () =>
  <Container>
    <Header />
  </Container>
;
export default App;