import React from 'react';
import './Home.css';
import profileImage from '../assets/hrishith.jpeg';
import resume from '../assets/Hrishith.pdf';
import { TypeAnimation } from 'react-type-animation';

// Shared scrolling function to match navbar behavior
const scrollToSection = (sectionId) => {
  console.log('scrollToSection called with:', sectionId); // Debug log
  
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 40; // Match section padding-top
    const elementPosition = element.offsetTop - navbarHeight;
    
    console.log('Scrolling to position:', elementPosition); // Debug log
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    
    // Method 1: Use global function if available
    if (window.updateNavbarSection) {
      console.log('Calling window.updateNavbarSection with:', sectionId);
      window.updateNavbarSection(sectionId);
    }
    
    // Method 2: Use enhanced force update function
    if (window.forceUpdateNavbar) {
      console.log('Calling window.forceUpdateNavbar with:', sectionId);
      window.forceUpdateNavbar(sectionId);
    }
    
    // Method 3: Dispatch custom event
    const event = new CustomEvent('sectionChange', { 
      detail: { section: sectionId } 
    });
    window.dispatchEvent(event);
    console.log('Dispatched sectionChange event for:', sectionId);
    
    // Method 4: Direct DOM manipulation (immediate)
    updateNavbarHighlight(sectionId);
    
    // Method 5: Delayed DOM update as final fallback
    setTimeout(() => {
      updateNavbarHighlight(sectionId);
    }, 200);
    
    // Method 6: Additional delayed updates for reliability
    setTimeout(() => {
      if (window.forceUpdateNavbar) {
        window.forceUpdateNavbar(sectionId);
      }
      updateNavbarHighlight(sectionId);
    }, 500);
  } else {
    console.log('Element not found for section:', sectionId);
  }
};

// Helper function to directly update navbar highlighting
const updateNavbarHighlight = (sectionId) => {
  console.log('Updating navbar highlight for:', sectionId);
  
  // Update desktop navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Remove active class from all links
    navbar.querySelectorAll('.navbar-link').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to the target section link
    const targetLink = navbar.querySelector(`[onclick*="${sectionId}"]`);
    if (targetLink) {
      targetLink.classList.add('active');
      console.log('Added active class to desktop navbar link for:', sectionId);
    } else {
      console.log('Could not find desktop navbar link for:', sectionId);
    }
  } else {
    console.log('Desktop navbar not found');
  }
  
  // Update mobile navbar
  const mobileNavbar = document.querySelector('.mobile-top-nav');
  if (mobileNavbar) {
    mobileNavbar.querySelectorAll('.navbar-link').forEach(link => {
      link.classList.remove('active');
    });
    
    const mobileTargetLink = mobileNavbar.querySelector(`[onclick*="${sectionId}"]`);
    if (mobileTargetLink) {
      mobileTargetLink.classList.add('active');
      console.log('Added active class to mobile navbar link for:', sectionId);
    } else {
      console.log('Could not find mobile navbar link for:', sectionId);
    }
  } else {
    console.log('Mobile navbar not found');
  }
};

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
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  // Use navbar's scrollToSection function for proper linking
                  console.log('=== VIEW MY WORK BUTTON CLICKED ===');
                  
                  if (window.scrollToSection) {
                    console.log('Using navbar scrollToSection function');
                    window.scrollToSection('projects');
                  } else {
                    console.log('Navbar function not available, using fallback');
                    // Fallback to direct scrolling
                    const projectsElement = document.getElementById('projects');
                    if (projectsElement) {
                      const navbarHeight = 40;
                      const elementPosition = projectsElement.offsetTop - navbarHeight;
                      
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                      
                      // Update navbar highlighting
                      if (window.highlightProjectsSection) {
                        window.highlightProjectsSection();
                      }
                      if (window.forceUpdateNavbar) {
                        window.forceUpdateNavbar('projects');
                      }
                    }
                  }
                }}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: '2px solid #3b82f6',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: '120px',
                  minHeight: '44px',
                  zIndex: 1000,
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => scrollToSection('contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#3b82f6',
                  border: '2px solid #3b82f6',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: '120px',
                  minHeight: '44px',
                  zIndex: 1000,
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                Contact Me
              </button>

              <a 
                href={resume} 
                download 
                className="btn btn-outline resume-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#3b82f6 !important',
                  color: 'white !important',
                  border: '2px solid #3b82f6 !important',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: '120px',
                  minHeight: '44px',
                  zIndex: 1000,
                  position: 'relative',
                  // Additional blue styling
                  boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8 !important';
                  e.target.style.borderColor = '#1d4ed8 !important';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3b82f6 !important';
                  e.target.style.borderColor = '#3b82f6 !important';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
                }}
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