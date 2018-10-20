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
    const projectId = this.props.match.params.id;
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
          <img className="pageImage" src={"/" + this.state.project.previewImage} alt="project Image"  />

          <div className="projectpagewriting">
              <h2>{this.state.project.title}</h2>
              <p>{this.state.project.description}</p>
          </div>

          <div className="button-container">
            <a href="/product:id" className="button">See it live</a>
            <a href={this.state.project.demoURL} className="button">Github Repo</a>
          </div>

          <section className="project-page-section">
            <h2>Specs</h2>
            <hr />

            <div className="tech-specs-container">
              <div className="toolbox-component">
                <h3>Tech</h3>
                <ul>
                  {this.state.project.techSpecs.map((item)=> {
                  return <li>{item}</li>
                  })}
                </ul>
              </div>

              <div className="toolbox-component">
                <h3>Toolbox</h3>
                <ul>
                  {this.state.project.toolBox.map((item) => {
                  return <li>{item}</li>
                  })}
                </ul>
              </div>

              <div className="toolbox-component">
                <h3>More</h3>
                <ul>
                  {this.state.project.more.map((item) => {
                  return <li>{item}</li>
                  })}
                </ul>
              </div>
            </div>
          </section>
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
