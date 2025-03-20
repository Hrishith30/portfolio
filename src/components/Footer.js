import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/hrishith30', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hrishith-raj-reddy-malgireddy-919750262/', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/Rishi333333', icon: 'fab fa-twitter' }
  ];

  const techStack = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="tech-stack">
            <p>Built with:</p>
            <div className="tech-icons">
              {techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-icon"
                >
                  <i className={tech.icon}></i>
                  <span className="tooltip">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
          
          <p className="copyright">&copy; {new Date().getFullYear()} Hrishith Raj Reddy Malgireddy. All rights reserved.</p>
          
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 