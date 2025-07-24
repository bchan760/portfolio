import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <section id="intro" className="intro-bg">
      <div className="intro-title-position">
        <div className="mb-6">
          <img 
            src="" 
            alt="Bill's profile picture"
            className="w-48 h-48 rounded-full border-4 border-blue-600 mx-auto object-cover"
          />
        </div>

        <h1 className="intro-title-text">
          Hi, I'm Bill
        </h1>
        <p className="intro-text-color">
            Full Stack Developer & Problem Solver
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
