import React, { Component } from 'react';
import "./style.css"


class Skills extends React.Component {

  render() {
    return (

      <div className="education-Component">

        <div className="javascript-skills">
          <h3>Javascript Development</h3>
          <p> {"I'm studying at an intense 12 week program with Technigo, which is focussing on JavaScript (ES6), React, and server-side programming with Node.\
            I am coding everyday, working on individual and group assignments which see us working and producing projects with real clients in an agile environment."} </p>
        </div>

        <div className="phD-skills">
          <h3>PhD Medical Physics </h3>
          <p>Independent research into the development and use of a haemodynamic model system that can evaluate independently the impact of pressure and strain, commensurate with the microvasculature on microvascular endothelial cell function in Type 2 diabetes. </p>
        </div>

        <div className="masters-skills">
          <h3>Masters in Physics</h3>
          <p> 4 year course at The University of Exeter, UK. Modules included: Statistical Physics, Quantum Mechanics, Practical Electronics, and Nuclear and High-Energy Particle Physics. My dissertation used MRI techniques to map previously unfound touch receptors in the skin</p>
        </div>

      </div>

          )}
        }


export default Skills
