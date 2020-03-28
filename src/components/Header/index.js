import React from 'react';
import Logo from '../Logo';
import './index.css';

const Header = () =>
  <div className="centered flex flex-column flex-content">
    <div className="h-100p centered">
      <Logo />
    </div>
  </div>
  ;

export default Header