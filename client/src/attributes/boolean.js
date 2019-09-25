import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'


const handleChange = (onChange) => (event) =>
  onChange(String(event.target.checked))


export default (props) => {
  const { attribute, onChange } = props
  const value = attribute.value.value
    ? attribute.value.value === 'true'
    : attribute.default

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography gutterBottom>
          {attribute.name}
          <br />
          {value ? 'On' : 'Off'}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Switch
          checked={value}
          label={attribute.name}
          edge='start'
          color='default'
          onChange={handleChange(onChange)}
        />
      </Grid>
    </Grid>
  )
}
