import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faBriefcase, faLightbulb, faBook, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const experienceItems = [
    {
      title: "Teaching Assistant, University of Missouri",
      description: "Facilitated learning for advanced cybersecurity topics, conducted lab sessions, and provided personalized guidance to students."
    },
    {
      title: "Cybersecurity Analyst and Ethical Hacker, Supraja Technologies",
      description: "Conducted penetration testing, vulnerability assessments, and worked on mitigating cybersecurity threats."
    },
    {
      title: "Software Developer, Raise Digital",
      description: "Worked on full-stack web development, integrated deep learning features into APIs, and contributed to the development of a seamless online job-search platform."
    },
    {
      title: "Data Science Intern, Personifwy",
      description: "Conducted data analysis and developed chatbots using NLP, streamlining user interactions."
    }
  ];

  const projectItems = [
    {
      title: "Smart Attendance System Using Facial Recognition",
      description: "Designed an automated system to improve attendance tracking accuracy, utilizing face detection algorithms."
    },
    {
      title: "Home Appliance Control via Social Media",
      description: "Raspberry Pi-based system to control home appliances remotely, integrating real-time commands for energy savings."
    },
    {
      title: "Image Classification on CIFAR-10 using CNN",
      description: "Achieved 91% accuracy in image classification using a convolutional neural network, improving model performance through DenseNet integration."
    },
    {
      title: "SGChain and SDN using Knowledge Graphs in Power Grids",
      description: "Developed a defense mechanism against DDoS attacks in power grids, utilizing AWS SageMaker for neural network training and knowledge graphs."
    }
  ];

  const publicationItems = [
    {
      title: "Smart Attendance Using Facial Recognition",
      description: "YMER Journal (Volume 22, Issue 01)"
    },
    {
      title: "Smart Home Appliances Operations Design by IoT Devices",
      description: "IJRASET Journal (Volume 11, Issue VI)"
    }
  ];

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="about-container">
      <div className="about-section" ref={el => sectionRefs.current.push(el)}>
        <h3><FontAwesomeIcon icon={faUser} /> Hrishith Raj Reddy Malgireddy</h3>
        <h4>Cybersecurity Analyst | Software Developer | Data Scientist</h4>
        <p>
          I am a passionate computer science professional with a keen focus on leveraging technology to solve real-world problems. I am currently pursuing a Master of Science in Computer Science at the University of Missouri, Columbia, where I have the opportunity to deepen my knowledge in cybersecurity, data science, and full-stack development. I hold a Bachelor of Technology in Computer Science and Engineering from Sreyas Institute of Engineering and Technology, which laid the foundation for my technical skills.
        </p>
      </div>

      <div className="about-section" ref={el => sectionRefs.current.push(el)}>
        <h3><FontAwesomeIcon icon={faCode} /> Skills & Expertise</h3>
        <p>
          I have hands-on experience with several programming languages such as C, C++, Python, MySQL, PHP, Java, and JavaScript, and I am proficient in frameworks and tools including TensorFlow, PyTorch, Flask, AWS, and ReactJS. My knowledge extends to advanced cybersecurity practices, data analysis, and full-stack development, with strong expertise in both backend services and front-end design. I work confidently across diverse operating systems like Windows, Linux, and Mac, ensuring a seamless development environment.
        </p>
      </div>

      <div className="about-section" ref={el => sectionRefs.current.push(el)}>
        <h3><FontAwesomeIcon icon={faBriefcase} /> Professional Experience</h3>
        <ul>
          {experienceItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-section" ref={el => sectionRefs.current.push(el)}>
        <h3><FontAwesomeIcon icon={faLightbulb} /> Key Projects</h3>
        <ul>
          {projectItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-section" ref={el => sectionRefs.current.push(el)}>
        <h3><FontAwesomeIcon icon={faBook} /> Publications</h3>
        <ul>
          {publicationItems.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-section" ref={el => sectionRefs.current.push(el)}>
        <h3><FontAwesomeIcon icon={faRocket} /> Looking Ahead</h3>
        <p>
          I am constantly seeking opportunities to innovate and apply my knowledge in cybersecurity, data science, and software development to create impactful solutions. With a strong foundation in computer science, a commitment to continuous learning, and a drive for excellence, I am ready to contribute to challenging and transformative projects.
        </p>
      </div>
    </div>
  );
};

const styles = `
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .about-section {
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, opacity 0.5s ease-out;
    opacity: 0;
    transform: translateY(20px);
  }

  .about-section.fade-in-section {
    opacity: 1;
    transform: translateY(0);
  }

  .about-section:hover {
    transform: scale(1.05);
  }

  .about-section h3 {
    color: #333;
    margin-bottom: 10px;
  }

  .about-section h3 svg {
    margin-right: 10px;
  }

  .about-section ul {
    padding-left: 20px;
  }

  .about-section li {
    margin-bottom: 10px;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default About;