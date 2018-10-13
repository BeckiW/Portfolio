import React from "react"
import "./style.css"


const projectsJson = require("../../Data/projects.json")


class ProjectsPreview extends React.Component {
  render() {
    return (
      <div className="project-item">
        <div className="projectImage">
          <img src={this.props.image} alt="project Image" />
        </div>
        <h2>{this.props.shortDescription}</h2>
      </div>
    )
  }
}

export default ProjectsPreview
