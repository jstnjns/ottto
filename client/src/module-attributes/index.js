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
      default:
        break
    }

    return (
      <Contents {...this.props}
        onChange={this.props.onChange} />
    )
  }
}


export default Attribute
