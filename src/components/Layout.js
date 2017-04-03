import React from 'react'

import '../../styles/layout.css'
import Navbar from './Navbar'
import Top from './Top'
import Bottom from './Bottom'

class Layout extends React.Component {
  render() {
    const top = this.props.layouts.layout01.top;
    const bottom1 = this.props.layouts.layout01.bottom1;   
    const bottom2 = this.props.layouts.layout01.bottom2;         
    return (
      <div>
        <Navbar link="/Admin" text="Go to Admin..." />
        <Top content={top.content} view={top.viewType}/>
        <Bottom content1={bottom1.content} view1={bottom1.viewType}
                content2={bottom2.content} view2={bottom2.viewType}/>
      </div>
    )
  }
}

export default Layout