import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRule } from './rules-actions'
import Rule from './rule-component'


class RuleContainer extends Component {
  componentWillMount() {
    this.props.getRule(this.props.params.id)
  }

  render() {
    return (
      <Rule rule={this.props.rule} />
    )
  }
}


export default connect(
  (state, props) => ({ rule: state.rules.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getRule }, dispatch)
)(RuleContainer)
