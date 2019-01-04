import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import TeaserList from '../../presentational/TeaserList/TeaserList'

const mapStateToProps = state => ({ articles: state.articles })

class AllArticlesTeaserList extends Component {
  render() {
    console.log('this.props: ', this.props)
    const { articles } = this.props

    return (
      <Fragment>
        <TeaserList items={articles} />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps)(AllArticlesTeaserList)
