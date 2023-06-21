import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;

  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }
`;
export const Link = styled(NavLink)`
  padding: 16px 10px;

  text-decoration: none;
  font-weight: 500;
  color: #000;

  &.active {
    color: #2196f3;
  }
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
