import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Rules from 'rules/rules-component'
import { getRules } from 'rules/rules-actions'
import { getConditions } from 'conditions/conditions-actions'


export default connect(
  // mapStateToProps
  (state) => ({
    rules: state.entities.rules,
  }),
  // mapDispatchToProps
  (dispatch) => ({
    getRules: () => dispatch(getRules()),
    getConditions: () => dispatch(getConditions()),
    onRulePress: (rule) => (
      Actions.rule({
        title: rule.name,
        rule,
      })
    )
  })
)(Rules)
