import React from 'react'

import '../../styles/layout.css'

class Task extends React.Component {
  render() {
    const tasks = this.props.content;
    if (tasks.length !== 0) {
      return (
        <div className={this.props.parentClass}>
          {tasks.map((tasks, index) => (
            <div className={this.props.view} key={index}>
              {tasks}
            </div>
          ))}
        </div>
      )
    } else return <h1>Tasks didn't load</h1>
  }
}

export default Task