import React from 'react';
import logoSvg from './logo.svg';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: center;
`

const StyledHeading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`

const LogoContainer = () =>
  <StyledContainer tabIndex="0" alt="Spacemango Inc.">
    <img src={logoSvg} alt="Logo for Spacemango Inc."/>
    <StyledHeading>Spacemango Inc.</StyledHeading>
  </StyledContainer>
;

export default LogoContainer;
