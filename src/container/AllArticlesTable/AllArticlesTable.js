import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addBulkArticle } from '../../redux/actions/addArticle'
import { get } from '../../utils/fetch'

import Form from '../Form/Form'
import FormItemInline from '../../presentational/Form/FormItemInline'

import { reduxForm, FieldArray } from 'redux-form'

const mapStateToProps = state => {
  console.log('state mapStateToProps: ', state)

  let foo = {}

  if (state.articles.length) {
    foo = state.articles.reduce((all, item) => {
      all[item._id] = item
      return all
    }, {})
  }

  return { articles: foo }
}
const mapDispatchToProps = dispatch => bindActionCreators({ addBulkArticle }, dispatch)

const Foo = formData => {
  console.log('formData: ', formData)
  console.log('formData.fields.length: ', formData.fields.length)

  return (
    <div>
      <h1>Hellloo from the formArray!</h1>
      <p>I have {formData.fields.length} items</p>
    </div>
  )
}

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

    return (
      <Fragment>
        <Form>
          <ol className="article-lines">
            <FieldArray component={Foo} name="articles" />
            {/* {enhancesArticle.map(article => (
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
            ))} */}
          </ol>
        </Form>
      </Fragment>
    )
  }
}

const InitializeForm = reduxForm({
  form: 'AllArticlesTable'
})(AllArticlesTable)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitializeForm)
