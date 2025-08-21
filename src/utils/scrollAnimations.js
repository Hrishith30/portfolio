// Scroll Animation Utility using Intersection Observer API
export const initScrollAnimations = () => {
  // Create intersection observer for sections - only fade in, no fade out
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting;
      const intersectionRatio = entry.intersectionRatio;
      
      if (isIntersecting) {
        // Only fade in when scrolling down
        if (intersectionRatio > 0.3) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out', 'animate-partial');
        }
      }
      // Don't add animate-out here - let the scroll event handler manage it
    });
  }, {
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    rootMargin: '-100px 0px'
  });

  // Create intersection observer for content elements - only fade in
  const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting;
      const intersectionRatio = entry.intersectionRatio;
      
      if (isIntersecting) {
        // Only fade in when scrolling down
        if (intersectionRatio > 0.4) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('animate-out', 'animate-partial');
        }
      }
      // Don't add animate-out here - let the scroll event handler manage it
    });
  }, {
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    rootMargin: '-80px 0px'
  });

  // Reset all animations to initial state first
  const resetAllAnimations = () => {
    const allElements = document.querySelectorAll('.section, .section-title, .fade-in-up, .fade-in-left, .fade-in-right');
    allElements.forEach((element) => {
      element.classList.remove('animate-in', 'animate-out', 'animate-partial');
    });
  };

  // Reset animations on initialization
  resetAllAnimations();

  // Observe all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Observe section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach((title) => {
    contentObserver.observe(title);
  });

  // Observe content with animation classes
  const animatedContent = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
  animatedContent.forEach((element) => {
    contentObserver.observe(element);
  });

  // Add staggered animation delays for content within sections
  sections.forEach((section, index) => {
    const animatedElements = section.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach((element, elementIndex) => {
      element.style.transitionDelay = `${0.1 + (elementIndex * 0.1)}s`;
    });
  });

  // Smooth scroll behavior for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced scroll direction detection with velocity and bidirectional animations
  let lastScrollTop = 0;
  let scrollVelocity = 0;
  let scrollDirection = 'down';
  let scrollDistance = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate scroll velocity and distance
    scrollVelocity = Math.abs(scrollTop - lastScrollTop);
    scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    scrollDistance = Math.abs(scrollTop - lastScrollTop);
    
    // Add scroll direction, velocity, and distance classes to body
    document.body.setAttribute('data-scroll-direction', scrollDirection);
    document.body.setAttribute('data-scroll-velocity', scrollVelocity > 15 ? 'fast' : scrollVelocity > 5 ? 'medium' : 'slow');
    document.body.setAttribute('data-scroll-distance', scrollDistance > 50 ? 'large' : scrollDistance > 20 ? 'medium' : 'small');
    
    // Add scroll progress tracking
    const scrollProgress = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.body.setAttribute('data-scroll-progress', Math.round(scrollProgress));
    
    // Enhanced bidirectional animation triggering for both mobile and desktop
    if (scrollDirection === 'up') {
      // When scrolling up, trigger fade-in animations
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Section is in viewport, fade it in
          if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('animate-in');
            section.classList.remove('animate-out', 'animate-partial');
          }
        } else if (rect.top > window.innerHeight + 50) {
          // Section is below viewport, reset to initial state
          section.classList.remove('animate-in', 'animate-out', 'animate-partial');
        } else if (rect.bottom < -50) {
          // Section is above viewport, fade it out
          section.classList.add('animate-out');
          section.classList.remove('animate-in', 'animate-partial');
        }
      });
    } else {
      // When scrolling down, trigger fade in animations for elements coming into view
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Section is in viewport, fade it in
          if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('animate-in');
            section.classList.remove('animate-out', 'animate-partial');
          }
        } else if (rect.top > window.innerHeight + 50) {
          // Section is below viewport, reset to initial state
          section.classList.remove('animate-in', 'animate-out', 'animate-partial');
        } else if (rect.bottom < -50) {
          // Section is above viewport, fade it out
          section.classList.add('animate-out');
          section.classList.remove('animate-in', 'animate-partial');
        }
      });
    }
    
    lastScrollTop = scrollTop;
  });

  // Cleanup function
  return () => {
    sectionObserver.disconnect();
    contentObserver.disconnect();
  };
};

// Utility function to manually trigger animations
export const triggerAnimation = (element, animationClass = 'animate-in') => {
  element.classList.add(animationClass);
};

// Utility function to reset animations
export const resetAnimation = (element, animationClass = 'animate-in') => {
  element.classList.remove(animationClass);
};

// Utility function to add animation classes to elements
export const addAnimationClass = (element, animationType = 'fade-in-up') => {
  element.classList.add(animationType);
};
