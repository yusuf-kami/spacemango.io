import React from 'react';
import logoSvg from './logo.svg';
import './index.css';

const LogoContainer = () =>
  <div className="centered" tabIndex="0" alt="Spacemango Inc.">
    <img className="img" src={logoSvg} alt="Logo for Spacemango Inc."/>
    <h1 className="h1">Spacemango Inc.</h1>
  </div>
;

export default LogoContainer;
