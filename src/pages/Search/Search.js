import React, { Component } from 'react'

import App from '../../App'
import AllArticlesTeaserList from '../../container/AllArticlesTeaserList/AllArticlesTeaserList'
import ArticleSearch from '../../presentational/ArticleSearch/ArticleSearch'

import './search.css'

class Search extends Component {
  state = {
    search: [],
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          search: [{}, {}],
        }),
      1000
    )
  }

  render() {
    const searchClass = this.state.search.length
      ? 'search-x__input search-x__input--with-results'
      : 'search-x__input'

    const resultClass = this.state.search.length
      ? 'search-x__results content-item search-x__results--with-results'
      : 'search-x__results content-item'

    return (
      <App>
        <div className="search-x">
          <div className="constrain--s">
            <div className={searchClass}>
              <ArticleSearch didSearch={this.state.search.length} />
            </div>
            <div className={resultClass}>
              <AllArticlesTeaserList />
            </div>
          </div>
        </div>
      </App>
    )
  }
}

export default Search
