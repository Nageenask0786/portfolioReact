import React from "react";


import "./styles.css";
const description =
  "I am graduate seeking entry level opportunities in software development,I am an enthusiastic and dedicated trainee at Nxtwave. My trainning program with Nxtwave, combined me with hands-on experience in full stack web development projects, that has equipped me with a strong foundation in various technologies";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Inclusive design",
  "Mobile user interfaces",
  "Backend Development",
  "Frontend Development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skill-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 1rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;