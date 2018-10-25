import React from 'react';
import logoSvg from './logo.svg';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  text-align: center;
`

const StyledHeading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`

const StyledImage = styled.img`
  width: 100px;
`

const LogoContainer = () =>
  <CenteredContainer tabIndex="0" alt="Spacemango Inc.">
    <StyledImage src={logoSvg} alt="Logo for Spacemango Inc."/>
    <StyledHeading>Spacemango Inc.</StyledHeading>
  </CenteredContainer>
;

export default LogoContainer;
