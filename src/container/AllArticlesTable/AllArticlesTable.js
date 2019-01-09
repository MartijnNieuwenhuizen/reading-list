import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addBulkArticle } from '../../redux/actions/addArticle'
import { get } from '../../utils/fetch'

import Form from '../Form/Form'
import FormItem from '../../presentational/Form/FormItem'
import FormItemInline from '../../presentational/Form/FormItemInline'

const mapStateToProps = state => ({ articles: state.articles })
const mapDispatchToProps = dispatch => bindActionCreators({ addBulkArticle }, dispatch)

class AllArticlesTable extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }
  async componentDidMount() {
    const tempStoredUrl = 'http://localhost:5000/get-all-articles'
    const articles = await get(tempStoredUrl)
    this.props.addBulkArticle(articles)
  }

  onChange(value) {
    console.log('onChange value: ', value)
  }
  onFocus(value) {
    console.log('onFocus value: ', value)
  }
  onBlur(value) {
    console.log('onBlur value: ', value)
  }

  render() {
    const { articles } = this.props
    console.log('articles: ', articles)
    const enhancesArticle = [
      ...articles,
      {
        _id: 'foo',
        title: '',
        authorName: '',
        href: ''
      }
    ]

    console.log('enhancesArticle: ', enhancesArticle)

    return (
      <Fragment>
        <Form>
          <ol className="article-lines">
            {enhancesArticle.map(article => (
              <li className="article-line" key={article._id}>
                <FormItemInline
                  type="text"
                  id={article._id}
                  ref={React.createRef()}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  value={article.title}
                />

                <FormItemInline
                  type="text"
                  id={article._id}
                  ref={React.createRef()}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  value={article.authorName}
                />

                <FormItemInline
                  type="url"
                  id={article._id}
                  ref={React.createRef()}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  value={article.href}
                />
              </li>
            ))}
          </ol>
        </Form>
      </Fragment>
    )
  }
}

// @TODO: probably move this to the app.js!? because it's the core data of the application
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArticlesTable)
