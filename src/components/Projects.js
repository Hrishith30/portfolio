import React from 'react';
import './Projects.css';
import { SlideTransition } from './PageTransition';
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Hrishith30/e-commerce'
    },
    {
      title: 'Tracker',
      description: 'A website to track your daily tasks, goals, diary, budget, and habits. Built with React and features real-time updates and data persistence.',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
      github: 'https://github.com/Hrishith30/tracker',
      demo: 'https://tracker-y3zc.onrender.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled with CSS. Features smooth animations and a clean, professional design.',
      technologies: ['React', 'CSS3', 'JavaScript', 'React Router'],
      github: 'https://github.com/Hrishith30/portfolio',
      demo: 'https://hrishith30.github.io/portfolio/'
    },
    {
      title: 'Mars Frontend Form',
      description: 'A modern, responsive form built with React and styled with CSS. Features smooth animations and a clean, professional design and also has Jest validation',
      technologies: ['React', 'CSS3', 'JavaScript', 'Jest'],
      github: 'https://github.com/Hrishith30/mars',
      demo: 'https://mars-mn3d.onrender.com'
    },
    {
      title: 'Web Music Player',
      description: 'A simple, responsive music player built with HTML, CSS, JavaScript and Bootstrap. Made for personal use.',
      technologies: ['HTML', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/Hrishith30/mp3',
      demo: 'https://hrishith30.github.io/mp3/'
    },
    {
      title: 'Layouts ',
      description: 'A simple, responsive layouts built with Reactjs and styled with CSS. Made for personal use.',
      technologies: ['Reactjs', 'CSS3', 'Nextjs', 'Tailwindcss'],
      github: 'https://github.com/Hrishith30/designs',
    }
  ];

  return (
    <SlideTransition>
      <section className="projects section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    className={`btn btn-outline ${!project.demo ? 'full-width' : ''}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </SlideTransition>
  );
};

export default Projects; 