import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'


class NumberAttribute extends Component {
  onChange = (event, value) =>
    this.props.onChange(String(value))

  render() {
    const { attribute } = this.props
    const value = attribute.value
      ? attribute.value.value
      : attribute.default

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom>
            {attribute.name}
            <br />
            {value}{attribute.measurement || ''}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Slider
            value={Number(value)}
            min={Number(attribute.min || 0)}
            max={Number(attribute.max || 100)}
            step={Number(attribute.step || 10)}
            onChange={this.onChange}
          />
        </Grid>
      </Grid>
    )
  }
}


export default NumberAttribute
