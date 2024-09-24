import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #2c3e50, #1a1a1a 40%, #000000 60%, #2c3e50);
  padding: 0.5rem 0;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.5);
  position: relative;
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
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%);
    transform: rotate(-30deg);
  }
`;

const IconLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #4a90e2;
    transform: scale(1.5);
    text-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

const CopyrightText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

function Footer() {
  return (
    <StyledFooter>
      <IconLinks>
        <IconLink href="mailto:hrishithrajreddy22@gmail.com" aria-label="Email">
          <FaEnvelope />
        </IconLink>
        <IconLink href="tel:+15736393854" aria-label="Phone">
          <FaPhone />
        </IconLink>
        <IconLink href="https://github.com/Hrishith30" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/hrishith-raj-reddy-malgireddy-919750262/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://x.com/RISHI333333" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </IconLink>
      </IconLinks>
      <CopyrightText>&copy; 2024 My Portfolio. All rights reserved.</CopyrightText>
    </StyledFooter>
  );
}

export default Footer;