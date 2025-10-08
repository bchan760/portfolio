import { useEffect, useState } from 'react';

const HeaderNav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const handleResumeClick = () => {
  //   console.log('All env vars: ', import.meta.env);
  //   const resumeURL = import.meta.env.VITE_RESUME_URL;
  //   console.log('Resume URL:', resumeURL);
  //   if (resumeURL) {
  //     window.open(resumeURL, '_blank');
  //   } else {
  //     console.error("Resume failed to load!");
  //   }
  // };
  
  return (
    <nav className="hnav">
      <div className="hnav-theme">
        <a href="/" className="text-underline">home</a>
        <a
          href="/Bill_Chan_Resume.docx.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className='text-underline'
        >
          #resume
        </a>
        <a href="/works" className="text-underline">#my-works</a>
        <a href="/about-me" className="text-underline">#about-me</a>
        <a href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact-me');
          }}
          className="text-underline">
            #contact-me
        </a>

      </div>
      <div className='divider mt-2'></div>
    </nav>
  );
};

export default HeaderNav;
