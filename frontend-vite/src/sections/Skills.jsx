import {useState, useRef, useEffect} from 'react';
import { Award } from 'lucide-react';

const Skills = () => {
  const [hoverWord, setHoverWord] = useState(null);
  const wordCloudRef = useRef(null);

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

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <Award size={60} className="mx-auto mb-6 text-blue-600" />
            <h2 className="h1-text-size">My Skills</h2>
            <p className="h2-text-size">Technologies and tools I work with</p>
        </div>
    </section>
  );
};

export default Skills;