import React from 'react'

import '../../styles/layout.css'

class Event extends React.Component {
  render() {
    const events = this.props.content;
    if (events.length !== 0) {
      return (
        <div className={this.props.parentClass}>
          {events.map((events, index) => (
            <div className={this.props.view} key={index}>
              {events}
            </div>
          ))}
        </div>
      )
    } else return <h1>Events didn't load</h1>
  }
}

export default Event