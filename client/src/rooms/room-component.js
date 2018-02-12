import React, { Component } from 'react'
import { Link } from 'react-router'

import ModulesList from '../modules/modules-list'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ChevronLeft from 'material-ui-icons/ChevronLeft'


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
