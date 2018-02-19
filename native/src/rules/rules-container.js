import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Rules from 'rules/rules-component'
import { getRules } from 'rules/rules-actions'


export default connect(
  // mapStateToProps
  (state) => ({
    rules: _.toArray(state.rules.entities)
  }),
  // mapDispatchToProps
  (dispatch) => ({
    getRules: () => dispatch(getRules()),
    onRulePress: (rule) => (
      Actions.rule({
        title: rule.name,
        rule,
      })
    )
  })
)(Rules)
