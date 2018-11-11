import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container';
import './index.css';

const App = () =>
  <div className="w-100">
    <div className='flex vw-100 vh-100 space-bg'>
      <Header className="centered" />
      <Container />
    </div>
    <Footer />
  </div>
  ;
export default App;