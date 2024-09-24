import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaLock, FaRobot, FaCamera, FaMobileAlt, FaShoppingCart, FaImage, FaLanguage, FaBolt } from 'react-icons/fa';

const ProjectsContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(45deg, #667eea, #764ba2, #6B8DD6, #8E37D7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const ProjectSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #bbb;
  max-width: 600px;
  margin: 1rem auto 0;
  text-align: center;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    transform: translateY(-7px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  }
`;

const ProjectIcon = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #667eea;
  position: relative;
  overflow: visible;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5)) drop-shadow(0 0 12px rgba(102, 126, 234, 0.3));
  transition: filter 0.3s ease;

  ${ProjectCard}:hover & {
    filter: drop-shadow(0 0 12px rgba(102, 126, 234, 0.7)) drop-shadow(0 0 18px rgba(102, 126, 234, 0.5));
  }
`;

const ProjectName = styled(motion.h3)`
  margin: 0;
  font-size: 1.4rem;
  color: #fff;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #667eea;
  }
`;

const ProjectDate = styled(motion.p)`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #bbb;
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
    color: #bbb;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
`;

const projects = [
  {
    title: "Image Classification on CIFAR-10 using CNN",
    date: "Jan 2023",
    description: "Designed and implemented a Convolutional Neural Network (CNN) for classifying images in the CIFAR-10 dataset, achieving 91% accuracy. Enhanced the architecture by integrating DenseNet, improving overall performance. Conducted extensive testing on depixelated images to assess robustness and visualized results with detailed metrics.",
    icon: FaImage,
    tags: ["CNN", "Image Classification", "Deep Learning"],
  },
  {
    title: "Noun-Phrase Detection using Neural Networks",
    date: "Jan 2023",
    description: "Developed a custom neural network model for detecting noun phrases in text. Transformed text data using word embeddings and contextual embeddings. Employed recurrent or convolutional architectures to optimize performance, fine-tuning the model to minimize loss and ensure accuracy across diverse datasets.",
    icon: FaLanguage,
    tags: ["NLP", "Neural Networks", "Text Analysis"],
  },
  {
    title: "SGChain and SDN using Knowledge Graphs in Power Grids",
    date: "Jan 2023",
    description: "Built a system to detect and defend against Distributed Denial-of-Service (DDoS) attacks in power grids. Trained neural networks for Phasor Measurement Units (PMUs) and created knowledge graphs to enhance responses during future attacks. Utilized AWS SageMaker to manage PMU datasets and optimize cyber defense strategies for smart grids.",
    icon: FaBolt,
    tags: ["Cybersecurity", "Power Grids", "Machine Learning"],
  },
  {
    title: "Full-Stack Web Development for E-Commerce Platform",
    date: "Nov 2022 – Mar 2023",
    description: "Contributed to full-stack development projects with a focus on E-Commerce platforms as a Software Developer Intern at Raise Digital. Developed backend services using Flask and MySQL, and integrated deep learning features into APIs to enhance platform performance. Led the creation of an Online Job Search Platform, focusing on web architecture, real-time database integration, and user experience design.",
    icon: FaShoppingCart,
    tags: ["ReactJS", "MongoDB", "Flask", "MySQL"],
  },
  {
    title: "Home Appliance Control via Social Media",
    date: "Dec 2022",
    description: "Engineered a system using Raspberry Pi to remotely control home appliances through web-based commands or TeleBot. This solution enabled automated status updates and remote monitoring, allowing users to manage appliances from a distance, achieving energy savings by controlling devices remotely.",
    icon: FaMobileAlt,
    tags: ["IoT", "Raspberry Pi", "Home Automation"],
  },
  {
    title: "Smart Attendance System Using Facial Recognition",
    date: "Oct 2022",
    description: "Developed an automated system to streamline attendance-taking using facial recognition technology. Integrated camera inputs with face detection algorithms for accurate identification and recorded attendance in an Excel format, reducing manual entry and improving accuracy.",
    icon: FaCamera,
    tags: ["Facial Recognition", "Computer Vision", "Automation"],
  },
  {
    title: "Web Application Security Enhancement using Penetration Testing",
    date: "Jun 2022 – Nov 2022",
    description: "Performed Web Application Penetration Testing (WAPT) and bug hunting to uncover and report critical security vulnerabilities as an Ethical Hacker Intern at Supraja Technologies. Conducted detailed security assessments for various platforms, offering actionable insights to clients for enhancing security measures and vulnerability resolution.",
    icon: FaCode,
    tags: ["Web Security", "Penetration Testing", "Ethical Hacking"],
  },
  {
    title: "Cybersecurity Vulnerability Assessment and Mitigation",
    date: "Jan 2022 – May 2022",
    description: "Conducted comprehensive security breach assessments to identify system vulnerabilities as a Cyber Security Analyst Intern at Supraja Technologies. Developed custom scripts to address specific threats, and performed penetration testing to evaluate system defenses. Generated detailed vulnerability reports for clients, providing recommendations for mitigation and strengthening overall organizational cybersecurity.",
    icon: FaLock,
    tags: ["Cybersecurity", "Vulnerability Assessment", "Penetration Testing"],
  },
  {
    title: "Data Analysis and Chatbot Development for Business Insights",
    date: "Jun 2021 – Dec 2021",
    description: "Conducted data analysis using Linear Discriminant Analysis and Hierarchical Clustering to generate actionable business insights as a Data Science Intern at Personifwy. Developed interactive chatbots using NLP technologies like NLTK and BABI-META, including a hospital chatbot built on Google Dialogflow to streamline patient interactions and improve information retrieval.",
    icon: FaRobot,
    tags: ["Data Analysis", "Chatbot Development", "NLP"],
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
      <ProjectHeader>
        <ProjectTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          My Projects
        </ProjectTitle>
        <ProjectSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Explore my latest work and personal projects showcasing a diverse range of skills and technologies.
        </ProjectSubtitle>
      </ProjectHeader>
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
            <ProjectName>{project.title}</ProjectName>
            <ProjectDate>{project.date}</ProjectDate>
            <TagContainer>
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </TagContainer>
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