import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Moodi",
      // image: ,
      description: "Webapp that suggests new songs to seamlessly add to your Spotify playlist.",
      technologies: ["Lit", "Express.js", "PostgreSQL", "Microsoft Azure"],
      githubLink: ''
    },
    {
      id: 2,
      title: "ClAI",
      // image: ,
      description: "AI program that reads your resume to automatically create a cover letter.",
      technologies: ["Python", "Flask", "OpenAI API"],
      githubLink: ''
    },
    {
      id: 3,
      title: "todoList",
      // image: ,
      description: "React webapp to organize and coordinate your tasks.",
      technologies: ["React.js", "Express.js", "Microsoft Azure"],
      githubLink: ''
    },
    {
      id: 4,
      title: "My Research Paper",
      // image: ,
      description: "A comprehensive study on using Machine Learning to provide equitable opportunities in the research field.",
      technologies: ["Scikit-learn", "Python", "Pandas", "Matplotlib"],
      githubLink: 'https://drive.google.com/file/d/10ktzlgwW7tMWVQ17NiFaald_isEe1jo-/view?usp=sharing'
    },
    {
      id: 5,
      title: "Portfolio",
      // image: ,
      description: "You're looking at it right now!",
      technologies: ["React.js", "Vite", "Tailwind CSS"],
      githubLink: ''
    }
  ];

  const handleLearnMore = (githubLink) => {
    // console.log(`This is the link: ${githubLink}`);
    window.open(githubLink, '_blank');
  };

  return (
    <section id="projects" className="myprojects-bg">
      <div className="content-wrapper">
        <div className="text-6xl md:text-5xl text-left mb-16 text-white font-bold">
          <h2 className="myprojects-title">My Projects</h2>
          <p className="myprojects-subtitle">Here are some of my recent works</p>
        </div>
        {/* Grid of project cards, add images later for each project*/}
        <div className="myprojects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
