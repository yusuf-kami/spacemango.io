import React from 'react';
import Logo from '../Logo';
import './index.css';

const Header = () =>
  <div className="centered flex flex-column flex-content">
    <div className="h-100p centered">
      <Logo />
    </div>
    <div className="flex p0 ma0">
      <h1 className="f-lato white f2-ns f3">Spacemango Inc.</h1>
    </div>
    <div className="w-100 v-mid tc white pa0 ma0 pt1 animate-appear centered">
      <a href="mailto:hi@spacemango.io" className="link light-gray tc dim hover-white">hi@spacemango.io</a>
    </div>
  </div>
;

export default Header