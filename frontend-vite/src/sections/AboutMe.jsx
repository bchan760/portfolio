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
      <h2 className="text-center">{ABOUT_CONTENT.title}</h2>

      <div className="flex flex-col items-center gap-8 mt-4">
        {/* Left side text*/}
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <p className="h2-text-size" key={index}>{paragraph}</p>
        ))}

        {/* Right side image */}
        <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
          <img src={aboutImage} alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>
      </div>


    </section>
  );
};

export default AboutMe;
