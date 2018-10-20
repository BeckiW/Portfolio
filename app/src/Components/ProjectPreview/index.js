import React from "react"
import "./style.css"

class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="project-item">
        <div className="project-image">
          <img src={"/" + this.props.image} alt="project Image" />
        </div>
        <div className="project-summary">
          <a href={"/project/" + this.props.id}><span class="project-title">{this.props.name}</span></a>
          <p class="project-description">{this.props.shortDescription}</p>
        </div>
      </div>
    )
  }
}

export default ProjectPreview
