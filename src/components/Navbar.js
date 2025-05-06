import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Portfolio
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu}>
          <div className="burger-menu">
            <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
          </div>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 