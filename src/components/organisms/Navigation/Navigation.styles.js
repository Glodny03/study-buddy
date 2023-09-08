import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 109px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  position: fixed;
  left: 0;
  top: 0;
`;

export const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  & p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: right;
    letter-spacing: 0.4px;
    margin: 19px 0;
    padding: 15px;
  }
`;

export const StyledList = styled.ul`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: right;
`;

const activeclassname = 'active';
export const StyledLink = styled(NavLink).attrs({ activeclassname })`
  text-decoration: none;
  font-weight: bold;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};

  &.active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 2px;
      top: 50%;
      right: -15px;
      background-color: ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;
