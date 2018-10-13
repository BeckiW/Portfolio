import React, { Component } from 'react';
import "./style.css"

const projectsJson = require("./Data/projects.json")

class ProductPage extends React.Component {

  render() {
      const projectId = this.props.match.params.id;   // Get the ID from react router
      this.project = this.projectsJson.filter(project => (project.id === projectId))
          this.setProject(project));  // find project using that id

    return (

      <div className="project-page"
          <img className="pageImage" src={this.project.image} alt="project Image" />
          <h2>{this.project.title}</h2>
          <p>{this.project.Description}</p>
          <button onclick={} type="button"> See it live</button>
          <button onclick={} type="button"> Github repo</button>
      </div>

          )}


export default ProductPage
