import React, { Component, Fragment } from 'react'
import TeaserList from '../../presentational/TeaserList/TeaserList'
import { ArticleContext } from '../../context/ArticleContext'
import { getAllArticles } from '../../api/articles'

class AllArticlesTeaserList extends Component {
  async componentDidMount() {
    // Go get the articles from the server
    const articles = await getAllArticles()

    // Set the articles to the Context
    const context = this.context
    context.updateArticlesList(articles)
  }

  render() {
    const { articles } = this.context

    return (
      <Fragment>
        <TeaserList items={articles} />
      </Fragment>
    )
  }
}

AllArticlesTeaserList.contextType = ArticleContext

// @TODO: probably move this to the app.js!? because it's the core data of the application
export default AllArticlesTeaserList
