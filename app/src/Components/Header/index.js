import React, { Component } from 'react';
import "./style.css"
import ProjectsPreview from './Components/ProjectPreviews'
import Skills from './Components/Skills'

const projectsJson = require("./Data/projects.json")


class Header extends React.Component {

  render() {
    return (
      <div className="Header-Page">
        <h1 className="title">Becki Wordsworth</h1>
        <h2 className="byline">Javascript Developer and Researcher</h2>
        <img className="headerImage" src="BeckiHeadshot.jpg"/>

      <nav>
        <ul>
        <li>Stockholm</li>
        <li><a href="mailto:r.a.wordsworth@gmail.com">Email Me</a> </li>
        <li><a href="linkedin.com/in/beckiwordsworth">Linkedin Me</a></li>
        </ul>
      </nav>

            })
          }
        </div>

        <Skills />

      </div>

          )}


export default Header
