import { useState, useEffect } from 'react';
import { User, Code, Award, Info, Mail } from 'lucide-react';
import VerticalNav from '../components/VerticalNav';
import BacktoTop from '../components/BacktoTop';
import Intro from '../sections/Intro';
import MyProjects from '../sections/MyProjects';
import Skills from '../sections/Skills';
import AboutMe from '../sections/AboutMe';
import ContactMe from '../sections/ContactMe';

const Landing = () => {
  const [activeSection, setActiveSection] = useState('who-i-am');

  const sections = [
    { id: 'intro', title: 'Introduction', icon: User },
    { id: 'projects', title: 'Projects', icon: Code },
    { id: 'skills', title: 'Skills', icon: Award },
    { id: 'about-me-section', title: 'About Me', icon: Info, route: '/about-me' },
    { id: 'contact-section', title: 'Contact', icon: Mail, route: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        if (!section.route) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="relative">
      <VerticalNav activeSection={activeSection} sections={sections} />
      <BacktoTop />
      
      <Intro />
      <MyProjects />
      <Skills />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Landing;
