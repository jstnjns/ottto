import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'


class NumberAttribute extends Component {
  render() {
    let { attribute, value } = this.props

    return (
      <div>
        <TextField type="number"
          label={attribute.label}
          value={value}
          min={attribute.min}
          max={attribute.max}
          onChange={this.onChange.bind(this)} />
      </div>
    )
  }

  onChange(event) {
    this.props.onChange(event.target.value)
  }
}


export default NumberAttribute
