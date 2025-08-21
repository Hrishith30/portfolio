import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initGA, logPageView } from './utils/analytics';
import { initScrollAnimations } from './utils/scrollAnimations';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    initGA();
    logPageView();
    
    // Initialize scroll animations
    const cleanupAnimations = initScrollAnimations();
    
    // Cleanup function
    return () => {
      if (cleanupAnimations) cleanupAnimations();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
      <button className="theme-toggle" onClick={toggleTheme}>
        <div className="toggle-slider">
          <div className="toggle-knob">
            <span className="toggle-icon-sun">☀️</span>
            <span className="toggle-icon-moon">🌙</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default App;
