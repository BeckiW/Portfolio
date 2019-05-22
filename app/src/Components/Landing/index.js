import React, { Component } from "react";
import "./style.css";
import ProjectPreviews from "../ProjectPreviews";
import Skills from "../Skills";
import Header from "../Header";
import Tech from "../Tech";
import Education from "../Education";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-hero-image">
          <h1>
            My name is <strong>Becki</strong>
          </h1>
          <div class="tagline">
            I am a JavaScript Developer and Researcher who loves new technology,
            science and Formula 1.
          </div>
        </div>

        <section className="landing-section content-padding">
          <h2>About Me</h2>
          <hr />
          <p>
            I am a self-driven and creative problem solver with a PhD in Medical
            Physics and a passion for working with technology, software and cool
            new ideas who is currently digging deep into JavaScript(ES6+),
            React, Redux, and Node.js. <br /> <br />
            While working in research I was using statistical and scripting
            languages (Python, SPSS, Matlab) for analysis and that inspired me
            to delve deeper into programming and eventually I made the leap and
            moved from hobby programmer to full-time developer. <br /> <br />
            Prior to that I spent 3 years as a technical recruiter, leading my
            own team, and working with a range of companies from exciting
            startups to worldwide brands such as Apple. In this time I was able
            to dive deeper into understanding the buisness aspects of technology
            choices and team building and now I am putting all these pieces
            together. <br /> <br />
            Tech: HTML5, CSS, Javascript, React, Redux, Node, MongoDB
          </p>
        </section>

        <section className="landing-section content-padding">
          <h2>Technology</h2>
          <hr />
          <Tech />
        </section>

        <section className="landing-section content-padding">
          <h2>
            Selected <strong>Projects</strong>
          </h2>
          <hr />
          <ProjectPreviews />
        </section>

        <section className="landing-section content-padding">
          <h2>Skills</h2>
          <hr />
          <Skills />
        </section>

        <section className="landing-section content-padding">
          <h2>Education</h2>
          <hr />
          <Education />
        </section>
      </div>
    );
  }
}

export default Landing;
