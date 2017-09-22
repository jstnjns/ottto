import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import BooleanAttribute from './boolean'
import ColorAttribute from './color'
import NumberAttribute from './number'


class Attribute extends Component {
  render() {
    let { attribute } = this.props
    let Contents

    switch(attribute.type) {
      case 'boolean':
        Contents = BooleanAttribute
        break
      case 'color':
        Contents = ColorAttribute
        break
      case 'number':
        Contents = NumberAttribute
        break
    }

    return (
      <Form.Field>
        <label htmlFor={attribute.name}>
          {attribute.label}
        </label>
        <Contents {...this.props} onChange={this.props.onChange} />
      </Form.Field>
    )
  }
}


export default Attribute
