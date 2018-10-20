import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProjectsPreview from './Components/ProjectPreviews'
import Skills from './Components/Skills'
import Landing from './Components/Landing'
import ProjectPage from './Components/ProjectPage'
import PageNotFound from './Components/PageNotFound'
import ProjectPageTech from './Components/ProjectPageTech'

const projectsJson = require("./Data/projects.json")

class App extends Component {
  render() {
    return (

      <Router>
        <div className="page-container">
          <Header />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/project/:id" component={ProjectPage}/>
            <Route path="/my-projects/" component={ProjectPageTech}/>

            <Route component={PageNotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>


    )
  }

}

export default App;
