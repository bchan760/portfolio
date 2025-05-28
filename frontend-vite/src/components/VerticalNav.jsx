import { useNavigate } from 'react-router-dom';

const VerticalNav = ({ activeSection, sections }) => {
  const navigate = useNavigate();

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

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavClick(section)}
            className={`group relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-blue-600 border-blue-600 scale-125'
                : 'bg-transparent border-gray-400 hover:border-blue-600'
            }`}
            title={section.title}
          >
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VerticalNav;