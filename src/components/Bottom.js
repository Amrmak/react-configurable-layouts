import React from 'react'

import '../../styles/layout.css'
import Event from './Event'
import Task from './Task'

class Bottom extends React.Component {
  render() {
    return (
      <div className="bottom">
        <Event view={this.props.view1}
          content={this.props.content1}
          parentClass="bottom-left"
        />
        <Task view={this.props.view2}
          content={this.props.content2}
          parentClass="bottom-right"
        />
      </div>
    )
  }
}

Bottom.PropTypes = {
  content: React.PropTypes.array,
  view: React.PropTypes.string.isRequired,
}

export default Bottom