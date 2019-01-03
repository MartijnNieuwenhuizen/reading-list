import React, { Fragment } from 'react'

import Form from '../../presentational/Form/Form'
import AddResource from '../../container/AddResource/AddResource'

import './add-resource.css'

export default () => {
  const title = 'Submit a new resource to your list!'
  const method = 'POST'
  const submitLabel = 'Add to collection'
  const submitAction = event => {
    event.preventDefault()

    const formInput = formItems.map(formItem => ({
      [formItem.id]: formItem.ref.current.value
    }))

    console.log('formInput: ', formInput)
  }

  const previewTags = () => console.log('previewTags')

  const formItems = [
    {
      label: 'Title',
      id: 'title',
      placeholder: 'This is the best article ever!',
      type: 'text',
      method: null,
      ref: React.createRef()
    },
    {
      label: 'Author',
      id: 'author',
      placeholder: 'You know who!',
      type: 'text',
      method: null,
      ref: React.createRef()
    },
    {
      label: 'URL',
      id: 'url',
      placeholder: 'www.best-ever.design',
      type: 'url',
      method: null,
      ref: React.createRef()
    },
    {
      label: 'Tags',
      id: 'tags',
      placeholder: 'JS CSS HTML ETC',
      type: 'text',
      method: {
        type: 'click',
        func: previewTags
      },
      ref: React.createRef()
    }
  ]

  return (
    <Fragment>
      <AddResource>
        <Form
          title={title}
          method={method}
          formItems={formItems}
          submitLabel={submitLabel}
          submitAction={submitAction}
        />
      </AddResource>
    </Fragment>
  )
}
