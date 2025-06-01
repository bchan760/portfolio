import { Code } from 'lucide-react';
import Card from '../components/Card';

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Moodi",
      description: "Webapp to find new songs to add to your playlist.",
      technologies: ["Lit", "Express.js", "PostgreSQL", "Microsoft Azure"]
    },
  ];

  const handleLearnMore = (projectId) => {
    console.log(`This will be updated later ${projectId}`);
  };

  return (
    <section id="projects" className="myprojects-bg">
      <div className="myprojects-content-wrapper">
        <div className="myprojects-header">
          {/* temp icon until get something better */}
          <Code size={60} className="mx-auto mb-6 text-blue-600" /> 
          <h2 className="myprojects-title">My Projects</h2>
          <p className="myprojects-subtitle">Here are some of my recent works</p>
        </div>
        {/* Grid of project cards, add images later for each project*/}
        <div className="myprojects-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
