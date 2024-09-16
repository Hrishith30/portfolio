import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: black;
  padding: 1rem 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:hover {
    color: #3498db;
    transform: scale(1.2);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #3498db;
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavList>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/projects">Projects</StyledLink></li>
        <li><StyledLink to="/about">About</StyledLink></li>
      </NavList>
    </StyledHeader>
  );
}

export default Header;