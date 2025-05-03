import React from 'react';

const MyNavbar = () => {
  return (
    <nav className="my-navbar" style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}>
      {/* logo */}
      <a href="/" style={{ marginRight: "1rem" }}>Home</a>
      {/* works */}
      <a href="/works" style={{ marginRight: "1rem" }}>#works</a>
      {/* about-me */}
      <a href="/about-me" style={{ marginRight: "1rem" }}>about-me</a>
      <a href="/contact" style={{ marginRight: "1rem" }}>#contact</a>
      {/*drop down menu */}
    </nav>
  );
};

export default MyNavbar;
