import React, { Component } from 'react'

import { FormGroup, FormLabel, FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'


class BooleanAttribute extends Component {
  render() {
    let { attribute, value } = this.props

    return (
      <FormGroup>
        <FormLabel>{attribute.label}</FormLabel>
        <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={this.onChange.bind(this)} />
          }
          label={attribute.options[1].label}
        />
      </FormGroup>
    )
  }

  onChange(event, checked) {
    this.props.onChange(checked)
  }
}


export default BooleanAttribute
