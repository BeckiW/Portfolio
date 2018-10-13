import React, { Component } from 'react';
import "./style.css"


class Skills extends React.Component {

  render() {
    return (

      <div className="skills-Component">
        <h1>Skills</h1>

          <div className="Coding-skills">
            <h2>Coding</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS5</li>
              <li>SASS</li>
              <li>Javascript (ES6)</li>
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Python for data analysis</li>
            </ul>
          </div>

          <div className="Toolbox-skills">
            <h2>Toolbox</h2>
            <ul>
              <li>Atom</li>
              <li>Postman</li>
              <li>Trello</li>
              <li>Jira</li>
              <li>Slack</li>
            </ul>
          </div>

          <div className="More-skills">
            <h2>Other</h2>
            <ul>
              <li>Research</li>
              <li>Leadership</li>
              <li>Statistical Analysis</li>
            </ul>
          </div>

      </div>

    )
  }
}

export default Skills
