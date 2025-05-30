import { useNavigate } from 'react-router-dom';

const WhoIAm = () => {
  const navigate = useNavigate();

  return (
    <section id="who-i-am" className="whoiam-background">
      <div className="whoiam-title-position">
        <h1 className="whoiam-title-text">
          Hello, I'm <span className="text-blue-600">Bill Chan</span>
        </h1>
        <p className="whoiam-text-color">
            Full Stack Dev & Problem Solver
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="button-hover"
          >
            View My Work
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="button-hover-secondary"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;