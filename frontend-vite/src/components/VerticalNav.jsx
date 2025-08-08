import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const VerticalNav = ({ activeSection, sections }) => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(0);
  const [showTimer, setShowTimer] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (section) => {
    if (section.route) {
      navigate(section.route);
    } else {
      scrollToSection(section.id);
    }
  };
  
  {/* added logic to set vertical nav to fade when on intro section */}
  useEffect(() => 
  {
    const handleScroll = () => {
      const isIntroSection = document.getElementById('intro');
      if (isIntroSection) {
        const introRec = isIntroSection.getBoundingClientRect();
        const introHeight = isIntroSection.offsetHeight;
        const scrollProgress = Math.max(0, -introRec.top  - introHeight);
        
        if (scrollProgress < 1){
          if (showTimer) {
            clearTimeout(showTimer);
          }

          setOpacity(1);
          const timer = setTimeout(() => {
            setOpacity(0);
          }, 1500);

          setShowTimer(timer);
        } else {
          {/* past Intro section, don't need timer*/}
          if (showTimer) {
            clearTimeout(showTimer);
            setShowTimer(null);
          }

          const fadeStart = 0.8;
          const fadeOpacity = Math.min(1, Math.max(0, (scrollProgress - fadeStart) / (1 - fadeStart)));
          setOpacity(fadeOpacity);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if(showTimer){
        clearTimeout(showTimer);
      }
    };
  }, []);

  if (opacity === 0) {
    return null;
  } 

  return (
    <div className="vnav-position">
      <div className="vnav-col">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button key={section.id} 
              onClick={
                () => handleNavClick(section)}
                className={`group relative vnav-icons ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 scale-125'
                    : 'bg-transparent border-gray-400 hover:border-blue-600'
                }`}
              title={section.title}
            >
              <span className="vnav-icons-tooltip">
                {section.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalNav;
