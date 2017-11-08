import React, { Component } from 'react'

import { FormGroup, FormLabel, FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'


class BooleanAttribute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  render() {
    let { attribute } = this.props

    return (
      <FormGroup>
        <FormLabel>{attribute.label}</FormLabel>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.value}
              onChange={this.onChange.bind(this)} />
          }
          label={attribute.options[1].label}
        />
      </FormGroup>
    )
  }

  onChange(event, checked) {
    let value = checked

    this.setState({ value })
    this.props.onChange(value)
  }
}


export default BooleanAttribute
