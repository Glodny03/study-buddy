import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 110px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border: 1px solid ${({ theme }) => theme.color.grey};
`;

export const Logo = styled.div`
  font-weight: bold;
  text-align: right;
  width: 100%;
  padding: 10px 15px;
  margin: 19px 0;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  text-align: right;
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  margin-bottom: 15px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  outline: none;
  position: relative;

  &:visited {
    color: ${({ theme }) => theme.color.black};
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: 0.4s;
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.color.grey};
  }
`;
