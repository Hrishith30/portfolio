import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant and Teaching Assistant",
      company: "University of Missouri",
      period: "Aug 2023 - July 2025",
      description: "Designing and developing a comprehensive website for the Center for Physical and Power Electronics Laboratory, enhancing research visibility and resource accessibility. Assisting in the development and delivery of course materials for advanced cybersecurity topics, including lab sessions and student mentoring. Developing machine learning models, specifically Residual Convolutional Neural Networks, for power loss estimation in ferrite cores. Conducting model training, evaluation, and optimization using PyTorch to ensure efficient and accurate performance.",
      technologies: ["Visual Studio", "Git", "PyTorch", "Bootstrap", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Software Developer Intern",
      company: "Raise Digital",
      period: "Nov 2022 – Mar 2023",
      description: "Developed and deployed full-stack web applications including an E-Commerce platform and an Online Job Search Portal using the MERN stack. Built scalable backend services with Express and MongoDB, and integrated deep learning features into APIs. Designed responsive, user-friendly front-end interfaces using ReactJS, Bootstrap, and CSS. Utilized Git for version control and collaborated within an Agile team using GitFlow. Automated CI/CD workflows using Docker and Jenkins, reducing deployment times and improving release consistency. Implemented Prometheus for real-time application monitoring and Grafana for visualizing performance metrics. Participated in daily stand-ups, sprint planning, and retrospectives, delivering high-quality, production-ready features on schedule. Conducted unit and jest testing to maintain code quality and reliability across the stack.",
      technologies: ["ReactJS", "Bootstrap", "CSS", "HTML", "Node.js", "Express.js", "MongoDB", "Git", "GitFlow", "Docker", "Jenkins", "Prometheus", "Grafana", "Unit Testing", "Jest", "Agile Methodology", "Azure"]
    },
    {
      title: "Cybersecurity Analyst & Ethical Hacking Intern",
      company: "Supraja Technologies",
      period: "Jan 2022 – Nov 2022",
      description: "Developed automation scripts and integrated security tools to detect vulnerabilities early in the development lifecycle, enhancing the robustness of software infrastructure. Collaborated with developers to perform WAPT and simulate cyberattacks, identifying backend logic flaws and implementing secure coding practices and remediation directly into the codebase. Streamlined security assessment workflows by integrating CI/CD pipelines with automated scanning tools, reducing manual effort and accelerating vulnerability resolution.",
      technologies: ["Python", "Kali Linux", "Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "Wireshark", "Bash", "Linux"]
    }
  ];

  return (
    <div className="experience-container">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <p className="job-description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
