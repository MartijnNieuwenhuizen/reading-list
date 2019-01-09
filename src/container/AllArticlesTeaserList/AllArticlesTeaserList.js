import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addBulkArticle } from '../../redux/actions/addArticle'
import { get } from '../../utils/fetch'

import TeaserList from '../../presentational/TeaserList/TeaserList'

const mapStateToProps = state => ({ articles: state.articles })
const mapDispatchToProps = dispatch => bindActionCreators({ addBulkArticle }, dispatch)

class AllArticlesTeaserList extends Component {
  async componentDidMount() {
    const tempStoredUrl = 'http://localhost:5000/get-all-articles'
    const articles = await get(tempStoredUrl)
    this.props.addBulkArticle(articles)
  }

  render() {
    const { articles } = this.props

    return (
      <Fragment>
        <TeaserList items={articles} />
      </Fragment>
    )
  }
}

// @TODO: probably move this to the app.js!? because it's the core data of the application
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArticlesTeaserList)
