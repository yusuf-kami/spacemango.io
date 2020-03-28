import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container';
import './index.css';

const LOADING_ANIMATION_DELAY = 2000;

class App extends React.Component {
  render() {
    return <div className="w-100">
      <div className='flex vw-100 vh-100 space-bg'>
        <Header className="centered" />
        <Container />
      </div>
      <Footer />
    </div>;
  }

  componentDidMount() {
    console.debug("App :: componentDidMount()");
    console.debug("Timeout started!");
    setTimeout(() => {
    // document.getElementById('root').style.cssText = "";
    // Perform animation to lift loading background
    // Perform animation to send loading logo away
    // perform animation to set logo to header
    console.debug("Timeout complete!");
    }, LOADING_ANIMATION_DELAY);
  }
}

export default App;