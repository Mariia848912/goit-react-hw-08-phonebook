import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
 margin-right:50px;
 align-items:center;
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
`;
