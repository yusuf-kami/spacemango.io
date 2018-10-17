import React from 'react';
import styled from 'styled-components';

import './page.scss';

const Page = styled.div`
  display: flex;
  transform: rotate(-90deg)
`

const App = () => <Page>☄️</Page>;

export default App;