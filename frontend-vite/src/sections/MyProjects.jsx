import { Code } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Moodi",
      description: "Webapp to find new songs to add to your playlist.",
      technologies: ["Lit", "Express.js", "PostgreSQL", "Microsoft Azure"]
    },
    {
      id: 2,
      title: "ClAI",
      description: "AI program that reads your resume to automatically create a cover letter.",
      technologies: ["Python", "Flask", "OpenAI API"]
    },
    {
      id: 3,
      title: "todoList",
      description: "React webapp to organize and coordinate your tasks.",
      technologies: ["React.js", "Express.js", "Microsoft Azure"]
    }
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
            <ProjectCard
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
