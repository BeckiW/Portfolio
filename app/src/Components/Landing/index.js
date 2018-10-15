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
          I am a JavaScript Developer and Researcher who is interested in new technology, science and Formula 1.
        </div>
      </div>

      <section className="landing-section">
        <h2>About Me</h2>
        <hr />
        <p>I'm a self-driven and creative problem solver with a PhD in Medical Physics and a passion for working with technology, software and cool new ideas. While working in research I did some programming (using statistical and scripting languages for analysis) and based on that I'm looking to become a full-time developer. I spent 3 years as a technical recruiter in a business environment and this has inspired me to focus on JavaScript as my direction going forward.</p>
      </section>

      <section className="landing-section">
        <h2>Technology</h2>
        <hr />
        <Tech />
      </section>

      <section className="landing-section">
        <h2>My <strong>Projects</strong></h2>
        <hr />
        <ProjectPreviews />
      </section>

      <section className="landing-section">
        <h2>Skills</h2>
        <hr />
        <Skills />
      </section>

      <section className="landing-section">
        <h2>Education</h2>
        <hr />
        <Education />
      </section>

      </div>
    )
  }
}

export default Landing
