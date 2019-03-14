import React from 'react'

import Form from '../../container/Form/Form'

import FormItem from '../../presentational/Form/FormItem'
import IconButton from '../../presentational/IconButton/IconButton'
import Icon from '../../presentational/Icon/Icon'

export default props => (
  <Form method={props.method} onSubmit={props.onSubmit}>
    <fieldset>
      <legend>{props.title}</legend>

      {props.formItems.map(item => (
        <div className="content-item">
          <FormItem
            type={item.type}
            id={item.id}
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
            refProp={item.ref}
            onFocus={item.onFocus}
            onBlur={item.onBlur}
            input={item.input}
          />
        </div>
      ))}

      <IconButton type="submit">
        <Icon type="add" />
      </IconButton>
    </fieldset>
  </Form>
)
