
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const MyFooter = ({ isAtBottom }) => {
  return (
      <footer className={`footer transition-opacity duration-300 
        ${isAtBottom ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
      }>
        {/* Divider Line */}
        <div className="divider"></div>
        
        <div className='px-8'>
          <div className="footer-section">
            <div className="footer-spacing">
              <span className="font-semibold">Bill</span>
              <span className="text-underline">Contact me: bchan36@calpoly.edu</span>
            </div>
            <div className="footer-spacing">
              <span>Social Media</span>
            </div>
          </div>

          <div className="footer-section">
            <div>Web Designer and Full Stack Developer</div>
            <div className="footer-icons">
              <a href="https://github.com/bchan760" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="h-6" />
              </a>
              <a href="https://www.linkedin.com/in/bill-chan1/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="h-6" />
              </a>
            </div>
          </div>

          {/* Footer Copyright Text */}
          <p className="text-sm text-center mt-18 mb-2">&copy; {new Date().getFullYear()}. Made by Bill</p>
        </div>
      </footer>
  );
};

export default MyFooter;
