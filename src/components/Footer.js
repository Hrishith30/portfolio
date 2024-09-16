import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightText = styled.p`
  color: #ecf0f1;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const IconLink = styled.a`
  color: #ecf0f1;
  transition: color 0.3s ease;
  display: inline-block;

  &:hover {
    color: #3498db;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.5);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <IconLinks>
        <IconLink href="mailto:hrishithrajreddy22@gmail.com" aria-label="Email">
          <FaEnvelope size={20} />
        </IconLink>
        <IconLink href="tel:+15736393854" aria-label="Phone">
          <FaPhone size={20} />
        </IconLink>
        <IconLink href="https://github.com/Hrishith30" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={20} />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/hrishith-raj-reddy-malgireddy-919750262/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </IconLink>
        <IconLink href="https://x.com/RISHI333333" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={20} />
        </IconLink>
      </IconLinks>
      <CopyrightText>&copy; 2024 My Portfolio. All rights reserved.</CopyrightText>
    </StyledFooter>
  );
}

export default Footer;