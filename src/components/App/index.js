import React from 'react';
import styled from 'styled-components';

import Page from '../Page';

import './index.scss';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const App = () => <AppContainer className="pa0">Here is some fire 💅!!<Page>And Page</Page></AppContainer>;

export default App;