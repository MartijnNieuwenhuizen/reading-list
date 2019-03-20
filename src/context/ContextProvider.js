import React, { Component } from 'react'
import { ArticleContext } from '../context/ArticleContext'

class ContextProvider extends Component {
  state = {
    articles: [],
    updateArticlesList: articles => {
      this.setState({ articles })
    },
  }

  render() {
    return (
      <ArticleContext.Provider value={this.state}>
        {this.props.children}
      </ArticleContext.Provider>
    )
  }
}

export default ContextProvider
