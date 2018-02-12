import React, { Component } from 'react'
import { Link } from 'react-router'

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


class Rule extends Component {
  render() {
    let { classes, rule } = this.props

    if (rule) {
      return (
        <div className="rule">
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.backButton}
                component={Link} to="/rules"
                color="inherit">
                <ChevronLeft />
              </IconButton>
              <Typography type="title" color="inherit">
                {rule.name}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}


export default withStyles(styles)(Rule)
