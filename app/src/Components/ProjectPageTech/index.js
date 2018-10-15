import React, { Component } from 'react';
import "./style.css"
import Header from '../Header'
import Footer from '../Footer'

const projectsJson = require("../../Data/projects.json")

class ProductPageTech extends React.Component {


  render() {

      return (

        <div>
        <Header />

        <div className="project-item">
          <div className="project-image">
            <img className="pageImage" src={"/" + this.props.previewImage} alt="project Image" />
          </div>
          <div className="project-summary">
            <a href={"/project/" + this.props.id}><span class="project-title">{this.props.name}</span></a>
            <p class="project-description">{this.props.shortDescription}</p>
          </div>
        </div>
        <Footer />
        </div>

      )
    }
  }



export default ProductPageTech
