import React, { Component } from 'react';
import "./style.css"
import ProjectPreviews from '../ProjectPreviews'
import Skills from '../Skills'
import Header from '../Header'
import Tech from '../Tech'
import Education from '../Education'


class Landing extends React.Component {

  render() {
    return (

    <div className="landing-page">
      <div className="landing-hero-image">
        <h1>My name is <strong>Becki</strong></h1>
        <div class="tagline">
          I am a JavaScript Developer and Researcher who loves new technology, science and Formula 1.
        </div>
      </div>

      <section className="landing-section content-padding">
        <h2>About Me</h2>
        <hr />
        <p>I'm a self-driven and creative problem solver with a PhD in Medical Physics and a passion for working with technology, software and cool new ideas. While working in research I using statistical and scripting languages (Python, SPSS, Matlab) for analysis. That inspired me to delve deeper into programming and based on that I'm looking to move from hobby programmer to full-time developer. I spent 3 years as a technical recruiter in a business environment has inspired to dive deeper into understanding technology and software development and now I want to put all the pieces together and become a full time Javascript Developer. </p>
      </section>

      <section className="landing-section content-padding">
        <h2>Technology</h2>
        <hr />
        <Tech />
      </section>

      <section className="landing-section content-padding">
        <h2>Selected <strong>Projects</strong></h2>
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
    )
  }
}

export default Landing
