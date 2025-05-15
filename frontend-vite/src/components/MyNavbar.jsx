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
    <nav className="bg-gray-100 dark:bg-[#2A3132] p-4">
      <div className="flex justify-end items-center space-x-4 text-gray-800 dark:text-white">
        <a href="/" className="hover:underline">home</a>
        <a href="/works" className="hover:underline">#my-works</a>
        <a href="/about-me" className="hover:underline">about-me</a>
        <a href="/contact" className="hover:underline">#contact-me</a>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="navbar-theme-toggle">
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default MyNavbar;
