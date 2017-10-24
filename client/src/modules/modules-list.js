import React, { Component } from 'react'
import { Link } from 'react-router'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import FiberManualRecord from 'material-ui-icons/FiberManualRecord'


class ModulesList extends Component {
  render() {
    return (
      <Grid style={{ padding: 16 }}
        spacing={16}
        justify="center"
        container>
        {this.props.modules.map(this.renderRoom.bind(this))}
      </Grid>
    )
  }

  renderRoom(module, key) {
    return (
      <Grid item key={key} xs={3} sm={2}>
        <Link to={`/modules/${module.id}`}
          style={{ textDecoration: 'none', textAlign: 'center' }}>
          <Typography align="center">
            <FiberManualRecord style={{ fill: '#CCCCCC', width: 72, height: 72 }} />
          </Typography>

          <Typography type="caption"
            align="center">
            {module.name}
          </Typography>
        </Link>
      </Grid>
    )
  }
}


export default ModulesList
