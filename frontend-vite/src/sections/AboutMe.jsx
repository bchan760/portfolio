const ABOUT_CONTENT = {
  title: "About Me",
  paragraphs: [
    "I am a passionate software developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously.",
    "In my free time, I enjoy building personal projects and contributing to open-source code."
  ]
};

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me base-text">
      <h2>{ABOUT_CONTENT.title}</h2>
      {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default AboutMe;