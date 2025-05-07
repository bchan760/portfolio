import React from 'react';

const MyNavbar = () => {
  return (
    <nav className="my-navbar" style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}>
      {/* logo */}
      <a href="/" style={{ marginRight: "1rem" }}>home</a>
      {/* works */}
      <a href="/works" style={{ marginRight: "1rem" }}>#my-works</a>
      {/* about-me */}
      <a href="/about-me" style={{ marginRight: "1rem" }}>about-me</a>
      <a href="/contact" style={{ marginRight: "1rem" }}>#contact-me</a>
      {/*drop down menu for dark/light mode*/}
    </nav>
  );
};

export default MyNavbar;
