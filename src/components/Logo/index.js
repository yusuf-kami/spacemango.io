import React from 'react';
import logoSvg from './logo.svg';
import './index.css';

const LogoContainer = () =>
  <div className="centered animate-comet tc p-100" tabIndex="0" alt="Spacemango Inc.">
    <img className="w-100p gitter" src={logoSvg} alt="Logo for Spacemango Inc."/>
  </div>
;

export default LogoContainer;
