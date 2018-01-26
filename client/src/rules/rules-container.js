import _ from 'lodash'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import { getRules } from './rules-actions'
import RulesList from './rules-list'


class RulesContainer extends Component {
  componentWillMount() {
    this.props.getRules()
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Rules
            </Typography>
          </Toolbar>
        </AppBar>

        <RulesList rules={this.props.rules} />
      </div>
    )
  }
}


export default connect(
  (state) => ({ rules: _.toArray(state.rules.entities) }),
  (dispatch) => bindActionCreators({ getRules }, dispatch)
)(RulesContainer)
