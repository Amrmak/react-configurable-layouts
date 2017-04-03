import React from 'react'

import '../../styles/layout.css'
import News from './News'

class Top extends React.Component {
  render() {
    return (
      <News view={this.props.view}
        content={this.props.content}
        parentClass="top"
      />
    )
  }
}

Top.PropTypes = {
  content: React.PropTypes.array,
  view: React.PropTypes.string.isRequired,
}

export default Top