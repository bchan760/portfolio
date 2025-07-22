import aboutImage from '../assets/about.jpg';

const ABOUT_CONTENT = {
  title: "About Me",
  paragraphs: [
    "I am a passionate software developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously.",
    "In my free time, I enjoy building personal projects and contributing to open-source code."
  ]
};

const AboutMe = () => {
  return (
    <section id="about-me" className="h1-text-size">
      <h2 className="text-center mb-8">{ABOUT_CONTENT.title}</h2>

      <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
        {/* Left side text*/}
        <div className="flex-1 md:w-1/2 md:text-left justify-center px-14 py-6">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <p className="h2-text-size mb-4" key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Right side image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center">
            <img 
              src={aboutImage} 
              alt="Profile" 
              className="rounded-full w-full h-full shadow-lg" 
              />
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutMe;
