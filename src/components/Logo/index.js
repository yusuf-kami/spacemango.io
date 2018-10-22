import React from 'react';
import logoSvg from './logo.svg';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`

const LogoContainer = () =>
  <div className="logo" tabIndex="0">
    <img src={logoSvg} className="" alt="Spacemango Inc." />
    <StyledHeading>Spacemango Inc.</StyledHeading>
  </div>
;

export default LogoContainer;
