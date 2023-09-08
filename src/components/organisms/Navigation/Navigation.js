import React from 'react';
import { StyledLink, StyledList, StyledLogo, StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLogo>
        <p>Studdy Buddy</p>
      </StyledLogo>
      <StyledList>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/add-user">Add user</StyledLink>
      </StyledList>
    </StyledNavigation>
  );
};

export default Navigation;
