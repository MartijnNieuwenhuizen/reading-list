import React from 'react'

import './form.css'

export default props => {
  const { title, method, formItems, submitLabel, submitAction } = props

  const input = itemProps => {
    const baseAttributes = {
      id: itemProps.id,
      type: itemProps.type,
      placeholder: itemProps.placeholder,
      ref: itemProps.ref
    }

    if (itemProps.method && itemProps.method.type === 'click') {
      Object.assign(baseAttributes, { onClick: itemProps.method.func })
    }

    return <input {...baseAttributes} />
  }

  return (
    <form action="" method={method} onSubmit={submitAction}>
      <fieldset>
        <legend>{title}</legend>

        {formItems.map(formItem => (
          <div className="form__label-input" key={formItem.id}>
            <label htmlFor={formItem.id}>{formItem.label}</label>
            {input(formItem)}
          </div>
        ))}

        <button type="submit">{submitLabel}</button>
      </fieldset>
    </form>
  )
}
