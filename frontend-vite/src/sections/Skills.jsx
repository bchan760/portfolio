import { Award } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', category: 'Frontend', level: 90 },
    { name: 'Node.js', category: 'Backend', level: 85 },
    { name: 'Python', category: 'Backend', level: 80 },
    { name: 'TypeScript', category: 'Frontend', level: 85 },
    { name: 'MongoDB', category: 'Database', level: 75 },
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