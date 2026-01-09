import aboutImage from '../assets/about.jpg';
import { useNavigate } from 'react-router-dom';
// import about from '../pages/About';

const ABOUT_CONTENT = {
  title: "About Me",
  paragraphs: [
    "I am a passionate software developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously.",
    "In my free time, I enjoy building personal projects and contributing to open-source code."
  ]
};

const AboutMe = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/about-me');
    // console.log("Read More clicked");
  };

  return (
    <section id="about-me" className="h1-text-size min-h-screen flex">

      <div className="content-wrapper">
        <h2 className="text-6xl md:text-5xl text-left mb-16 text-white font-bold">
          {ABOUT_CONTENT.title}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          {/* Left side text*/}
          <div className="flex-1 md:w-1/2 md:text-left px-20 md:px-12 lg:px-16 py-6 md:ml-16 lg:ml-24">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p className="h2-text-size mb-4" key={index}>{paragraph}</p>
            ))}

            <button 
              onClick={handleReadMore}
              className="mt-4 px-4 py-4 bg-transparent border-2 border-[#C778DD] text-white hover:bg-[#C778DD] transition-colors duration-300">
              Read More
              <span className="transition-transform duration-300 group-hover:translate-x-10">→</span>
            </button>
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

      </div>


    </section>
  );
};

export default AboutMe;
