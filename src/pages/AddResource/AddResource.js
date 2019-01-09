import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import App from '../../App'
import Form from '../../container/Form/Form'
import FormItem from '../../presentational/Form/FormItem'
import createNewArticle from '../../utils/createNewArticle/createNewArticle'

import { addSingleArticle } from '../../redux/actions/addArticle'

import './add-resource.css'

class AddResources extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  formItems = [
    {
      label: 'Title',
      id: 'title',
      placeholder: 'This is the best article ever!',
      type: 'text',
      onFocus: () => 'onFocus',
      onBlur: () => 'onBlur',
      ref: React.createRef()
    },
    {
      label: 'Author',
      id: 'author',
      placeholder: 'You know who!',
      type: 'text',
      onFocus: () => 'onFocus',
      onBlur: () => 'onBlur',
      ref: React.createRef()
    },
    {
      label: 'URL',
      id: 'url',
      placeholder: 'www.best-ever.design',
      type: 'url',
      onFocus: () => 'onFocus',
      onBlur: () => 'onBlur',
      ref: React.createRef()
    },
    {
      label: 'Tags',
      id: 'tags',
      placeholder: 'JS CSS HTML ETC',
      type: 'text',
      onFocus: () => 'previewTags',
      onBlur: () => 'onBlur',
      ref: React.createRef()
    }
  ]

  async onSubmit(event) {
    event.preventDefault()

    const formInput = this.formItems.reduce((total, formItem) => {
      total[formItem.id] = formItem.ref.current.value

      return total
    }, {})

    const { title, author, url, tags } = formInput
    const newArticle = await createNewArticle(title, author, url, tags)
    this.props.addSingleArticle(newArticle)
  }

  render() {
    const title = 'Submit a new resource to your list!'
    const method = 'POST'
    const submitLabel = 'Add to collection'
    // const previewTags = () => console.log('previewTags')

    return (
      <App>
        <Form method={method} onSubmit={this.onSubmit}>
          <fieldset>
            <legend>{title}</legend>

            {this.formItems.map(item => (
              <FormItem
                type={item.type}
                id={item.id}
                key={item.id}
                label={item.label}
                placeholder={item.placeholder}
                refProp={item.ref}
                onFocus={item.onFocus}
                onBlur={item.onBlur}
              />
            ))}

            <button type="submit">{submitLabel}</button>
          </fieldset>
        </Form>
      </App>
    )
  }
}

export default connect(
  null,
  { addSingleArticle }
)(AddResources)
