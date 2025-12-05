import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  
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
      title: 'React Native Developer',
      issuer: 'Udemy',
      date: 'Nov 2025',
      credentialId: 'UC-c6fc19ee-191a-42d5-aabf-524a8b73073e'
    },
    {
      title: 'Advanced Cybersecurity',
      issuer: 'Supraja Technologies',
      date: 'May 2021',
      credentialId: 'ST#IS#2176'
    }
  ];

  useEffect(() => {
    // This component will be observed by the scroll animation system
    // The ref is attached to the main section element
  }, []);

  return (
    <section className="about section" ref={aboutRef}>
        <div className="container">
          <h2 
            className="section-title"
          >
            About Me
          </h2>
          <div className="about-content">
            <div 
              className="about-text"
            >
              {/* Each paragraph with animation */}
              <p>
                As a Computer Science graduate student at the University of Missouri-Columbia, I combine my expertise in Cybersecurity, AI/ML, and Full Stack Development to create innovative solutions. My academic foundation enables me to bridge theoretical concepts and real-world applications.
              </p>
              <p>
                My diverse background encompasses critical roles in both security and development - from implementing advanced machine learning models as a Research Assistant to conducting comprehensive security assessments as a Cybersecurity Analyst. This multifaceted experience has shaped my approach to problem-solving, where I seamlessly integrate security considerations with cutting-edge technological solutions.
              </p>
              <p>
                In my current research, I focus on exploring the synergies between machine learning and cybersecurity. My contributions to facial recognition technology and IoT systems, published in international journals, reflect my dedication to advancing technological boundaries while maintaining robust security standards.
              </p>
              <p>
                Leveraging my expertise in MERN stack and data science, I architect scalable solutions that meet complex technical demands. My proficiency with modern tools and frameworks, including AWS, Docker, DevOps and PyTorch, enables me to develop secure, efficient applications in both AI and cybersecurity domains.
              </p>
            </div>
            <div 
              className="skills-grid"
            >
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className="skill-category"
                >
                  <h3 className="skill-category-title">{skillGroup.category}</h3>
                  <ul className="skill-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex} 
                        className="skill-item"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="certifications-section"
          >
            <h2 className="section-subtitle">Certifications</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="certification-card"
                >
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-date">{cert.date}</p>
                  <p className="certification-id">Credential ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default About; 