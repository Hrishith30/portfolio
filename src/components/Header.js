import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FaHome, FaTasks, FaUser } from 'react-icons/fa';


const StyledHeader = styled.header`

  background: linear-gradient(135deg, #2c3e50, #1a1a1a 40%, #000000 60%, #2c3e50);

  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  padding: 0.8rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;

  overflow: hidden;

  @keyframes gradientShift {

    0% {
      background-position: 0% 50%;
    }
    50% {

      background-position: 100% 50%;

    }

    100% {
      background-position: 0% 50%;
    }
  }


  &::before {
    content: '';
    position: absolute;

    top: -50%;
    left: -50%;

    width: 200%;
    height: 200%;

    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%);

    transform: rotate(30deg);

  }

`;

const NavList = styled.ul`
  display: flex;

  justify-content: center;

  list-style-type: none;
  padding: 0;
  position: relative;

  z-index: 1;
`;

const StyledLink = styled(Link)`
  color: #ffffff;

  text-decoration: none;
  font-size: 1.2rem;

  font-weight: 600;

  padding: 0.75rem 1.5rem;

  position: relative;

  display: inline-flex;
  align-items: center;

  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {

    color: #4a90e2;

    transform: translateY(-2px);
  }


  &::after {

    content: '';
    position: absolute;

    width: 0;
    height: 2px;
    bottom: 0;

    left: 50%;
    background: #4a90e2;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  }


  &:hover::after {
    width: 100%;

    left: 0;
  }


  svg {
    margin-right: 0.5rem;

  }
`;

function Header() {

  return (
    <StyledHeader>

      <NavList>
        <li><StyledLink to="/"><FaHome />Home</StyledLink></li>

        <li><StyledLink to="/projects"><FaTasks />Projects</StyledLink></li>

        <li><StyledLink to="/about"><FaUser />About</StyledLink></li>

      </NavList>

    </StyledHeader>

  );
}

export default Header;