import React from 'react';
import logoSvg from './logo.png';
import styled from 'styled-components';

const StyleContainer = styled.div`
  text-align: center;
`

const StyledHeading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`

const LogoContainer = () =>
  <StyleContainer tabIndex="0">
    <img src={logoSvg} alt="Spacemango Inc." />
    <StyledHeading>Spacemango Inc.</StyledHeading>
  </StyleContainer>
;

export default LogoContainer;
