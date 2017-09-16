import React, { Component } from 'react'

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
      <div>
        <label htmlFor={attribute.name}>
          {attribute.label}
        </label>
        <div>
          <Contents {...this.props}
            onChange={this.props.onChange} />
        </div>
      </div>
    )
  }
}


export default Attribute
