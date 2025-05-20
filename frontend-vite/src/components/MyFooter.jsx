import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const MyFooter = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="footer-divider"></div>

      <footer className="footer">
        <div className="footer-section">
          {/* Contact Info (left)*/}
          <div className="footer-spacing">
            <span className="font-semibold">Bill</span>
            <span className="text-underline">Contact me: bchan36@calpoly.edu</span>
          </div>

          {/* Social Media text(right)*/}
          <div className="footer-spacing">
            <span>Social Media</span>
          </div>
        </div>

        <div className="footer-section">
          {/* Web Developer Title (left) */}
          <div>Web Designer and Full Stack Developer</div>

          {/* Social Media icons (right) */}
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
        <p className="text-sm">&copy; {new Date().getFullYear()}. Made by Bill Chan</p>
      </footer>
    </>
  );
};

export default MyFooter;
