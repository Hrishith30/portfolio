import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 40; // Match section padding-top
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const navbarHeight = 40; // Same height as scrollToSection
      const scrollPosition = window.scrollY + navbarHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add click outside listener
  useEffect(() => {
    const closeMenu = (e) => {
      // Check if menu is open and click is outside navbar
      if (isOpen && !e.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('click', closeMenu);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]); // Only re-run effect when isOpen changes

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navbar desktop-nav">
        <div className="container navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            Portfolio
          </div>
          
          <button className="navbar-toggle" onClick={toggleMenu}>
            <div className="burger-menu">
              <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
            </div>
          </button>

          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="mobile-top-nav">
        <div className="container navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            Portfolio
          </div>
          
          <ul className="navbar-menu">
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li className="navbar-item">
              <button 
                className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 