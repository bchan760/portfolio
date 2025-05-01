import React from 'react';

const MyNavbar = () => {
  return (
    <nav className="my-navbar" style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}>
      {/* logo */}
      <a href="/" style={{ marginRight: "1rem" }}>Home</a>
      {/* works */}
      {/* about-me */}
      <a href="/contact">Contact</a>
      {/*drop down menu */}
    </nav>
  );
};

export default MyNavbar;
