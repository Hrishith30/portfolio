import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FadeTransition } from './PageTransition';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'Angular', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'ExpressJS', 'SQL', 'PHP', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'DevOps'] },
    { category: 'Programming', items: ['Python', 'Java', 'C++', 'C', 'R'] },
    { category: 'Operating Systems', items: ['Windows', 'Linux', 'Ubuntu', 'Mac'] },
    { category: 'Other', items: ['REST APIs', 'Agile', 'UI/UX', 'Testing'] }
  ];

  const certifications = [
    {
      title: 'ReactJs Developer',
      issuer: 'Udemy',
      date: 'Apr 2025',
      credentialId: 'UC-79ff2414-b113-485d-977d-c61e9ed1a262'
    },
    {
      title: 'Ultimate AWS Certified Developer Associate',
      issuer: 'Udemy',
      date: 'Apr 2025',
      credentialId: 'UC-609bd0b2-dbeb-4ea5-9332-a25e1c70e5ad'
    },
    {
      title: 'JavaScript Developer',
      issuer: 'Udemy',
      date: 'Apr 2025',
      credentialId: 'UC-c81af47c-8af0-4463-b862-3315e3dab077'
    },
    {
      title: 'NodeJs Developer',
      issuer: 'Udemy',
      date: 'Apr 2025',
      credentialId: 'UC-da7871df-dca5-463b-8b4e-9d83f670612e'
    },
    {
      title: 'Full Stack Developer',
      issuer: 'Raise Digital',
      date: 'Dec 2022',
      credentialId: 'UC-da7871df-dca5-463b-8b4e-9d83f670612e'
    },
    {
      title: 'Advanced Cybersecurity',
      issuer: 'Supraja Technologies',
      date: 'May 2021',
      credentialId: 'ST#IS#2176'
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <FadeTransition>
      <section className="about section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="about-content">
            <motion.div 
              className="about-text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Each paragraph with animation */}
              {[1, 2, 3, 4].map((_, index) => (
                <motion.p 
                  key={index}
                  variants={itemVariants}
                >
                  {index === 0 && (
                    "As a Computer Science graduate student at the University of Missouri-Columbia, I combine my expertise in Cybersecurity, AI/ML, and Full Stack Development to create innovative solutions. My academic foundation enables me to bridge theoretical concepts and real-world applications."
                  )}
                  {index === 1 && (
                    "My diverse background encompasses critical roles in both security and development - from implementing advanced machine learning models as a Research Assistant to conducting comprehensive security assessments as a Cybersecurity Analyst. This multifaceted experience has shaped my approach to problem-solving, where I seamlessly integrate security considerations with cutting-edge technological solutions."
                  )}
                  {index === 2 && (
                    "In my current research, I focus on exploring the synergies between machine learning and cybersecurity. My contributions to facial recognition technology and IoT systems, published in international journals, reflect my dedication to advancing technological boundaries while maintaining robust security standards."
                  )}
                  {index === 3 && (
                    "Leveraging my expertise in MERN stack and data science, I architect scalable solutions that meet complex technical demands. My proficiency with modern tools and frameworks, including AWS, Docker, DevOps and PyTorch, enables me to develop secure, efficient applications in both AI and cybersecurity domains."
                  )}
                </motion.p>
              ))}
            </motion.div>
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  className="skill-category"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="skill-category-title">{skillGroup.category}</h3>
                  <ul className="skill-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex} 
                        className="skill-item"
                        whileHover={{ 
                          scale: 1.05,
                          color: '#3b82f6',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="certifications-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-subtitle">Certifications</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="certification-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-date">{cert.date}</p>
                  <p className="certification-id">Credential ID: {cert.credentialId}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </FadeTransition>
  );
};

export default About; 