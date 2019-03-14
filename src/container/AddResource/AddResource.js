import React, { Component } from 'react'

import AddResourcess from '../../presentational/AddResource/AddResource'
import createNewArticle from '../../utils/createNewArticle/createNewArticle'
import { postArticle } from '../../api/articles'

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
      ref: React.createRef(),
      input: 'foo',
    },
    {
      label: 'Author',
      id: 'author',
      placeholder: 'You know who!',
      type: 'text',
      onFocus: () => 'onFocus',
      onBlur: () => 'onBlur',
      ref: React.createRef(),
      input: 'bar',
    },
    {
      label: 'URL',
      id: 'url',
      placeholder: 'www.best-ever.design',
      type: 'url',
      onFocus: () => 'onFocus',
      onBlur: () => 'onBlur',
      ref: React.createRef(),
      input: 'http://martijnnieuwenhuizen.nl',
    },
    {
      label: 'Tags',
      id: 'tags',
      placeholder: 'JS CSS HTML ETC',
      type: 'text',
      onFocus: () => 'previewTags',
      onBlur: () => 'onBlur',
      ref: React.createRef(),
      input: 'foo bar',
    },
  ]

  async onSubmit(event) {
    event.preventDefault()

    const formInput = this.formItems.reduce((total, formItem) => {
      total[formItem.id] = formItem.ref.current.value

      return total
    }, {})

    const { title, author, url, tags } = formInput
    const newArticle = await createNewArticle(title, author, url, tags)
    const foo = await postArticle(newArticle)
    // Add action after posting the article
  }

  render() {
    const title = 'Submit a new resource to your list!'
    const method = 'POST'

    return (
      <AddResourcess title={title} method={method} formItems={this.formItems} />
    )
  }
}

export default AddResources
