import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FadeTransition } from './PageTransition';
import profileImage from '../assets/hrishith.jpeg';
import resume from '../assets/Hrishith.pdf';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <FadeTransition>
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm
              <br />
              <motion.span 
                className="highlight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hrishith Raj Reddy Malgireddy
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="hero-subtitle-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="hero-subtitle-cube">
                <div className="face front">Full Stack Developer</div>
                <div className="face back">Cyber Security Enthusiast</div>
                <div className="face right">AI/ML Developer</div>
              </div>
            </motion.div>

            <div className="hero-description">
              <TypeAnimation
                sequence={[
                  'I transform ideas into innovative digital solutions, specializing in cybersecurity, AI/ML, and full-stack development.',
                  1000, // Pause for 1 second
                ]}
                wrapper="p"
                speed={70}
                style={{ display: 'inline-block' }}
                repeat={1}
              />
            </div>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
              <a 
                href={resume} 
                download 
                className="btn btn-outline resume-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hero-image-container">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </FadeTransition>
  );
};

export default Home; 