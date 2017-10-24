import React, { Component } from 'react'
import { Link } from 'react-router'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'


class ModulesList extends Component {
  render() {
    return (
      <Grid container spacing={16}
        style={{ padding: 16 }}>
        {this.props.modules.map(this.renderRoom.bind(this))}
      </Grid>
    )
  }

  renderRoom(module, key) {
    return (
      <Grid item key={key} xs={3}>
        <Link to={`/modules/${module.id}`}>
          <Paper style={{ height: 80 }}>
          </Paper>
            <Typography type="caption">
              {module.name}
            </Typography>
        </Link>
      </Grid>
    )
  }
}


export default ModulesList
