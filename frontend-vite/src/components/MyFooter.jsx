import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const MyFooter = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="border-t border-[#C778DD] mt-8"></div>

      <footer className="p-4 text-center text-gray-800 dark:text-white dark:bg-[#2A3132]">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Contact Info (left)*/}
          <div className="flex items-center gap-4">
            <span className="font-semibold">Bill</span>
            <span>Contact me: bchan36@calpoly.edu</span>
          </div>

          {/* Social Media text(right)*/}
          <div className="flex items-center gap-4">
            <span>Social Media</span>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mt-4">
          {/* Web Developer Title (left) */}
          <div>Web Designer and Full Stack Developer</div>

          {/* Social Media icons (right) */}
          <div className="flex gap-4">
            <a href="https://github.com/bchan760" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="h-6" />
            </a>
            <a href="https://www.linkedin.com/in/bill-chan1/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="h-6" />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm">&copy; 2025. Made by Bill Chan</p>
      </footer>
    </>
  );
};

export default MyFooter;
