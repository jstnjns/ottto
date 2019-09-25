import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ChevronLeft from '@material-ui/icons/ChevronLeft'


export default class Rule extends Component {
  render() {
    let { rule } = this.props

    if (rule) {
      return (
        <div className="rule">
          <AppBar position="static">
            <Toolbar>
              <IconButton
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
