import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import hrishithImage from '../hrishith.jpeg';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const ContentWrapper = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  max-width: 800px;
  width: 100%;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
  color: #444;
`;

function Home() {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ContentWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <ProfileImage
          src={hrishithImage}
          alt="Hrishith Raj Reddy Malgireddy"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
        />
        <Title
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          Hrishith Raj Reddy Malgireddy
        </Title>
        <Subtitle
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 90 }}
        >
          Computer Science Graduate Student | Cybersecurity Enthusiast | Software Developer
        </Subtitle>
        <Description
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Welcome to my portfolio! I'm passionate about leveraging technology to solve real-world problems, with a focus on cybersecurity, data science, and full-stack development. Explore my projects and experiences to learn more about my journey in the world of computer science.
        </Description>
      
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Home;