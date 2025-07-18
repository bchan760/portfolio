import { useState, useEffect } from 'react';
import { User, Code, Award, Info, Mail } from 'lucide-react';
import VerticalNav from '../components/VerticalNav';
import BacktoTop from '../components/BacktoTop';
import Intro from '../sections/Intro';
import MyProjects from '../sections/MyProjects';
import Skills from '../sections/Skills';
import AboutMe from '../sections/AboutMe';
import ContactMe from '../sections/ContactMe';
import MyFooter from '../components/MyFooter';

const Landing = () => {
  const [activeSection, setActiveSection] = useState('who-i-am');
  const [isAtBottom, setIsAtBottom] = useState(false);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: User },
    { id: 'projects', title: 'Projects', icon: Code },
    { id: 'skills', title: 'Skills', icon: Award },
    { id: 'about-me', title: 'About Me', icon: Info },
    { id: 'contact', title: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isNearBottom = winHeight + scrollTop >= docHeight - 100;
      setIsAtBottom(isNearBottom);

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
      {/* <AboutMe /> */}
      <Skills />
      <AboutMe />
      <ContactMe />
      <MyFooter isAtBottom={isAtBottom}/>
    </div>
  );
};

export default Landing;
