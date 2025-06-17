import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <section id="intro" className="intro-background">
      <div className="intro-title-position">
        <h1 className="intro-title-text">
          Hi, I'm <span className="text-blue-600">Bill Chan</span>
        </h1>
        <p className="intro-text-color">
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

export default Intro;
