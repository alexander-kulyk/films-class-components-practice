import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 20px;
  margin-top: 10px;
  background-color: black;
  color: red;

  &.active {
    color: white;
  }
`;
