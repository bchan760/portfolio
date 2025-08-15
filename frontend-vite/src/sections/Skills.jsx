import {useState, useRef, useEffect} from 'react';
import { Award } from 'lucide-react';

const Skills = () => {
  const [hoverWord, setHoverWord] = useState(null);
  const wordCloudRef = useRef(null);
  const [wordPosition, setWordPosition] = useState([]);

  const words = [
    { name: 'React', category: 'Frameworks/Libraries', level: 85 },
    { name: 'Node.js', category: 'Frameworks/Libraries', level: 85 },
    { name: 'Python', category: 'Languages', level: 90 },
    { name: 'TypeScript', category: 'Languages', level: 85 },
    { name: 'JavaScript', category: 'Languages', level: 85 },
    { name: 'SQL', category: 'Languages', level: 80 },
    { name: 'MongoDB', category: 'Databases', level: 75 },
    { name: 'PostgreSQL', category: 'Databases', level: 75 },
    { name: 'MySQL', category: 'Databases', level: 75 },
    { name: 'Git', category: 'Tools', level: 90 }
  ];

  // create that wordCloud (of skills)
  useEffect(() => {
    const genWordPositions = () => {
      if (!wordCloudRef) return;

      const positions = [];
      const goldenAngle = 137.5;
      const containerRect = wordCloudRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      words.forEach((word, index) => {
        // start from middle...
        if (index === 0){
          positions.push({x: centerX, y: centerY});
        }
        //then responsively go crazy ahhh go stupid
        const angle = (index * goldenAngle)  / (Math.PI / 180);
        const maxRadius = Math.min(containerRect.width, containerRect.height) * 0.4;
        const radius = Math.sqrt(index) * (maxRadius / Math.sqrt(words.length));

        let x = centerX + Math.cos(angle) * radius;
        let y = centerY + Math.sin(angle) * radius;
        
        const paddingX = containerWidth * 0.1;
        const paddingY = containerHeight * 0.15;
        
        x = Math.max(paddingX, Math.min(containerWidth - paddingX, x));
        y = Math.max(paddingY, Math.min(containerHeight - paddingY, y));
        
        positions.push({ x, y });
      });

      setWordPosition(positions);
    };

    genWordPositions();

    const handleResize = () => genWordPositions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCategoryColors = (category) => {
    const colors = {
      'Frameworks/Libraries': 'text-blue-500',
      'Languages': 'text-green-500',
      'Databases': 'text-red-500',
      'Tools': 'text-purple-500'
    };
    return colors[category] || 'text-gray-500';
  };

  const getFontSize = (level) => {
    return `${Math.max(12, level / 2)}px`;
  };

  const getHoverTransform = (word) => {
    return isHovered 
    ? 'scale(1.25) z-10 shadow-2xl' 
    : 'scale(1)';
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <Award size={60} className="mx-auto mb-6 text-blue-600" />
            <h2 className="h1-text-size">My Skills</h2>
            <p className="h2-text-size">Technologies and tools I work with</p>
        </div>

        <div
          ref={wordCloudRef}
          className="relative w-full h-48 mt-8"
          style={{ 
            minHeight: '300px', 
            maxHeight: '500px' 
          }}
        >
        {words.map((word, index) => {
          const position = wordPosition[index] || {x: 0, y: 0};

          return (
            <div
              key={word.name}
              className="absolute text-lg font-bold cursor-pointer"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoverWord(word.name)}
              onMouseLeave={() => setHoverWord(null)}
            >
              {word.name}
            </div>
          );
        })}
        </div>
    </section>
  );
};

export default Skills;
