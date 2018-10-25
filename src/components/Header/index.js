import React from 'react';
import LogoContainer from '../Logo';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  text-align: center;
`

const CenteredLink = styled.a`
  color: lightgray;
  font-size: 1.2em;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
`

const Header = () =>
  <div>
    <LogoContainer />
    <CenteredContainer className="w-100 v-mid tc white pa0 ma0 pt1 animate-appear">
      <CenteredLink href="mailto:hi@spacemango.io">hi@spacemango.io</CenteredLink>
    </CenteredContainer>
  </div>
;

export default Header