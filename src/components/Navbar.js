import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Debug activeSection changes
  useEffect(() => {
    console.log('Navbar activeSection changed to:', activeSection); // Debug log
  }, [activeSection]);

  // Make setActiveSection available globally for other components
  useEffect(() => {
    window.updateNavbarSection = setActiveSection;
    
    // Listen for custom events from other components
    const handleSectionChange = (event) => {
      console.log('Navbar received sectionChange event:', event.detail.section); // Debug log
      setActiveSection(event.detail.section);
    };
    
    window.addEventListener('sectionChange', handleSectionChange);
    
    return () => {
      delete window.updateNavbarSection;
      window.removeEventListener('sectionChange', handleSectionChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    console.log('Navbar scrollToSection called for:', sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 40; // Match section padding-top
      const elementPosition = element.offsetTop - navbarHeight;
      
      console.log('Scrolling to position:', elementPosition);
      
      // Immediately set active section for instant highlighting
      setActiveSection(sectionId);
      console.log('Immediately set active section to:', sectionId);
      
      // Scroll to the section
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu
      setIsOpen(false);
      
      // Additional highlighting guarantees
      setTimeout(() => {
        setActiveSection(sectionId);
        console.log('100ms delayed setActiveSection for:', sectionId);
      }, 100);
      
      setTimeout(() => {
        setActiveSection(sectionId);
        console.log('300ms delayed setActiveSection for:', sectionId);
      }, 300);
      
      // Force update using the enhanced function
      if (window.forceUpdateNavbar) {
        setTimeout(() => {
          window.forceUpdateNavbar(sectionId);
          console.log('Called forceUpdateNavbar for:', sectionId);
        }, 200);
      }
    } else {
      console.log('Element not found for section:', sectionId);
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
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if section is in viewport with better detection
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
          
          // Special case for contact section - check if we're near the bottom
          if (sections[i] === 'contact' && scrollPosition >= sectionTop - 100) {
            setActiveSection('contact');
            break;
          }
        }
      }
    };

    // Function to detect current section on page load
    const detectCurrentSection = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const navbarHeight = 40;
      const scrollPosition = window.scrollY + navbarHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Function to handle hash navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the # symbol
        if (['home', 'about', 'projects', 'experience', 'contact'].includes(sectionId)) {
          // Wait for the section to be available in DOM
          setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
              setActiveSection(sectionId);
            }
          }, 100);
        }
      }
    };

    // Enhanced function to force update navbar for specific sections
    const forceUpdateNavbar = (sectionId) => {
      if (['home', 'about', 'projects', 'experience', 'contact'].includes(sectionId)) {
        console.log('Force updating navbar for section:', sectionId);
        setActiveSection(sectionId);
        
        // Also update after a delay to ensure consistency
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 50);
        
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 200);
        
        // Special handling for projects section
        if (sectionId === 'projects') {
          console.log('Special projects section handling');
          setActiveSection('projects');
          
          // Multiple updates for projects reliability
          setTimeout(() => setActiveSection('projects'), 100);
          setTimeout(() => setActiveSection('projects'), 400);
          setTimeout(() => setActiveSection('projects'), 600);
          setTimeout(() => setActiveSection('projects'), 1000);
        }
      }
    };

    // Special function specifically for projects section
    const highlightProjectsSection = () => {
      console.log('=== HIGHLIGHTING PROJECTS SECTION ===');
      setActiveSection('projects');
      
      // Multiple highlighting attempts for reliability
      setTimeout(() => {
        setActiveSection('projects');
        console.log('100ms projects highlight');
      }, 100);
      
      setTimeout(() => {
        setActiveSection('projects');
        console.log('200ms projects highlight');
      }, 200);
      
      setTimeout(() => {
        setActiveSection('projects');
        console.log('500ms projects highlight');
      }, 500);
      
      setTimeout(() => {
        setActiveSection('projects');
        console.log('1000ms projects highlight');
      }, 1000);
    };

    // Make functions globally available
    window.updateNavbarSection = setActiveSection;
    window.forceUpdateNavbar = forceUpdateNavbar;
    window.highlightProjectsSection = highlightProjectsSection;
    window.scrollToSection = scrollToSection;

    // Detect current section immediately on page load
    detectCurrentSection();

    // Handle hash navigation
    handleHashNavigation();

    // Also detect after a small delay to ensure all elements are loaded
    const timer = setTimeout(() => {
      detectCurrentSection();
      handleHashNavigation();
    }, 100);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashNavigation);
      clearTimeout(timer);
      delete window.forceUpdateNavbar;
    };
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