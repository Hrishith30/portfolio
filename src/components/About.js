import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faBriefcase, faLightbulb, faBook, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const experienceItems = [
    { title: "Teaching Assistant, University of Missouri", description: "Facilitated learning for advanced cybersecurity topics, conducted lab sessions, and provided personalized guidance to students." },
    { title: "Cybersecurity Analyst and Ethical Hacker, Supraja Technologies", description: "Conducted penetration testing, vulnerability assessments, and worked on mitigating cybersecurity threats." },
    { title: "Software Developer, Raise Digital", description: "Worked on full-stack web development, integrated deep learning features into APIs, and contributed to the development of a seamless online job-search platform." },
    { title: "Data Science Intern, Personifwy", description: "Conducted data analysis and developed chatbots using NLP, streamlining user interactions." }
  ];

  const projectItems = [
    { title: "Smart Attendance System Using Facial Recognition", description: "Designed an automated system to improve attendance tracking accuracy, utilizing face detection algorithms." },
    { title: "Home Appliance Control via Social Media", description: "Raspberry Pi-based system to control home appliances remotely, integrating real-time commands for energy savings." },
    { title: "Image Classification on CIFAR-10 using CNN", description: "Achieved 91% accuracy in image classification using a convolutional neural network, improving model performance through DenseNet integration." },
    { title: "SGChain and SDN using Knowledge Graphs in Power Grids", description: "Developed a defense mechanism against DDoS attacks in power grids, utilizing AWS SageMaker for neural network training and knowledge graphs." }
  ];

  const publicationItems = [
    { title: "Smart Attendance Using Facial Recognition", description: "YMER Journal (Volume 22, Issue 01)" },
    { title: "Smart Home Appliances Operations Design by IoT Devices", description: "IJRASET Journal (Volume 11, Issue VI)" }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <ParallaxProvider>
      <div className="about-container">
        <Parallax y={[-20, 20]} tagOuter="figure">
          <div className="about-header">
            <h1>About Me</h1>
            <div className="animated-background"></div>
          </div>
        </Parallax>

        <motion.div className="about-section" variants={sectionVariants} initial="hidden" animate="visible">
          <div className="icon-container">
            <FontAwesomeIcon icon={faUser} className="section-icon" />
          </div>
          <h2>Hrishith Raj Reddy Malgireddy</h2>
          <h3>Cybersecurity Analyst | Software Developer | Data Scientist</h3>
          <p>I am a passionate computer science professional with a keen focus on leveraging technology to solve real-world problems. Currently pursuing a Master of Science in Computer Science at the University of Missouri, Columbia, deepening my knowledge in cybersecurity, data science, and full-stack development.</p>
        </motion.div>

        <motion.div className="about-section" variants={sectionVariants} initial="hidden" animate="visible">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCode} className="section-icon" />
          </div>
          <h2>Skills & Expertise</h2>
          <p>Proficient in C, C++, Python, MySQL, PHP, Java, and JavaScript. Experienced with TensorFlow, PyTorch, Flask, AWS, and ReactJS. Advanced knowledge in cybersecurity, data analysis, and full-stack development. Comfortable working across Windows, Linux, and Mac environments.</p>
        </motion.div>

        <motion.div className="about-section" variants={sectionVariants} initial="hidden" animate="visible">
          <div className="icon-container">
            <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
          </div>
          <h2>Professional Experience</h2>
          <ul>
            {experienceItems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="about-section" variants={sectionVariants} initial="hidden" animate="visible">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLightbulb} className="section-icon" />
          </div>
          <h2>Key Projects</h2>
          <ul>
            {projectItems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="about-section" variants={sectionVariants} initial="hidden" animate="visible">
          <div className="icon-container">
            <FontAwesomeIcon icon={faBook} className="section-icon" />
          </div>
          <h2>Publications</h2>
          <ul>
            {publicationItems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="about-section" variants={sectionVariants} initial="hidden" animate="visible">
          <div className="icon-container">
            <FontAwesomeIcon icon={faRocket} className="section-icon" />
          </div>
          <h2>Looking Ahead</h2>
          <p>Constantly seeking opportunities to innovate and apply my knowledge in cybersecurity, data science, and software development to create impactful solutions. With a strong foundation in computer science, a commitment to continuous learning, and a drive for excellence, I am ready to contribute to challenging and transformative projects.</p>
        </motion.div>
      </div>
    </ParallaxProvider>
  );
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .about-header {
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 60px;
  }

  .about-header h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    z-index: 2;
  }

  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
  }

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .about-section {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  }

  .about-section:hover {
    transform: translateY(-10px);
  }

  .icon-container {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .section-icon {
    font-size: 3rem;
    color: white;
  }

  h2 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.2rem;
  }

  h3 {
    color: #666;
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.4rem;
  }

  p, ul {
    color: #444;
    line-height: 1.8;
    font-size: 1.1rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    .about-header h1 {
      font-size: 3rem;
    }

    .about-section {
      padding: 30px;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p, ul {
      font-size: 1rem;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default About;