import React, { Component } from 'react';
import "./style.css"


class Skills extends React.Component {

  render() {
    return (

      <div className="skills-component">
        <div className="coding-skills">
          <h3>Coding</h3>
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

        <div className="toolbox-skills">
          <h3>Toolbox</h3>
          <ul>
            <li>Atom</li>
            <li>Postman</li>
            <li>Trello</li>
            <li>Jira</li>
            <li>Slack</li>
          </ul>
        </div>

        <div className="more-skills">
          <h3>Other</h3>
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
