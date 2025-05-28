import React from "react";
import Card from "../components/Card";

const About = () => {
  return (
    <div className="about-centering">
      <h1 className="h1-text-size">
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
        <div className="in-line-row">
          <Card
            title="Languages"
            skills={["JavaScript", "Python", "Java"]}
          />
          <Card
            title="Frameworks"
            skills={["React", "Next.js", "Express"]}
          />
          <Card
            title="Technologies"
            skills={["Tailwind CSS", "Git", "REST APIs"]}
          />
          <Card
            title="Databases"
            skills={["MongoDB", "PostgreSQL"]}
          />
        </div>
      </section>

      <section>
        <h2 className="h2-text-size">Outside of Code</h2>
        <p className="base-text">
          When I’m not coding, I enjoy music, gaming, cooking, and running.
        </p>
      </section>
    </div>
  );
};

export default About;
