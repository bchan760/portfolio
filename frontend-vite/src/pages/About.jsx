import React from "react";

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        <span className="my-purple">/</span>about-me
      </h1>

      <section className="sect-spacing">
        <h2 className="h2-text-size">Who am I?</h2>
        <p className="base-text">
          I'm an aspiring Software Engineer with a passion for website building and AI.
          I specialize in React and Node, and love building and learning things that solve real-world problems.
        </p>
      </section>

      <section className="sect-spacing">
        <h2 className="h2-text-size">Background</h2>
        <p className="base-text">
          I studied at Cal Poly SLO, completing my undergrad in 2024. At my time there, I worked as a research assistant 
          for the CSSE department, where we discovered the difficulties underrepresented groups face when obtaining opportunities 
          and collaborations due to demographic characteristics such as ethnicity. 

          I also interned at a local startup called JackRabbit, where we created a marketplace to foster a community that 
          trades used/new construction materials.
        </p>
      </section>

      <section className="sect-spacing">
        <h2 className="h2-text-size">Skills</h2>
        <ul className="list-disc list-inside base-text">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>Python, etc.</li>
        </ul>
      </section>

      <section>
        <h2 className="h2-text">Outside of Code</h2>
        <p className="base-text">
          When I’m not coding, I enjoy music, gaming, cooking, and running.
        </p>
      </section>
    </div>
  );
};

export default About;
