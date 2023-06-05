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
        <StyledLink exact to="/">
          Dashboard
        </StyledLink>
        <StyledLink to="/add-user">Add user</StyledLink>
      </NavWrapper>
    </Wrapper>
  );
};

export default Navigation;
