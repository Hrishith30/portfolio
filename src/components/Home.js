import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import profileImage from '../hrishith.jpeg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  90% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const blinkAnimation = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 
    0 0 10px rgba(97, 218, 251, 0.6),
    0 0 20px rgba(97, 218, 251, 0.4),
    0 0 30px rgba(97, 218, 251, 0.2),
    0 0 40px rgba(97, 218, 251, 0.1);
  animation: ${popIn} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transition: width 0.5s ease, height 0.5s ease, transform 0.5s ease;
  transform: scale(0.1);

  &.loaded {
    transform: scale(1);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #61dafb;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.3s;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.6s;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1px;
  height: 1.2em;
  background-color: #cccccc;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blinkAnimation} 1.2s infinite;
`;

function Home() {
  const [text, setText] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullText = "II am a dedicated computer science professional with a specialization in cybersecurity, full-stack development and data science. Leveraging my expertise in advanced technologies, I am committed to driving innovation and delivering impactful solutions to complex, real-world challenges.";

  useEffect(() => {
    const typingDelay = 1100;

    const typeText = () => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText((prev) => prev + fullText.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 10);

      return () => clearInterval(intervalId);
    };

    const timerId = setTimeout(typeText, typingDelay);
    return () => clearTimeout(timerId);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <HomeContainer>
      <ProfileImage 
        src={profileImage} 
        alt="Hrishith Raj Reddy Malgireddy" 
        onLoad={handleImageLoad}
        className={imageLoaded ? 'loaded' : ''}
      />
      <Title>Hrishith Raj Reddy Malgireddy</Title>
      <Subtitle>MSc Computer Science | Full Stack Developer | Cybersecurity Analyst</Subtitle>
      <Description>
        {text}
        <Cursor />
      </Description>
    </HomeContainer>
  );
}

export default Home;