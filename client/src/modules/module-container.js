import _ from 'lodash'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import ChevronLeft from 'material-ui-icons/ChevronLeft'

import { getModule, updateModule } from './modules-actions'
import Attribute from './attribute'

class Module extends Component {
  componentWillMount() {
    this.props.getModule(this.props.params.id)
  }

  render() {
    let { module, updateModule } = this.props

    if (module) {
      return (
        <div className="module">
          <AppBar position="static">
            <Toolbar>
              <IconButton
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
                  onChange={this.onAttributeChange(attribute).bind(this)}/>
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
    return (value) => {
      let module = _.clone(this.props.module)
      module.values[attribute.name] = value

      this.props.updateModule(module)
    }
  }
}


export default connect(
  (state, props) => ({ module: state.modules.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getModule, updateModule }, dispatch)
)(Module)
