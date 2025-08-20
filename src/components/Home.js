import React from 'react';
import './Home.css';
import profileImage from '../assets/hrishith.jpeg';
import resume from '../assets/Hrishith.pdf';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section className="hero">
        <div className="container hero-container">
          <div 
            className="hero-content"
          >
            <h1 
              className="hero-title"
            >
              Hi, I'm
              <br />
              <span 
                className="highlight"
              >
                Hrishith Raj Reddy Malgireddy
              </span>
            </h1>
            
            <div 
              className="hero-subtitle-wrapper"
            >
              <div className="hero-subtitle-cube">
                <div className="face front">Full Stack Developer</div>
                <div className="face back">Cyber Security Enthusiast</div>
                <div className="face right">AI/ML Developer</div>
              </div>
            </div>

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

            <div 
              className="hero-buttons"
            >
              <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </button>
                             <button className="btn btn-outline" onClick={() => {
                 // First scroll to contact section
                 document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                 
                 // Then scroll to footer to show both contact and footer
                 setTimeout(() => {
                   const footer = document.querySelector('footer');
                   if (footer) {
                     footer.scrollIntoView({ behavior: 'smooth' });
                   }
                 }, 1500);
               }}>
                 Contact Me
               </button>
              <a 
                href={resume} 
                download 
                className="btn btn-outline resume-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>

          <div 
            className="hero-image"
          >
            <div className="hero-image-container">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home; 