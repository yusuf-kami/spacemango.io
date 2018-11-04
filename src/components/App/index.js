import React from 'react';
import Header from '../Header'
import Container from '../Container';
import './index.css';

const App = () =>
  <div className='flex vw-100 vh-100 space-bg'>
    <Header className="centered"/>
    <Container />
  </div>
  ;
export default App;