import React, { Component } from 'react';
import "./style.css"
import Header from '../Header'
import Footer from '../Footer'
import ProjectPreview from "../ProjectPreview"
import "./style.css"


const projectsJson = require("../../Data/projects.json")

class ProjectPageTech extends React.Component {
  render() {
    return (
      <div className="TechPageContainer">
        <section className="landing-section my-projects">
          <h2>More Projects</h2>
          <hr />

          <div className="project-container">
            { projectsJson.projects.map((project) => {
                return (
                  <ProjectPreview id={project.id}
                    name={project.title}
                    image={project.previewImage}
                    shortDescription={project.shortDescription}
                    Description={project.Description}
                    deliveryTime={project.deliveryTime} />
                  )
                }
              )
            }
          </div>
        </section>
      </div>
    )
  }
}

export default ProjectPageTech
