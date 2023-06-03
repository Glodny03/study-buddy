import React from 'react';
import { Logo, NavWrapper, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        Study <br />
        Buddy
      </Logo>
      <NavWrapper>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/add-user">Add user</StyledLink>
        <StyledLink to="/">Settings</StyledLink>
        <StyledLink to="/">Logout</StyledLink>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navigation;
