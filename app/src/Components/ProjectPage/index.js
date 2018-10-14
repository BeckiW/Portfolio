import React, { Component } from 'react';
import "./style.css"
import Header from '../Header'

const projectsJson = require("../../Data/projects.json")

class ProductPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const projectId = this.props.match.params.id;   // Get the ID from react router
    const project = projectsJson.projects.find((project) => {
      if (project.id == projectId) {
        return true;
      } else {
        return false;
      }
    })

    this.setState({
      project: project
    })
  }

  render() {
    if ( this.state.project )
    {
      return (
        <div className="project-page">
            <img className="pageImage" src={this.state.project.image} alt="project Image" />
            <h2>{this.state.project.title}</h2>
            <p>{this.state.project.description}</p>

            <div className="button"><a href="/product:id"><p>See it live</p></a></div>
            <div className="button"><a href={this.state.project.demoURL}><p>Github Repo</p></a></div>


        </div>
      )
    } else {
      return (
        <div>NO PROJECT FOUND</div>
      )
    }
  }
}


export default ProductPage
