import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './Navbar'
import BlogList from './BlogList'
import BlogForm from './BlogForm'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={BlogList} />
          <Route path="/form" component={BlogForm} />
        </div>
      </Router>
    )
  }
}

export default Routes
