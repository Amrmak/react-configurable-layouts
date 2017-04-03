import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import Layout from './Layout'

class LayoutContainer extends React.Component {
  constructor() {
    super()
    this.state = { layouts: {} }
  }
  componentDidMount() {
    axios.get('/layouts')
      .then(function (result) {
        this.setState({ layouts: result.data })
      }.bind(this))
  }
  render() {
    if (_.has(this.state.layouts, "layout01")) {
      return <Layout layouts={this.state.layouts} />
    } else {
      return <h1>Layouts DB Didn't Load</h1>
    }
  }
}

export default LayoutContainer