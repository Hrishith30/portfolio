import React from 'react';
import './Contact.css';
import { FadeTransition } from './PageTransition';

const Contact = () => {
  return (
    <FadeTransition>
      <section className="contact section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content-centered">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions.
              </p>
              <div className="contact-details">
                <a 
                  href="mailto:hrishithrajreddy22@gmail.com" 
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                  <span>hrishithrajreddy22@gmail.com</span>
                </a>
                <a 
                  href="tel:+15736393854" 
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-phone"></i>
                  <span>+1 573 639 3854</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeTransition>
  );
};

export default Contact; 