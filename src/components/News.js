import React from 'react'

import '../../styles/layout.css'

class News extends React.Component {
  render() {
    const news = this.props.content;
    if (news.length !== 0) {
      return (
        <div className={this.props.parentClass}>
          {news.map((news, index) => (
            <div className={this.props.view} key={index}>
              {news}
            </div>
          ))}
        </div>
      )
    } else return <h1>News didn't load</h1>
  }
}

News.PropTypes = {
  content: React.PropTypes.string.isRequired,
  view: React.PropTypes.string.isRequired,
}

export default News