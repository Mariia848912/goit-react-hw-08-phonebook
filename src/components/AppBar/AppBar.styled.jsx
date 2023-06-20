import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #fff;
  border-bottom: 1px solid #ececec;

  display: flex;

  justify-content: space-between;

  overflow: hidden;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 16px 10px;
  text-decoration: none;
  font-weight: 500;
  color: #000;

  &.active {
    color: #b92f2c;
  }
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
