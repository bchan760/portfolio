const HeaderNav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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

        <a href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}className="text-underline"
        >
          #my-works
        </a>

        <a href="#about-me" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about-me');
          }}
          className="text-underline"
        >
          #about-me
        </a>

        <a href="#contact-me" 
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
