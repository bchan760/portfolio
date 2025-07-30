import { useEffect, useState } from 'react';

const HeaderNav = () => {
  const [isDark, setIsDark] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <nav className="hnav">
      <div className="hnav-theme">
        <a href="/" className="text-underline">home</a>
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

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="hnav-theme-toggle">
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className='divider mt-2'></div>
    </nav>
  );
};

export default HeaderNav;
