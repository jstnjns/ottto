import _ from 'lodash'
import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { getRules } from './rules-actions'
import RulesList from './rules-list'


class RulesContainer extends PureComponent {
  componentWillMount() {
    this.props.getRules()
  }

  render() {
    let { rules } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Rules
            </Typography>
          </Toolbar>
        </AppBar>

        <RulesList rules={rules} />
      </div>
    )
  }
}


export default connect(
  (state) => ({ rules: _.toArray(state.rules.entities) }),
  (dispatch) => bindActionCreators({ getRules }, dispatch)
)(RulesContainer)
