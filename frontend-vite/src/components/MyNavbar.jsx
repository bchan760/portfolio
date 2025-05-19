import React, { useEffect, useState } from 'react';

const MyNavbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = storedTheme === 'dark' || (
      !storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-theme">
        <a href="/" className="text_underline">home</a>
        <a href="/works" className="text_underline">#my-works</a>
        <a href="/about-me" className="text_underline">about-me</a>
        <a href="/contact" className="text_underline">#contact-me</a>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="navbar-theme-toggle">
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default MyNavbar;
