import React from 'react';

const MyNavbar = () => {
  return (
    <nav className="my-navbar" style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}>
      <a href="/" style={{ marginRight: "1rem" }}>Home</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};

export default MyNavbar;
