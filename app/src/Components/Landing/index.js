import React, { Component } from 'react';
import "./style.css"
import ProjectsPreview from './Components/ProjectPreviews'
import Skills from './Components/Skills'
import Header from './Header'

const projectsJson = require("./Data/projects.json")


class Landing extends React.Component {

  render() {
    return (


      <div className="Landing-Page">
        <h1 className="title">Becki Wordsworth</h1>
        <h2 className="byline">Javascript Developer and Researcher</h2>
        <h3 className ="Summary">I'm a self-driven & creative problem solver with a PhD in Medical Physics & a passion for working with technology, software and cool new ideas. While working in research I did some programming (statistical & scripting languages for analysis) & based on that I'm looking to become a full-time developer. I spent 3 years as a technical recruiter in a business environment & this has inspired me to focus on JavaScript as my direction going forward.</h3>


        <div className="project-container">
          { projectsJson.projects.map((project) => {
              return (<ProjectsPreview key={project.id}
                  name={project.title}
                  image={project.previewImage}
                  shortDescription={project.shortDescription}
                  Description={project.Description}

                  deliveryTime={project.deliveryTime}
                />)
            })
          }
        </div>

        <Skills />

      </div>

          )}


export default Landing
