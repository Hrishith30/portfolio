import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faBriefcase, faLightbulb, faBook, faRocket } from '@fortawesome/free-solid-svg-icons';

const Section = ({ icon, title, content }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      ref={ref}
      className="about-section" 
      variants={sectionVariants} 
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} className="section-icon" />
      </div>
      <h2>{title}</h2>
      {content}
    </motion.div>
  );
};

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

  return (
    <ParallaxProvider>
      <div className="about-container">
        <Parallax y={[-10, 10]} tagOuter="figure">
          <h1 className="about-header">
            <span className="animated-text">About Me</span>
          </h1>
        </Parallax>

        <div className="sections-container">
          <Section icon={faUser} title="Hrishith Raj Reddy Malgireddy" 
            content={
              <>
                <h3>Cybersecurity Analyst | Software Developer | Data Scientist</h3>
                <p>Passionate computer science professional pursuing an MS in Computer Science at the University of Missouri, Columbia. Focused on cybersecurity, data science, and full-stack development, with a drive to solve real-world problems through innovative technology solutions.</p>
              </>
            }
          />

          <Section icon={faCode} title="Skills & Expertise" 
            content={
              <p>Proficient in C, C++, Python, MySQL, PHP, Java, and JavaScript. Experienced with TensorFlow, PyTorch, Flask, NodeJS, AWS, and ReactJS. Advanced knowledge in cybersecurity, data analysis, and full-stack development. Comfortable working across Windows, Linux, and Mac environments.</p>
            }
          />

          <Section icon={faBriefcase} title="Professional Experience" 
            content={
              <ul>
                {experienceItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            }
          />

          <Section icon={faLightbulb} title="Key Projects" 
            content={
              <ul>
                {projectItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            }
          />

          <Section icon={faBook} title="Publications" 
            content={
              <ul>
                {publicationItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            }
          />

          <Section icon={faRocket} title="Looking Ahead" 
            content={
              <p>Constantly seeking opportunities to innovate and apply my knowledge in cybersecurity, data science, and software development to create impactful solutions. With a strong foundation in computer science, a commitment to continuous learning, and a drive for excellence, I am ready to contribute to challenging and transformative projects.</p>
            }
          />
        </div>
      </div>
    </ParallaxProvider>
  );
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #2c3e50, #1a1a1a 40%, #000000 60%, #2c3e50);
  }

  .about-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    transition: all 0.3s ease-in-out;
  }

  .about-header {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  .animated-text {
    display: inline-block;
    position: relative;
    animation: fadeInUp 1.5s ease-out, gradientText 5s ease-in-out infinite;
    background: linear-gradient(45deg, #667eea, #764ba2, #6B8DD6, #8E37D7);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gradientText {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .sections-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.3s ease-in-out;
  }

  .about-section {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease-in-out, box-shadow 0.3s ease, transform 0.3s ease;
  }

  .about-section:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    transform: translateY(-7px);
  }

  .about-section:hover .icon-container {
    transform: rotate(360deg);
  }

  .icon-container {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #667eea, #764ba2, #6B8DD6, #8E37D7);
    background-size: 300% 300%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out, transform 0.6s ease-in-out;
    animation: gradientIcon 5s ease-in-out infinite;
  }

  .section-icon {
    font-size: 1.8rem;
    color: white;
  }

  @keyframes gradientIcon {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h2 {
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
    font-size: 1.8rem;
  }

  h3 {
    color: #ddd;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  p, ul {
    color: #bbb;
    line-height: 1.6;
    font-size: 1rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .about-container {
      padding: 10px;
    }

    .about-header {
      font-size: 2rem;
    }

    .about-section {
      padding: 15px;
    }

    .icon-container {
      width: 50px;
      height: 50px;
    }

    .section-icon {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p, ul {
      font-size: 0.9rem;
    }

    li {
      margin-bottom: 8px;
    }
  }

  @media (max-width: 480px) {
    .about-header {
      font-size: 1.8rem;
    }

    .about-section {
      padding: 12px;
    }

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1rem;
    }

    p, ul {
      font-size: 0.85rem;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default About;