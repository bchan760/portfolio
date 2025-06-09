const ProjectCard = ({ 
  id, 
  title, 
  description, 
  technologies = [], 
  icon, 
  iconSize = 48,
  onLearnMore 
}) => {
  const IconComponent = icon;
  
  return (
    <div key={id} className="card-container">
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{description}</p>
      <div className="card-tech-container">
        {technologies.map((t) => (
          <span key={t} className="card-tech-tags">
            {t}
          </span>
        ))}
      </div>
      <button className="card-learnmore" onClick={() => onLearnMore && onLearnMore(id)}>
        Learn More <span className="card-arrow">→</span>
      </button>
    </div>
  );
};

export default ProjectCard;
