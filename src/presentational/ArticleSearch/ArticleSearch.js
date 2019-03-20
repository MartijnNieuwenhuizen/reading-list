import React from 'react'
import FormItem from '../Form/FormItem'

import './article-search.css'

const formElements = [
  {
    type: 'text',
    id: 'title',
    label: 'Title',
    refProp: React.createRef(),
    // onFocus: {item.onFocus},
    // onBlur: {item.onBlur},
    // input: {item.input},
  },
  {
    type: 'text',
    id: 'author',
    label: 'Author',
    refProp: React.createRef(),
    // onFocus: {item.onFocus},
    // onBlur: {item.onBlur},
    // input: {item.input},
  },
  {
    type: 'text',
    id: 'tags',
    label: 'Tags',
    refProp: React.createRef(),
    // onFocus: {item.onFocus},
    // onBlur: {item.onBlur},
    // input: {item.input},
  },
]

const onSubmit = e => {
  e.preventDefault()

  console.log('Searching')
}

export default props => {
  const foo = props.didSearch
    ? 'article-search__title article-search__title--active'
    : 'article-search__title'

  return (
    <form onSubmit={onSubmit} className="article-search">
      <legend className={foo}>Search</legend>

      <div className="article-search__container">
        {formElements.map(formItem => (
          <FormItem
            type={formItem.type}
            id={formItem.id}
            key={formItem.id}
            label={formItem.label}
            refProp={formItem.ref}
            // onFocus={item.onFocus}
            // onBlur={item.onBlur}
            // input={item.input}
          />
        ))}
      </div>
    </form>
  )
}
