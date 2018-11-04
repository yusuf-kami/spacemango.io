import React from 'react';
import LogoContainer from '../Logo';
import './index.css';

const Header = () =>
  <div>
    <LogoContainer />
    <div className="w-100 v-mid tc white pa0 ma0 pt1 animate-appear centered">
      <a href="mailto:hi@spacemango.io" className="link centered-link">hi@spacemango.io</a>
    </div>
  </div>
;

export default Header