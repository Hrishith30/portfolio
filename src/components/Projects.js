import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaLock, FaRobot, FaCamera, FaMobileAlt, FaShoppingCart, FaImage, FaLanguage, FaBolt } from 'react-icons/fa';

const ProjectsContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectIcon = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectTitle = styled(motion.h3)`
  margin: 0;
  font-size: 1.4rem; // Increased from 1.2rem to 1.4rem
  color: #333;
  line-height: 1.3; // Added to improve readability for longer titles
`;

const ProjectDate = styled(motion.p)`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
`;

const ProjectDescription = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1.5rem;
  overflow-y: auto;
  font-size: 0.9rem;
  line-height: 1.6;

  p {
    color: white;
  }
`;

const projects = [
  {
    title: "Data Analysis and Chatbot Development for Business Insights",
    date: "Jun 2021 – Dec 2021",
    description: "Conducted data analysis using Linear Discriminant Analysis and Hierarchical Clustering to generate actionable business insights as a Data Science Intern at Personifwy. Developed interactive chatbots using NLP technologies like NLTK and BABI-META, including a hospital chatbot built on Google Dialogflow to streamline patient interactions and improve information retrieval.",
    icon: FaRobot
  },
  {
    title: "Cybersecurity Vulnerability Assessment and Mitigation",
    date: "Jan 2022 – May 2022",
    description: "Conducted comprehensive security breach assessments to identify system vulnerabilities as a Cyber Security Analyst Intern at Supraja Technologies. Developed custom scripts to address specific threats, and performed penetration testing to evaluate system defenses. Generated detailed vulnerability reports for clients, providing recommendations for mitigation and strengthening overall organizational cybersecurity.",
    icon: FaLock
  },
  {
    title: "Web Application Security Enhancement using Penetration Testing",
    date: "Jun 2022 – Nov 2022",
    description: "Performed Web Application Penetration Testing (WAPT) and bug hunting to uncover and report critical security vulnerabilities as an Ethical Hacker Intern at Supraja Technologies. Conducted detailed security assessments for various platforms, offering actionable insights to clients for enhancing security measures and vulnerability resolution.",
    icon: FaCode
  },
  {
    title: "Smart Attendance System Using Facial Recognition",
    date: "Oct 2022",
    description: "Developed an automated system to streamline attendance-taking using facial recognition technology. Integrated camera inputs with face detection algorithms for accurate identification and recorded attendance in an Excel format, reducing manual entry and improving accuracy.",
    icon: FaCamera
  },
  {
    title: "Home Appliance Control via Social Media",
    date: "Dec 2022",
    description: "Engineered a system using Raspberry Pi to remotely control home appliances through web-based commands or TeleBot. This solution enabled automated status updates and remote monitoring, allowing users to manage appliances from a distance, achieving energy savings by controlling devices remotely.",
    icon: FaMobileAlt
  },
  {
    title: "Full-Stack Web Development for E-Commerce Platform",
    date: "Nov 2022 – Mar 2023",
    description: "Contributed to full-stack development projects with a focus on E-Commerce platforms as a Software Developer Intern at Raise Digital. Developed backend services using Flask and MySQL, and integrated deep learning features into APIs to enhance platform performance. Led the creation of an Online Job Search Platform, focusing on web architecture, real-time database integration, and user experience design.",
    icon: FaShoppingCart
  },
  {
    title: "Image Classification on CIFAR-10 using CNN",
    date: "Jan 2023",
    description: "Designed and implemented a Convolutional Neural Network (CNN) for classifying images in the CIFAR-10 dataset, achieving 91% accuracy. Enhanced the architecture by integrating DenseNet, improving overall performance. Conducted extensive testing on depixelated images to assess robustness and visualized results with detailed metrics.",
    icon: FaImage
  },
  {
    title: "Noun-Phrase Detection using Neural Networks",
    date: "Jan 2023",
    description: "Developed a custom neural network model for detecting noun phrases in text. Transformed text data using word embeddings and contextual embeddings. Employed recurrent or convolutional architectures to optimize performance, fine-tuning the model to minimize loss and ensure accuracy across diverse datasets.",
    icon: FaLanguage
  },
  {
    title: "SGChain and SDN using Knowledge Graphs in Power Grids",
    date: "Jan 2023",
    description: "Built a system to detect and defend against Distributed Denial-of-Service (DDoS) attacks in power grids. Trained neural networks for Phasor Measurement Units (PMUs) and created knowledge graphs to enhance responses during future attacks. Utilized AWS SageMaker to manage PMU datasets and optimize cyber defense strategies for smart grids.",
    icon: FaBolt
  }
];

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = (index) => {
    if (isMobile) {
      setSelectedIndex(selectedIndex === index ? null : index);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <ProjectsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <ProjectsGrid
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            onHoverStart={() => !isMobile && handleInteraction(index)}
            onHoverEnd={() => !isMobile && handleInteraction(null)}
            onClick={() => handleInteraction(index)}
          >
            <ProjectIcon
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <project.icon />
            </ProjectIcon>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDate>{project.date}</ProjectDate>
            <AnimatePresence>
              {selectedIndex === index && (
                <ProjectDescription
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{project.description}</p>
                </ProjectDescription>
              )}
            </AnimatePresence>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects;