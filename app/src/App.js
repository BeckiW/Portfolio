import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import ProjectsPreview from './Components/ProjectPreviews'
import Skills from './Components/Skills'
import Landing from './Componets/Landing'
import ProjectPage from './ProjectPage'
import PageNotFound from './PageNotFound'

const projectsJson = require("./Data/projects.json")

class App extends Component {
  render() {
    return (

      <Router>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/project/:id" component={ProjectPage}/>
                  <Route component={PageNotFound} />
                </Switch>

      </Router>

    )
  }

}

export default App;
