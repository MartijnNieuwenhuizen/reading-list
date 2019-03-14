import React from 'react'

import './form-item.css'

export default props => (
  <div className="form-item">
    <label className="form-item__label" htmlFor={props.id}>
      {props.label}
    </label>

    <input
      className="form-item__input"
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      ref={props.refProp}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      value={props.input}
    />
  </div>
)
