import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ModulesList from '../modules/modules-list'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ChevronLeft from '@material-ui/icons/ChevronLeft'


const styles = (theme) => ({
  backButton: {
    marginLeft: -20
  }
})


class Room extends Component {
  render() {
    let { classes, room } = this.props

    if (room) {
      return (
        <div className="room">
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.backButton}
                component={Link} to="/"
                color="inherit">
                <ChevronLeft />
              </IconButton>
              <Typography type="title" color="inherit">
                {room.name}
              </Typography>
            </Toolbar>
          </AppBar>

          <ModulesList modules={room.modules} />
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}


export default withStyles(styles)(Room)
