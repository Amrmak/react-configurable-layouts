import React from 'react'

import '../../styles/layout.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <a href={this.props.link}>{this.props.text}</a>
      </div>
    );
  }
}

Navbar.propTypes = {
  link: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired  
}

export default Navbar