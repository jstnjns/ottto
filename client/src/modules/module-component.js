import React, { Component } from 'react'
import { Link } from 'react-router'

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ChevronLeft from 'material-ui-icons/ChevronLeft'

import Attribute from '../module-attributes'


const styles = (theme) => ({
  backButton: {
    marginLeft: -20
  }
})


class Module extends Component {
  render() {
    let { classes, module } = this.props

    if (module) {
      return (
        <div className="module">
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.backButton}
                component={Link} to={`/rooms/${module.group.id}`}
                color="contrast">
                <ChevronLeft />
              </IconButton>
              <Typography type="title" color="inherit">
                {module.name}
              </Typography>
            </Toolbar>
          </AppBar>

          {module.type.attributes.map((attribute, key) => {
            return (
              <div key={key}
                style={{ margin: 10, padding: 10 }}>
                <Attribute
                  module={module}
                  attribute={attribute}
                  value={module.values[attribute.name]}
                  onChange={this.onAttributeChange.bind(this)} />
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  onAttributeChange(attribute) {
    this.props.onAttributeChange(attribute)
  }
}


export default withStyles(styles)(Module)
