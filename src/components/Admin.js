import React from 'react'

import Navbar from './Navbar'

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Navbar link="/" text="Go to Layout..." />
        <h1>Admin Panel</h1>
        <button>Add</button>
        <br /><br />
        <h1>Preview:</h1>
        <iframe src="/" frameBorder="0" width="80%" height="400px"></iframe>
      </div>
    );
  }
}

export default Admin
