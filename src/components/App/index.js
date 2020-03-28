import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container';
import './index.css';

const LOADING_ANIMATION_DELAY = 2500;

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

    // TODO: make loading screen disappear
    // document.getElementById('loading-comet').classList.remove("comet-in");
    // document.getElementById('loading-comet').classList.add("comet-out");

    // document.getElementById('loading-label').classList.remove("label-in");
    // document.getElementById('loading-label').classList.add("label-out");

    // document.getElementById('loading').classList.add("disappear");

    // TODO: perform animation to set up header and Logo
    // TODO: remove opaque loading elements after another timeout
    console.debug("Timeout complete!");
    }, LOADING_ANIMATION_DELAY);
  }
}

export default App;