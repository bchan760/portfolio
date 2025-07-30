import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const VerticalNav = ({ activeSection, sections }) => {
  const navigate = useNavigate();
  const [opacity, setOpacity] = state(0);

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

  useEffect(() => {
    const handleScroll = () => {
      
    }
  });

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
