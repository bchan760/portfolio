import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const MyFooter = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="border-t border-[#C778DD] mt-8"></div>

      <footer className="p-4 text-center text-gray-800 dark:text-white dark:bg-gray-900">
        {/* Contact Info */}
        <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
          <span className="font-semibold">Bill</span>
          <span>Contact me: bchan36@calpoly.edu</span>
        </div>

        {/* Social Media */}
        <div className="mb-2">Social Media</div>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/bchan760" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="h-6" />
          </a>
          <a href="https://www.linkedin.com/in/bill-chan1/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="h-6" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="mb-1">Web Designer and Full Stack Developer</div>
        <p className="text-sm">&copy; 2025. Made by Bill Chan</p>
      </footer>
    </>
  );
};

export default MyFooter;
