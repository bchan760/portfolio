import React from 'react';
import './MyFooter.css';
import githubIcon from '../assets/github.png'; // Adjust path based on your file structure
import linkedinIcon from '../assets/linkedin.png'; 

const MyFooter = () => {
  return (
    <>
      {/*This creates a solid line*/}
      <div style={{ borderTop: "1px solid #ccc", marginTop: "2rem" }}> </div>
      
      <footer style={{ padding: "1rem" }}>
        {/*Logo */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span>Contact me: bchan36@calpoly.edu</span>
        </div>

        {/* Social Media Icons */}
        <div>Social Media</div>
        <a href="https://github.com/bchan760" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" style={{ height: "24px" }} />
        </a>
        <a href="https://www.linkedin.com/in/bill-chan1/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={{ height: "24px" }} />
        </a>

        <div>Web Designer and full stack developer</div>
        <p>© Copyright 2025. Made by Bill Chan</p> 
      </footer>
    </>
  );
};

export default MyFooter;
