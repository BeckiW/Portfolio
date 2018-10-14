import React, { Component } from 'react';
import "./style.css"
import ProjectsPreview from '../ProjectPreviews'
import Skills from '../Skills'

const projectsJson = require("../../Data/projects.json")


class Header extends React.Component {

  render() {
    return (
      <header className="page-header">
        <div className="logo">
          <span className="page-title">Becki Wordsworth</span><br />
          <span className="page-subtitle">Javascript Developer &amp; Researcher</span>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/project/1">Projects</a></li>
              <li><a href="mailto: r.a.wordsworth@gmail.com">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="social">
          <ul>
            <li><a href="https://twitter.com/BeckiWordsworth" target="_blank"><img src="/twitter-64.png" /></a></li>
            <li><a href="https://www.linkedin.com/in/beckiwordsworth/" target="_blank"><img src="/linkedin-64.png" /></a></li>
          </ul>
        </div>
      </header>

    )
  }

}


export default Header
